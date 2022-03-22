import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Root } from './Root/Root';
import { Active } from './Components/Context/Context';
ReactDOM.render(
  <React.StrictMode>
    <Active>
      <Root />
    </Active>
  </React.StrictMode>,
  document.getElementById('root')
);
