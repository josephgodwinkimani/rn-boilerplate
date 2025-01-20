/**
 * @format
 */

// Since the stack navigator doesn't use react-native-gesture-handler on Web, this avoids unnecessarily increasing the bundle size.
import './src/gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
