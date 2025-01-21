import type { TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    getVersionCode(): Promise<number>;
    downloadApp(apkUrl: string): void;
    installApp(apkFileName: string): Promise<null>;
    addListener(eventName: string): void;
    removeListeners(count: number): void;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeAppUpdate.d.ts.map