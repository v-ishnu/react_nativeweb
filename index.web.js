import { AppRegistry } from 'react-native';
import App from './App'; // Your main App component
import { name as appName } from './app.json';
import React from 'react';
import { createRoot } from 'react-dom/client'; // For modern React

// Ensure root element exists in the DOM
const rootTag = document.getElementById('/public/index.html/root') || document.createElement('div');
if (!rootTag.parentNode) {
  document.body.appendChild(rootTag);
}

// Register the app
AppRegistry.registerComponent(appName, () => App);

// Run the application
const RootApp = () => (
  <AppRegistry.AppContainer>
    <App />
  </AppRegistry.AppContainer>
);

// Use React DOM to render
const root = createRoot(rootTag); // Modern React rendering
root.render(<RootApp />);
