import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import StoreContext, { Provider } from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

export function rerenderUI(state){
console.log(123)
  root.render(

    <React.StrictMode>
        <BrowserRouter>
        <Provider store={store}>
          <App></App>
        </Provider>
        </BrowserRouter>
    </React.StrictMode>
  );
  }


rerenderUI(store.getState())

store.subscribe(()=>{
  rerenderUI(store.getState());
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
