"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppUpdate = void 0;
var _reactNative = require("react-native");
var _AppUpdateNativeModule = _interopRequireDefault(require("./AppUpdateNativeModule"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let appUpdateEventEmitter;
const AppUpdate = {
  onDownloadProgress(callback) {
    const onDownloadProgressListener = AppUpdate.eventEmitter.addListener('onDownloadProgress', callback);
    return onDownloadProgressListener.remove;
  },
  getVersionCode() {
    return _AppUpdateNativeModule.default.getVersionCode();
  },
  downloadApp(apkUrl) {
    _AppUpdateNativeModule.default.downloadApp(apkUrl);
  },
  installApp(apkFileName) {
    return _AppUpdateNativeModule.default.installApp(apkFileName);
  },
  get eventEmitter() {
    if (!appUpdateEventEmitter) {
      appUpdateEventEmitter = new _reactNative.NativeEventEmitter(_AppUpdateNativeModule.default);
    }
    return appUpdateEventEmitter;
  }
};
exports.AppUpdate = AppUpdate;
//# sourceMappingURL=AppUpdate.js.map