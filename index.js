(function(ie,ye,Qe,me,Xe,Ze,Yt,et,Bt){"use strict";var he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},De={exports:{}},d={},tt;function zt(){if(tt)return d;tt=1;var p=Symbol.for("react.element"),i=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),b=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),Z=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),G=Symbol.iterator;function ce(r){return r===null||typeof r!="object"?null:(r=G&&r[G]||r["@@iterator"],typeof r=="function"?r:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,ge={};function U(r,o,y){this.props=r,this.context=o,this.refs=ge,this.updater=y||V}U.prototype.isReactComponent={},U.prototype.setState=function(r,o){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,o,"setState")},U.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function be(){}be.prototype=U.prototype;function ee(r,o,y){this.props=r,this.context=o,this.refs=ge,this.updater=y||V}var te=ee.prototype=new be;te.constructor=ee,J(te,U.prototype),te.isPureReactComponent=!0;var W=Array.isArray,A=Object.prototype.hasOwnProperty,M={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function Q(r,o,y){var h,g={},T=null,w=null;if(o!=null)for(h in o.ref!==void 0&&(w=o.ref),o.key!==void 0&&(T=""+o.key),o)A.call(o,h)&&!z.hasOwnProperty(h)&&(g[h]=o[h]);var S=arguments.length-2;if(S===1)g.children=y;else if(1<S){for(var E=Array(S),D=0;D<S;D++)E[D]=arguments[D+2];g.children=E}if(r&&r.defaultProps)for(h in S=r.defaultProps,S)g[h]===void 0&&(g[h]=S[h]);return{$$typeof:p,type:r,key:T,ref:w,props:g,_owner:M.current}}function _e(r,o){return{$$typeof:p,type:r.type,key:o,ref:r.ref,props:r.props,_owner:r._owner}}function le(r){return typeof r=="object"&&r!==null&&r.$$typeof===p}function Ne(r){var o={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(y){return o[y]})}var Ee=/\/+/g;function fe(r,o){return typeof r=="object"&&r!==null&&r.key!=null?Ne(""+r.key):o.toString(36)}function re(r,o,y,h,g){var T=typeof r;(T==="undefined"||T==="boolean")&&(r=null);var w=!1;if(r===null)w=!0;else switch(T){case"string":case"number":w=!0;break;case"object":switch(r.$$typeof){case p:case i:w=!0}}if(w)return w=r,g=g(w),r=h===""?"."+fe(w,0):h,W(g)?(y="",r!=null&&(y=r.replace(Ee,"$&/")+"/"),re(g,o,y,"",function(D){return D})):g!=null&&(le(g)&&(g=_e(g,y+(!g.key||w&&w.key===g.key?"":(""+g.key).replace(Ee,"$&/")+"/")+r)),o.push(g)),1;if(w=0,h=h===""?".":h+":",W(r))for(var S=0;S<r.length;S++){T=r[S];var E=h+fe(T,S);w+=re(T,o,y,E,g)}else if(E=ce(r),typeof E=="function")for(r=E.call(r),S=0;!(T=r.next()).done;)T=T.value,E=h+fe(T,S++),w+=re(T,o,y,E,g);else if(T==="object")throw o=String(r),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return w}function x(r,o,y){if(r==null)return r;var h=[],g=0;return re(r,h,"","",function(T){return o.call(y,T,g++)}),h}function K(r){if(r._status===-1){var o=r._result;o=o(),o.then(function(y){(r._status===0||r._status===-1)&&(r._status=1,r._result=y)},function(y){(r._status===0||r._status===-1)&&(r._status=2,r._result=y)}),r._status===-1&&(r._status=0,r._result=o)}if(r._status===1)return r._result.default;throw r._result}var l={current:null},X={transition:null},Re={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:X,ReactCurrentOwner:M};function ne(){throw Error("act(...) is not supported in production builds of React.")}return d.Children={map:x,forEach:function(r,o,y){x(r,function(){o.apply(this,arguments)},y)},count:function(r){var o=0;return x(r,function(){o++}),o},toArray:function(r){return x(r,function(o){return o})||[]},only:function(r){if(!le(r))throw Error("React.Children.only expected to receive a single React element child.");return r}},d.Component=U,d.Fragment=$,d.Profiler=P,d.PureComponent=ee,d.StrictMode=v,d.Suspense=B,d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Re,d.act=ne,d.cloneElement=function(r,o,y){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var h=J({},r.props),g=r.key,T=r.ref,w=r._owner;if(o!=null){if(o.ref!==void 0&&(T=o.ref,w=M.current),o.key!==void 0&&(g=""+o.key),r.type&&r.type.defaultProps)var S=r.type.defaultProps;for(E in o)A.call(o,E)&&!z.hasOwnProperty(E)&&(h[E]=o[E]===void 0&&S!==void 0?S[E]:o[E])}var E=arguments.length-2;if(E===1)h.children=y;else if(1<E){S=Array(E);for(var D=0;D<E;D++)S[D]=arguments[D+2];h.children=S}return{$$typeof:p,type:r.type,key:g,ref:T,props:h,_owner:w}},d.createContext=function(r){return r={$$typeof:b,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:N,_context:r},r.Consumer=r},d.createElement=Q,d.createFactory=function(r){var o=Q.bind(null,r);return o.type=r,o},d.createRef=function(){return{current:null}},d.forwardRef=function(r){return{$$typeof:L,render:r}},d.isValidElement=le,d.lazy=function(r){return{$$typeof:q,_payload:{_status:-1,_result:r},_init:K}},d.memo=function(r,o){return{$$typeof:Z,type:r,compare:o===void 0?null:o}},d.startTransition=function(r){var o=X.transition;X.transition={};try{r()}finally{X.transition=o}},d.unstable_act=ne,d.useCallback=function(r,o){return l.current.useCallback(r,o)},d.useContext=function(r){return l.current.useContext(r)},d.useDebugValue=function(){},d.useDeferredValue=function(r){return l.current.useDeferredValue(r)},d.useEffect=function(r,o){return l.current.useEffect(r,o)},d.useId=function(){return l.current.useId()},d.useImperativeHandle=function(r,o,y){return l.current.useImperativeHandle(r,o,y)},d.useInsertionEffect=function(r,o){return l.current.useInsertionEffect(r,o)},d.useLayoutEffect=function(r,o){return l.current.useLayoutEffect(r,o)},d.useMemo=function(r,o){return l.current.useMemo(r,o)},d.useReducer=function(r,o,y){return l.current.useReducer(r,o,y)},d.useRef=function(r){return l.current.useRef(r)},d.useState=function(r){return l.current.useState(r)},d.useSyncExternalStore=function(r,o,y){return l.current.useSyncExternalStore(r,o,y)},d.useTransition=function(){return l.current.useTransition()},d.version="18.3.1",d}var se={exports:{}};se.exports;var rt;function Kt(){return rt||(rt=1,function(p,i){process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var $="18.3.1",v=Symbol.for("react.element"),P=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),Z=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),U=Symbol.iterator,be="@@iterator";function ee(e){if(e===null||typeof e!="object")return null;var t=U&&e[U]||e[be];return typeof t=="function"?t:null}var te={current:null},W={transition:null},A={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},M={current:null},z={},Q=null;function _e(e){Q=e}z.setExtraStackFrame=function(e){Q=e},z.getCurrentStack=null,z.getStackAddendum=function(){var e="";Q&&(e+=Q);var t=z.getCurrentStack;return t&&(e+=t()||""),e};var le=!1,Ne=!1,Ee=!1,fe=!1,re=!1,x={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:W,ReactCurrentOwner:M};x.ReactDebugCurrentFrame=z,x.ReactCurrentActQueue=A;function K(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];X("warn",e,n)}}function l(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];X("error",e,n)}}function X(e,t,n){{var a=x.ReactDebugCurrentFrame,u=a.getStackAddendum();u!==""&&(t+="%s",n=n.concat([u]));var c=n.map(function(s){return String(s)});c.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,c)}}var Re={};function ne(e,t){{var n=e.constructor,a=n&&(n.displayName||n.name)||"ReactClass",u=a+"."+t;if(Re[u])return;l("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,a),Re[u]=!0}}var r={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,n){ne(e,"forceUpdate")},enqueueReplaceState:function(e,t,n,a){ne(e,"replaceState")},enqueueSetState:function(e,t,n,a){ne(e,"setState")}},o=Object.assign,y={};Object.freeze(y);function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||r}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};{var g={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},T=function(e,t){Object.defineProperty(h.prototype,e,{get:function(){K("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var w in g)g.hasOwnProperty(w)&&T(w,g[w])}function S(){}S.prototype=h.prototype;function E(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||r}var D=E.prototype=new S;D.constructor=E,o(D,h.prototype),D.isPureReactComponent=!0;function vr(){var e={current:null};return Object.seal(e),e}var yr=Array.isArray;function Ce(e){return yr(e)}function mr(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function hr(e){try{return ut(e),!1}catch{return!0}}function ut(e){return""+e}function we(e){if(hr(e))return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",mr(e)),ut(e)}function gr(e,t,n){var a=e.displayName;if(a)return a;var u=t.displayName||t.name||"";return u!==""?n+"("+u+")":n}function it(e){return e.displayName||"Context"}function H(e){if(e==null)return null;if(typeof e.tag=="number"&&l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case P:return"Portal";case L:return"Profiler";case b:return"StrictMode";case G:return"Suspense";case ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Z:var t=e;return it(t)+".Consumer";case B:var n=e;return it(n._context)+".Provider";case q:return gr(e,e.render,"ForwardRef");case V:var a=e.displayName||null;return a!==null?a:H(e.type)||"Memo";case J:{var u=e,c=u._payload,s=u._init;try{return H(s(c))}catch{return null}}}return null}var de=Object.prototype.hasOwnProperty,st={key:!0,ref:!0,__self:!0,__source:!0},ct,lt,xe;xe={};function ft(e){if(de.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function dt(e){if(de.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function br(e,t){var n=function(){ct||(ct=!0,l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function _r(e,t){var n=function(){lt||(lt=!0,l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}function Er(e){if(typeof e.ref=="string"&&M.current&&e.__self&&M.current.stateNode!==e.__self){var t=H(M.current.type);xe[t]||(l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),xe[t]=!0)}}var Ve=function(e,t,n,a,u,c,s){var f={$$typeof:v,type:e,key:t,ref:n,props:s,_owner:c};return f._store={},Object.defineProperty(f._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(f,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(f,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(f.props),Object.freeze(f)),f};function Rr(e,t,n){var a,u={},c=null,s=null,f=null,m=null;if(t!=null){ft(t)&&(s=t.ref,Er(t)),dt(t)&&(we(t.key),c=""+t.key),f=t.__self===void 0?null:t.__self,m=t.__source===void 0?null:t.__source;for(a in t)de.call(t,a)&&!st.hasOwnProperty(a)&&(u[a]=t[a])}var _=arguments.length-2;if(_===1)u.children=n;else if(_>1){for(var R=Array(_),C=0;C<_;C++)R[C]=arguments[C+2];Object.freeze&&Object.freeze(R),u.children=R}if(e&&e.defaultProps){var O=e.defaultProps;for(a in O)u[a]===void 0&&(u[a]=O[a])}if(c||s){var k=typeof e=="function"?e.displayName||e.name||"Unknown":e;c&&br(u,k),s&&_r(u,k)}return Ve(e,c,s,f,m,M.current,u)}function Cr(e,t){var n=Ve(e.type,t,e.ref,e._self,e._source,e._owner,e.props);return n}function wr(e,t,n){if(e==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a,u=o({},e.props),c=e.key,s=e.ref,f=e._self,m=e._source,_=e._owner;if(t!=null){ft(t)&&(s=t.ref,_=M.current),dt(t)&&(we(t.key),c=""+t.key);var R;e.type&&e.type.defaultProps&&(R=e.type.defaultProps);for(a in t)de.call(t,a)&&!st.hasOwnProperty(a)&&(t[a]===void 0&&R!==void 0?u[a]=R[a]:u[a]=t[a])}var C=arguments.length-2;if(C===1)u.children=n;else if(C>1){for(var O=Array(C),k=0;k<C;k++)O[k]=arguments[k+2];u.children=O}return Ve(e.type,c,s,f,m,_,u)}function ae(e){return typeof e=="object"&&e!==null&&e.$$typeof===v}var pt=".",Sr=":";function Or(e){var t=/[=:]/g,n={"=":"=0",":":"=2"},a=e.replace(t,function(u){return n[u]});return"$"+a}var vt=!1,Tr=/\/+/g;function yt(e){return e.replace(Tr,"$&/")}function Ue(e,t){return typeof e=="object"&&e!==null&&e.key!=null?(we(e.key),Or(""+e.key)):t.toString(36)}function Se(e,t,n,a,u){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case v:case P:s=!0}}if(s){var f=e,m=u(f),_=a===""?pt+Ue(f,0):a;if(Ce(m)){var R="";_!=null&&(R=yt(_)+"/"),Se(m,t,R,"",function(_n){return _n})}else m!=null&&(ae(m)&&(m.key&&(!f||f.key!==m.key)&&we(m.key),m=Cr(m,n+(m.key&&(!f||f.key!==m.key)?yt(""+m.key)+"/":"")+_)),t.push(m));return 1}var C,O,k=0,I=a===""?pt:a+Sr;if(Ce(e))for(var $e=0;$e<e.length;$e++)C=e[$e],O=I+Ue(C,$e),k+=Se(C,t,n,O,u);else{var Je=ee(e);if(typeof Je=="function"){var Vt=e;Je===Vt.entries&&(vt||K("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),vt=!0);for(var gn=Je.call(Vt),Ut,bn=0;!(Ut=gn.next()).done;)C=Ut.value,O=I+Ue(C,bn++),k+=Se(C,t,n,O,u)}else if(c==="object"){var Wt=String(e);throw new Error("Objects are not valid as a React child (found: "+(Wt==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":Wt)+"). If you meant to render a collection of children, use an array instead.")}}return k}function Oe(e,t,n){if(e==null)return e;var a=[],u=0;return Se(e,a,"","",function(c){return t.call(n,c,u++)}),a}function kr(e){var t=0;return Oe(e,function(){t++}),t}function Pr(e,t,n){Oe(e,function(){t.apply(this,arguments)},n)}function Ar(e){return Oe(e,function(t){return t})||[]}function jr(e){if(!ae(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}function Ir(e){var t={$$typeof:Z,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:B,_context:t};var n=!1,a=!1,u=!1;{var c={$$typeof:Z,_context:t};Object.defineProperties(c,{Provider:{get:function(){return a||(a=!0,l("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(s){t.Provider=s}},_currentValue:{get:function(){return t._currentValue},set:function(s){t._currentValue=s}},_currentValue2:{get:function(){return t._currentValue2},set:function(s){t._currentValue2=s}},_threadCount:{get:function(){return t._threadCount},set:function(s){t._threadCount=s}},Consumer:{get:function(){return n||(n=!0,l("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(s){u||(K("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",s),u=!0)}}}),t.Consumer=c}return t._currentRenderer=null,t._currentRenderer2=null,t}var pe=-1,We=0,mt=1,$r=2;function Dr(e){if(e._status===pe){var t=e._result,n=t();if(n.then(function(c){if(e._status===We||e._status===pe){var s=e;s._status=mt,s._result=c}},function(c){if(e._status===We||e._status===pe){var s=e;s._status=$r,s._result=c}}),e._status===pe){var a=e;a._status=We,a._result=n}}if(e._status===mt){var u=e._result;return u===void 0&&l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,u),"default"in u||l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,u),u.default}else throw e._result}function Fr(e){var t={_status:pe,_result:e},n={$$typeof:J,_payload:t,_init:Dr};{var a,u;Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return a},set:function(c){l("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),a=c,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return u},set:function(c){l("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),u=c,Object.defineProperty(n,"propTypes",{enumerable:!0})}}})}return n}function Lr(e){e!=null&&e.$$typeof===V?l("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof e!="function"?l("forwardRef requires a render function but was given %s.",e===null?"null":typeof e):e.length!==0&&e.length!==2&&l("forwardRef render functions accept exactly two parameters: props and ref. %s",e.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),e!=null&&(e.defaultProps!=null||e.propTypes!=null)&&l("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var t={$$typeof:q,render:e};{var n;Object.defineProperty(t,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(a){n=a,!e.name&&!e.displayName&&(e.displayName=a)}})}return t}var ht;ht=Symbol.for("react.module.reference");function gt(e){return!!(typeof e=="string"||typeof e=="function"||e===N||e===L||re||e===b||e===G||e===ce||fe||e===ge||le||Ne||Ee||typeof e=="object"&&e!==null&&(e.$$typeof===J||e.$$typeof===V||e.$$typeof===B||e.$$typeof===Z||e.$$typeof===q||e.$$typeof===ht||e.getModuleId!==void 0))}function Mr(e,t){gt(e)||l("memo: The first argument must be a component. Instead received: %s",e===null?"null":typeof e);var n={$$typeof:V,type:e,compare:t===void 0?null:t};{var a;Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return a},set:function(u){a=u,!e.name&&!e.displayName&&(e.displayName=u)}})}return n}function F(){var e=te.current;return e===null&&l(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}function Nr(e){var t=F();if(e._context!==void 0){var n=e._context;n.Consumer===e?l("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&l("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)}function xr(e){var t=F();return t.useState(e)}function Vr(e,t,n){var a=F();return a.useReducer(e,t,n)}function Ur(e){var t=F();return t.useRef(e)}function Wr(e,t){var n=F();return n.useEffect(e,t)}function Yr(e,t){var n=F();return n.useInsertionEffect(e,t)}function Br(e,t){var n=F();return n.useLayoutEffect(e,t)}function zr(e,t){var n=F();return n.useCallback(e,t)}function Kr(e,t){var n=F();return n.useMemo(e,t)}function Hr(e,t,n){var a=F();return a.useImperativeHandle(e,t,n)}function qr(e,t){{var n=F();return n.useDebugValue(e,t)}}function Gr(){var e=F();return e.useTransition()}function Jr(e){var t=F();return t.useDeferredValue(e)}function Qr(){var e=F();return e.useId()}function Xr(e,t,n){var a=F();return a.useSyncExternalStore(e,t,n)}var ve=0,bt,_t,Et,Rt,Ct,wt,St;function Ot(){}Ot.__reactDisabledLog=!0;function Zr(){{if(ve===0){bt=console.log,_t=console.info,Et=console.warn,Rt=console.error,Ct=console.group,wt=console.groupCollapsed,St=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ot,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ve++}}function en(){{if(ve--,ve===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:o({},e,{value:bt}),info:o({},e,{value:_t}),warn:o({},e,{value:Et}),error:o({},e,{value:Rt}),group:o({},e,{value:Ct}),groupCollapsed:o({},e,{value:wt}),groupEnd:o({},e,{value:St})})}ve<0&&l("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Ye=x.ReactCurrentDispatcher,Be;function Te(e,t,n){{if(Be===void 0)try{throw Error()}catch(u){var a=u.stack.trim().match(/\n( *(at )?)/);Be=a&&a[1]||""}return`
`+Be+e}}var ze=!1,ke;{var tn=typeof WeakMap=="function"?WeakMap:Map;ke=new tn}function Tt(e,t){if(!e||ze)return"";{var n=ke.get(e);if(n!==void 0)return n}var a;ze=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var c;c=Ye.current,Ye.current=null,Zr();try{if(t){var s=function(){throw Error()};if(Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(I){a=I}Reflect.construct(e,[],s)}else{try{s.call()}catch(I){a=I}e.call(s.prototype)}}else{try{throw Error()}catch(I){a=I}e()}}catch(I){if(I&&a&&typeof I.stack=="string"){for(var f=I.stack.split(`
`),m=a.stack.split(`
`),_=f.length-1,R=m.length-1;_>=1&&R>=0&&f[_]!==m[R];)R--;for(;_>=1&&R>=0;_--,R--)if(f[_]!==m[R]){if(_!==1||R!==1)do if(_--,R--,R<0||f[_]!==m[R]){var C=`
`+f[_].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),typeof e=="function"&&ke.set(e,C),C}while(_>=1&&R>=0);break}}}finally{ze=!1,Ye.current=c,en(),Error.prepareStackTrace=u}var O=e?e.displayName||e.name:"",k=O?Te(O):"";return typeof e=="function"&&ke.set(e,k),k}function rn(e,t,n){return Tt(e,!1)}function nn(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function Pe(e,t,n){if(e==null)return"";if(typeof e=="function")return Tt(e,nn(e));if(typeof e=="string")return Te(e);switch(e){case G:return Te("Suspense");case ce:return Te("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case q:return rn(e.render);case V:return Pe(e.type,t,n);case J:{var a=e,u=a._payload,c=a._init;try{return Pe(c(u),t,n)}catch{}}}return""}var kt={},Pt=x.ReactDebugCurrentFrame;function Ae(e){if(e){var t=e._owner,n=Pe(e.type,e._source,t?t.type:null);Pt.setExtraStackFrame(n)}else Pt.setExtraStackFrame(null)}function an(e,t,n,a,u){{var c=Function.call.bind(de);for(var s in e)if(c(e,s)){var f=void 0;try{if(typeof e[s]!="function"){var m=Error((a||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw m.name="Invariant Violation",m}f=e[s](t,s,a,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(_){f=_}f&&!(f instanceof Error)&&(Ae(u),l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",n,s,typeof f),Ae(null)),f instanceof Error&&!(f.message in kt)&&(kt[f.message]=!0,Ae(u),l("Failed %s type: %s",n,f.message),Ae(null))}}}function oe(e){if(e){var t=e._owner,n=Pe(e.type,e._source,t?t.type:null);_e(n)}else _e(null)}var Ke;Ke=!1;function At(){if(M.current){var e=H(M.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}function on(e){if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+t+":"+n+"."}return""}function un(e){return e!=null?on(e.__source):""}var jt={};function sn(e){var t=At();if(!t){var n=typeof e=="string"?e:e.displayName||e.name;n&&(t=`

Check the top-level render call using <`+n+">.")}return t}function It(e,t){if(!(!e._store||e._store.validated||e.key!=null)){e._store.validated=!0;var n=sn(t);if(!jt[n]){jt[n]=!0;var a="";e&&e._owner&&e._owner!==M.current&&(a=" It was passed a child from "+H(e._owner.type)+"."),oe(e),l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,a),oe(null)}}}function $t(e,t){if(typeof e=="object"){if(Ce(e))for(var n=0;n<e.length;n++){var a=e[n];ae(a)&&It(a,t)}else if(ae(e))e._store&&(e._store.validated=!0);else if(e){var u=ee(e);if(typeof u=="function"&&u!==e.entries)for(var c=u.call(e),s;!(s=c.next()).done;)ae(s.value)&&It(s.value,t)}}}function Dt(e){{var t=e.type;if(t==null||typeof t=="string")return;var n;if(typeof t=="function")n=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===q||t.$$typeof===V))n=t.propTypes;else return;if(n){var a=H(t);an(n,e.props,"prop",a,e)}else if(t.PropTypes!==void 0&&!Ke){Ke=!0;var u=H(t);l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function cn(e){{for(var t=Object.keys(e.props),n=0;n<t.length;n++){var a=t[n];if(a!=="children"&&a!=="key"){oe(e),l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),oe(null);break}}e.ref!==null&&(oe(e),l("Invalid attribute `ref` supplied to `React.Fragment`."),oe(null))}}function Ft(e,t,n){var a=gt(e);if(!a){var u="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c=un(t);c?u+=c:u+=At();var s;e===null?s="null":Ce(e)?s="array":e!==void 0&&e.$$typeof===v?(s="<"+(H(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,l("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,u)}var f=Rr.apply(this,arguments);if(f==null)return f;if(a)for(var m=2;m<arguments.length;m++)$t(arguments[m],e);return e===N?cn(f):Dt(f),f}var Lt=!1;function ln(e){var t=Ft.bind(null,e);return t.type=e,Lt||(Lt=!0,K("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return K("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t}function fn(e,t,n){for(var a=wr.apply(this,arguments),u=2;u<arguments.length;u++)$t(arguments[u],a.type);return Dt(a),a}function dn(e,t){var n=W.transition;W.transition={};var a=W.transition;W.transition._updatedFibers=new Set;try{e()}finally{if(W.transition=n,n===null&&a._updatedFibers){var u=a._updatedFibers.size;u>10&&K("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),a._updatedFibers.clear()}}}var Mt=!1,je=null;function pn(e){if(je===null)try{var t=("require"+Math.random()).slice(0,7),n=p&&p[t];je=n.call(p,"timers").setImmediate}catch{je=function(u){Mt===!1&&(Mt=!0,typeof MessageChannel>"u"&&l("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var c=new MessageChannel;c.port1.onmessage=u,c.port2.postMessage(void 0)}}return je(e)}var ue=0,Nt=!1;function xt(e){{var t=ue;ue++,A.current===null&&(A.current=[]);var n=A.isBatchingLegacy,a;try{if(A.isBatchingLegacy=!0,a=e(),!n&&A.didScheduleLegacyUpdate){var u=A.current;u!==null&&(A.didScheduleLegacyUpdate=!1,Ge(u))}}catch(O){throw Ie(t),O}finally{A.isBatchingLegacy=n}if(a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,s=!1,f={then:function(O,k){s=!0,c.then(function(I){Ie(t),ue===0?He(I,O,k):O(I)},function(I){Ie(t),k(I)})}};return!Nt&&typeof Promise<"u"&&Promise.resolve().then(function(){}).then(function(){s||(Nt=!0,l("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),f}else{var m=a;if(Ie(t),ue===0){var _=A.current;_!==null&&(Ge(_),A.current=null);var R={then:function(O,k){A.current===null?(A.current=[],He(m,O,k)):O(m)}};return R}else{var C={then:function(O,k){O(m)}};return C}}}}function Ie(e){e!==ue-1&&l("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),ue=e}function He(e,t,n){{var a=A.current;if(a!==null)try{Ge(a),pn(function(){a.length===0?(A.current=null,t(e)):He(e,t,n)})}catch(u){n(u)}else t(e)}}var qe=!1;function Ge(e){if(!qe){qe=!0;var t=0;try{for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}e.length=0}catch(a){throw e=e.slice(t+1),a}finally{qe=!1}}}var vn=Ft,yn=fn,mn=ln,hn={map:Oe,forEach:Pr,count:kr,toArray:Ar,only:jr};i.Children=hn,i.Component=h,i.Fragment=N,i.Profiler=L,i.PureComponent=E,i.StrictMode=b,i.Suspense=G,i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x,i.act=xt,i.cloneElement=yn,i.createContext=Ir,i.createElement=vn,i.createFactory=mn,i.createRef=vr,i.forwardRef=Lr,i.isValidElement=ae,i.lazy=Fr,i.memo=Mr,i.startTransition=dn,i.unstable_act=xt,i.useCallback=zr,i.useContext=Nr,i.useDebugValue=qr,i.useDeferredValue=Jr,i.useEffect=Wr,i.useId=Qr,i.useImperativeHandle=Hr,i.useInsertionEffect=Yr,i.useLayoutEffect=Br,i.useMemo=Kr,i.useReducer=Vr,i.useRef=Ur,i.useState=xr,i.useSyncExternalStore=Xr,i.useTransition=Gr,i.version=$,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()}(se,se.exports)),se.exports}process.env.NODE_ENV==="production"?De.exports=zt():De.exports=Kt();var Y=De.exports,Ht=typeof he=="object"&&he&&he.Object===Object&&he,qt=typeof self=="object"&&self&&self.Object===Object&&self;Ht||qt||Function("return this")();var Gt=typeof window<"u"?Y.useLayoutEffect:Y.useEffect;function Jt(p,i){const $=Y.useRef(p);Gt(function(){$.current=p},[p]),Y.useEffect(function(){if(i===null)return;const v=setInterval(function(){$.current()},i);return function(){clearInterval(v)}},[i])}const Qt=async function(p,i,$){const v=p.slice(Math.max(p.length-15,0)).map(function(b){return{role:b.replyContent?`${b.author}
in reply to
${b.replyContent.replace(`
`," ")}`:b.author,content:b.attachmentFilenames.length?`${b.content}
${b.attachmentFilenames.map(function(L){return`[Attachment: ${L}]`}).join(`
`)}`.trim():b.content,timestamp:b.timestamp}});for(let b=1;b<v.length;b++){const L=v[b].timestamp-v[b-1].timestamp;L>=36e5&&v.splice(b,0,{role:"<time_passed>",content:`${Math.floor(L/36e5)} hour(s)`,timestamp:v[b].timestamp})}const P=Date.now()-v[v.length-1].timestamp;P>=36e5&&v.push({role:"<time_passed>",content:`${Math.floor(P/36e5)} hour(s)`,timestamp:Date.now()}),v.forEach(function(b){delete b.timestamp});const N=(await fetch("https://api.fireworks.ai/inference/v1/chat/completions",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({model:$,max_tokens:4e3,top_p:1,top_k:40,presence_penalty:0,frequency_penalty:.1,temperature:.6,messages:v})}).then(function(b){return b.json()})).choices[0].message.content;return N.split(`
`).pop()?.startsWith("[Attachment:")?"":N},{Text:Xt}=Ze.General,Zt=ye.findByProps("sendMessage","receiveMessage"),er=ye.findByStoreName("SelectedChannelStore"),tr=ye.findByStoreName("MessageStore"),Fe=[],{ChatInput:rr}=ye.findByProps("ChatInput"),nr=function(p){const i=tr.getMessages(p),$=Object.keys(i._map).map(function(v){return i._map[v]}).sort(function(v,P){return v.timestamp-P.timestamp});return $.map(function(v){return{author:v.author.username,content:v.content,replyAuthor:v.messageReference&&$.find(function(P){return P.id==v.messageReference.message_id})?.author.username,replyContent:v.messageReference&&$.find(function(P){return P.id==v.messageReference.message_id})?.content,attachmentFilenames:v.attachments.map(function(P){return P.filename}),timestamp:Date.parse(v.timestamp)}})},ar=function(p){return p.split("").reduce(function(i,$){return i=(i<<5)-i+$.charCodeAt(0),i&i},0)},or=function(){const[p,i]=Y.useState(""),[$,v]=Y.useState(0),[P,N]=Y.useState([]);et.useProxy(j);const b=er.getChannelId();return Jt(function(){const L=nr(b),B=ar(JSON.stringify(L));$!==B&&(v(B),N(L))},1e3),Y.useEffect(function(){i(""),j.enabled&&P.length&&Qt(P,j.apiKey,j.model).then(i)},[P]),j.enabled&&p&&React.createElement(me.ReactNative.TouchableOpacity,{onPress:function(){p&&(i(""),Zt.sendMessage(b,{content:p}))}},React.createElement(Xt,{style:{color:"white",padding:10}},p))};function ur(){return Fe.push(Xe.after("render",rr.prototype,function(p,i){return React.createElement(me.ReactNative.View,{style:{backgroundColor:"transparent"}},React.createElement(or,null),i)})),Fe.push(Xe.before("render",me.ReactNative.Pressable.type,function(p){let[i]=p;i?.accessibilityLabel===me.i18n.Messages.SEND&&(i.onLongPress=function(){j.enabled=!j.enabled,j.enabled?Qe.showToast("Enabled AI prerespond"):Qe.showToast("Disabled AI prerespond")})})),function(){return Fe.forEach(function(p){return p()})}}const{Form:ir,FormSection:nt,FormDivider:sr,FormIcon:cr,FormSwitchRow:lr,FormHint:Le,FormInput:at,FormText:Me}=Ze.Forms;function fr(){return et.useProxy(j),React.createElement(ir,null,React.createElement(nt,{title:"Service Settings"},React.createElement(lr,{label:"Enable AI",leading:React.createElement(cr,{source:Bt.getAssetIDByName("pencil")}),value:j.enabled,onValueChange:function(p){return j.enabled=p}}),React.createElement(Le,null,React.createElement(Me,null,"You can always disable the plugin by long-pressing the send button."))),React.createElement(nt,{title:"AI Settings"},React.createElement(at,{value:j.apiKey,onChange:function(p){return j.apiKey=p}}),React.createElement(Le,null,React.createElement(Me,null,"API Key")),React.createElement(sr,null),React.createElement(at,{value:j.model,onChange:function(p){return j.model=p}}),React.createElement(Le,null,React.createElement(Me,null,"Model"))))}const j=Yt.storage;let ot;const dr=function(){j.enabled??=!1,ot=ur()},pr=function(){ot?.()};return ie.onLoad=dr,ie.onUnload=pr,ie.settings=fr,ie.vstorage=j,ie})({},vendetta.metro,vendetta.ui.toasts,vendetta.metro.common,vendetta.patcher,vendetta.ui.components,vendetta.plugin,vendetta.storage,vendetta.ui.assets);
