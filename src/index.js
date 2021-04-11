import React from 'react';
import ReactDOM from 'react-dom';
import Api from './Api'
import './Api.css';
import Header from './Header'

ReactDOM.render(
  <>
    <Header />
    <Api />
  </>,
  document.getElementById('root')
);