import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

export function rerenderUI(state){
  root.render(

    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost = {store.addPost.bind(store)} updateTextFieldMessage = {store.updateTextFieldMessage.bind(store)} updateTextFieldPost = {store.updateTextFieldPost.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>
  );
  }


rerenderUI(store.getState())
store.subscribe(rerenderUI)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
