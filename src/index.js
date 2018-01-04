import App from './App';
import { Sdk } from 'rally-sdk';

//todo: templatify, from package.json
const SERVER = 'https://rally1.rallydev.com';

Sdk.renderApp(App, { 
  server: SERVER
});