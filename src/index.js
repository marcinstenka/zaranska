import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Fonts
import './fonts/AnticDidone-Regular.otf'
import './fonts/Intervogue Soft Medium.otf'
import './fonts/Intervogue Soft Regular.otf'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
