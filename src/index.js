import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './practice/App1';
import App2 from './practice/App2';
import UserProfileClass from './practice/UserProfileClass';
import App1Class from './practice/App1Class';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <div>
    <App1Class />
    <UserProfileClass />


  </div>,

  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
