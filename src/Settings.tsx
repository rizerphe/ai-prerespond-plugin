import { useProxy } from "@vendetta/storage";
import { getAssetIDByName } from "@vendetta/ui/assets";

import { Forms } from "@vendetta/ui/components";
import { vstorage } from ".";

const { Form, FormSection, FormDivider, FormIcon, FormSwitchRow, FormHint, FormInput, FormText } = Forms;

export default () => {
    useProxy(vstorage);

    return (
        <Form>
            <FormSection title="Service Settings">
                <FormSwitchRow
                    label="Enable AI"
                    leading={<FormIcon source={getAssetIDByName("pencil")} />}
                    value={vstorage.enabled}
                    onValueChange={(value) => (vstorage.enabled = value)}
                />
                <FormHint>
                    <FormText>
                        You can always disable the plugin by long-pressing the send button.
                    </FormText>
                </FormHint>
            </FormSection>
            <FormSection title="AI Settings">
                <FormInput
                    value={vstorage.apiKey}
                    onChange={(value) => (vstorage.apiKey = value)}
                />
                <FormHint>
                    <FormText>API Key</FormText>
                </FormHint>
                <FormDivider />
                <FormInput
                    value={vstorage.model}
                    onChange={(value) => (vstorage.model = value)}
                />
                <FormHint>
                    <FormText>Model</FormText>
                </FormHint>
            </FormSection>
        </Form>
    );
};
