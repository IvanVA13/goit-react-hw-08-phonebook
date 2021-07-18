import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import store from './redux/store';
import './styles.scss';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store.store}>
    <PersistGate persistor={store.persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  // </React.StrictMode >
  document.getElementById('root'),
);
