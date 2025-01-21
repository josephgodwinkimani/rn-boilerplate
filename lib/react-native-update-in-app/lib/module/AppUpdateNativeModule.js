import { NativeModules, Platform, TurboModuleRegistry } from 'react-native';
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const AppUpdateNativeModule = isTurboModuleEnabled ? Platform.OS === 'android' ? TurboModuleRegistry.getEnforcing('AppUpdate') : null : NativeModules.AppUpdate;
export default AppUpdateNativeModule;
//# sourceMappingURL=AppUpdateNativeModule.js.map