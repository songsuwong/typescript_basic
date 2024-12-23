import type { PiniaPlugin } from "pinia";

export const piniaReset: PiniaPlugin = ({ store }) => {
    function easyDeepClone(target: any): any {
        return JSON.parse(JSON.stringify(target));
    }
    const initialState = easyDeepClone(store.$state);
    store.$reset = () => {
        store.$patch(initialState);
    };
};