import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Component1 from './TodoList/componenet1';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <div>
    <Component1 />


  </div>,

  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
