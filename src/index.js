import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

// Routes
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App></App>
	</React.StrictMode>,
	document.getElementById('root')
);
