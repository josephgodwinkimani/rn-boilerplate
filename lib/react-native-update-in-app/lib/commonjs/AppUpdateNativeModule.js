"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const AppUpdateNativeModule = isTurboModuleEnabled ? _reactNative.Platform.OS === 'android' ? _reactNative.TurboModuleRegistry.getEnforcing('AppUpdate') : null : _reactNative.NativeModules.AppUpdate;
var _default = AppUpdateNativeModule;
exports.default = _default;
//# sourceMappingURL=AppUpdateNativeModule.js.map