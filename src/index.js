import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/main.scss';
import Root from './Root';

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
