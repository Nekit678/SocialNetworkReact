import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state';
import App from './App';

export function rerenderUI(state){
    const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost = {addPost} />
      </BrowserRouter>
    </React.StrictMode>
  );
  }