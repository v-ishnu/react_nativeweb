/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import Web from './src/Web'
import { name as appName } from './app.json';
import { createRoot } from 'react-dom/client'; // For web rendering

if (Platform.OS === 'web') {
  // Web platform
  const container = document.getElementById('root') || document.body.appendChild(document.createElement('div'));
  const root = createRoot(container);
  root.render(<Web />);
} else {
  // Mobile platforms (iOS, Android)
  AppRegistry.registerComponent(appName, () => App);
}
