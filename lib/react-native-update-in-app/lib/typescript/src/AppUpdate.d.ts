import { NativeEventEmitter } from 'react-native';
import type { OnDownloadProgressEvent } from './types';
declare const AppUpdate: {
    onDownloadProgress(callback: (event: OnDownloadProgressEvent) => void): () => void;
    getVersionCode(): Promise<number>;
    downloadApp(apkUrl: string): void;
    installApp(apkFileName: string): Promise<null>;
    readonly eventEmitter: NativeEventEmitter;
};
export { AppUpdate };
//# sourceMappingURL=AppUpdate.d.ts.map