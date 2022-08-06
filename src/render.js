import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateTextFieldMessage, updateTextFieldPost } from './redux/state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export function rerenderUI(state){
    
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost = {addPost} updateTextFieldMessage = {updateTextFieldMessage} updateTextFieldPost = {updateTextFieldPost}/>
      </BrowserRouter>
    </React.StrictMode>
  );
  }