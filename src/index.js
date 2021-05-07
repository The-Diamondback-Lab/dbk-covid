import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Event from './Event';
import reportWebVitals from './reportWebVitals';
import EventInfo from './EventInfo.json';

ReactDOM.render(
  <React.StrictMode>
    {EventInfo.map((item) =>
      <Event date={item.Date} title={item.Title} desc={item.Description}/>
    )}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
