import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';
import * as serviceWorker from './config/serviceWorker';

WebFont.load({
  google: {
    families: [
      'Monoton',
      'sans-serif',
      'Bungee',
      'Roboto',
    ],
  },
});

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
