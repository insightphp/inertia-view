import type { App } from "vue";
export interface PluginOptions {
    components?: Record<string, Record<string, Record<string, Promise<any> | (() => Promise<any>)>>>;
}
declare const _default: {
    install(app: App, options?: PluginOptions): any;
};
export default _default;
