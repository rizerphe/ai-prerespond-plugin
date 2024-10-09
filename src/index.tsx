import patcher from "./patcher";
import { storage } from "@vendetta/plugin";
export { default as settings } from "./Settings";

export const vstorage = storage as {
    enabled: boolean;
    apiKey: string;
    model: string;
};

let unpatch;
export const onLoad = () => {
    vstorage.enabled ??= false;
    unpatch = patcher();
};

export const onUnload = () => {
    unpatch?.();
};
