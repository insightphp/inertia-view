import type { App } from "vue";
declare type Component = Promise<any> | (() => Promise<any>);
declare class ViewComponentManager {
    components: Record<string, Record<string, Component>>;
    /**
     * Registers view components for given namespace.
     */
    registerComponentsInNamespace<T>(components: Record<string, Component>, baseDirectory: string, namespace?: string): void;
    /**
     * Resolve component name from file name.
     *
     * @param fileName
     * @param prefix
     */
    resolveComponentName(fileName: string, prefix?: string | null): string;
    boot(app: App): void;
}
declare const _default: ViewComponentManager;
export default _default;
