import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dataDialogs = [
  { id: 1, name: "Nikita" },
  { id: 2, name: "Milena" },
  { id: 3, name: "Homyak" },
  { id: 4, name: "Busya" },
  { id: 5, name: "Danya" }]

let dataMessages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Lol kekw" },
  { id: 4, message: "Kavabangaa" }]

let dataPosts = [
  { id: 1, message: "Hi, how are you?", likesCount: 12 },
  { id: 2, message: "It is my first post!", likesCount: 28 }]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dataDialogs={dataDialogs} dataMessages={dataMessages} dataPosts={dataPosts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
