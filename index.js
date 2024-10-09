(function(l,c,u,y,f,b,E,C,v,A){"use strict";var m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F=typeof m=="object"&&m&&m.Object===Object&&m,j=typeof self=="object"&&self&&self.Object===Object&&self;F||j||Function("return this")();var _=typeof window<"u"?c.useLayoutEffect:c.useEffect;function M(t,n){const s=c.useRef(t);_(function(){s.current=t},[t]),c.useEffect(function(){if(n===null)return;const e=setInterval(function(){s.current()},n);return function(){clearInterval(e)}},[n])}const N=async function(t,n,s){const e=t.slice(Math.max(t.length-15,0)).map(function(a){return{role:a.replyContent?`${a.author}
in reply to
${a.replyContent.replace(`
`," ")}`:a.author,content:a.attachmentFilenames.length?`${a.content}
${a.attachmentFilenames.map(function(i){return`[Attachment: ${i}]`}).join(`
`)}`.trim():a.content,timestamp:a.timestamp}});for(let a=1;a<e.length;a++){const i=e[a].timestamp-e[a-1].timestamp;i>=36e5&&e.splice(a,0,{role:"<time_passed>",content:`${Math.floor(i/36e5)} hour(s)`,timestamp:e[a].timestamp})}const r=Date.now()-e[e.length-1].timestamp;r>=36e5&&e.push({role:"<time_passed>",content:`${Math.floor(r/36e5)} hour(s)`,timestamp:Date.now()}),e.forEach(function(a){delete a.timestamp});const p=(await fetch("https://api.fireworks.ai/inference/v1/chat/completions",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({model:s,max_tokens:4e3,top_p:1,top_k:40,presence_penalty:0,frequency_penalty:.1,temperature:.6,messages:e})}).then(function(a){return a.json()})).choices[0].message.content;return p.split(`
`).pop()?.startsWith("[Attachment:")?"":p},{Text:P}=E.General,O=u.findByProps("sendMessage","receiveMessage"),T=u.findByStoreName("SelectedChannelStore"),$=u.findByStoreName("MessageStore"),d=[],{ChatInput:D}=u.findByProps("ChatInput"),B=function(t){const n=$.getMessages(t),s=Object.keys(n._map).map(function(e){return n._map[e]}).sort(function(e,r){return e.timestamp-r.timestamp});return s.map(function(e){return{author:e.author.username,content:e.content,replyAuthor:e.messageReference&&s.find(function(r){return r.id==e.messageReference.message_id})?.author.username,replyContent:e.messageReference&&s.find(function(r){return r.id==e.messageReference.message_id})?.content,attachmentFilenames:e.attachments.map(function(r){return r.filename}),timestamp:Date.parse(e.timestamp)}})},L=function(t){return t.split("").reduce(function(n,s){return n=(n<<5)-n+s.charCodeAt(0),n&n},0)},k=function(){const[t,n]=c.useState(""),[s,e]=c.useState(0),[r,p]=c.useState([]);v.useProxy(o);const a=T.getChannelId();return M(function(){const i=B(a),I=L(JSON.stringify(i));s!==I&&(e(I),p(i))},1e3),c.useEffect(function(){n(""),o.enabled&&r.length&&N(r,o.apiKey,o.model).then(n)},[r]),o.enabled&&t&&React.createElement(f.ReactNative.TouchableOpacity,{onPress:function(){t&&(n(""),O.sendMessage(a,{content:t}))}},React.createElement(P,{style:{color:"white",padding:10}},t))};function K(){return d.push(b.after("render",D.prototype,function(t,n){return React.createElement(f.ReactNative.View,{style:{backgroundColor:"transparent"}},React.createElement(k,null),n)})),d.push(b.before("render",f.ReactNative.Pressable.type,function(t){let[n]=t;n?.accessibilityLabel===f.i18n.Messages.SEND&&(n.onLongPress=function(){o.enabled=!o.enabled,o.enabled?y.showToast("Enabled AI prerespond"):y.showToast("Disabled AI prerespond")})})),function(){return d.forEach(function(t){return t()})}}const{Form:G,FormSection:R,FormDivider:x,FormIcon:J,FormSwitchRow:U,FormHint:h,FormInput:w,FormText:g}=E.Forms;function V(){return v.useProxy(o),React.createElement(G,null,React.createElement(R,{title:"Service Settings"},React.createElement(U,{label:"Enable AI",leading:React.createElement(J,{source:A.getAssetIDByName("pencil")}),value:o.enabled,onValueChange:function(t){return o.enabled=t}}),React.createElement(h,null,React.createElement(g,null,"You can always disable the plugin by long-pressing the send button."))),React.createElement(R,{title:"AI Settings"},React.createElement(w,{value:o.apiKey,onChange:function(t){return o.apiKey=t}}),React.createElement(h,null,React.createElement(g,null,"API Key")),React.createElement(x,null),React.createElement(w,{value:o.model,onChange:function(t){return o.model=t}}),React.createElement(h,null,React.createElement(g,null,"Model"))))}const o=C.storage;let S;const q=function(){o.enabled??=!1,S=K()},z=function(){S?.()};return l.onLoad=q,l.onUnload=z,l.settings=V,l.vstorage=o,l})({},window.React,vendetta.metro,vendetta.ui.toasts,vendetta.metro.common,vendetta.patcher,vendetta.ui.components,vendetta.plugin,vendetta.storage,vendetta.ui.assets);
