// Below for css files which will be bundled to styles.css
import '../css/styles.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css'

import ReactDOM from 'react-dom';
import React from 'react';
import List from './list';

ReactDOM.render(
  <List />, //what to render
  document.querySelector('#app'), // where to render
  function(){console.log('I have rendered')} //After rendering
);