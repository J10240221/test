import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter.js';
import css from './main.css';

ReactDOM.render(
   <div>
      <Greeter />
      <p className={css.haha}>12312321</p>
   </div>,
   document.querySelector('#root')
);
