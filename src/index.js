import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {App} from './components/App';
import {store, persistor} from './store'
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
