import React from 'react';
import ReactDOM from 'react-dom';

import {DatePicker} from 'antd'

import 'antd/dist/antd.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
