import { NativeEventEmitter } from 'react-native';
import AppUpdateNativeModule from './AppUpdateNativeModule';
let appUpdateEventEmitter;
const AppUpdate = {
  onDownloadProgress(callback) {
    const onDownloadProgressListener = AppUpdate.eventEmitter.addListener('onDownloadProgress', callback);
    return onDownloadProgressListener.remove;
  },
  getVersionCode() {
    return AppUpdateNativeModule.getVersionCode();
  },
  downloadApp(apkUrl) {
    AppUpdateNativeModule.downloadApp(apkUrl);
  },
  installApp(apkFileName) {
    return AppUpdateNativeModule.installApp(apkFileName);
  },
  get eventEmitter() {
    if (!appUpdateEventEmitter) {
      appUpdateEventEmitter = new NativeEventEmitter(AppUpdateNativeModule);
    }
    return appUpdateEventEmitter;
  }
};
export { AppUpdate };
//# sourceMappingURL=AppUpdate.js.map