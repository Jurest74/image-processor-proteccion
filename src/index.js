import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer} from 'react-toastify';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PrincipalPage from './page/principalPage.jsx';
import {store} from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
<React.StrictMode>
  <Provider store={store}>
    <div>
    <ToastContainer />
      <PrincipalPage />
      </div>
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
