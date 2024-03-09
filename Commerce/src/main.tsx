import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './Store.ts';
import { Provider } from 'react-redux';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
