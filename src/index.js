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
import Products from './routes/products';
import Contact from './routes/contact';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}/>
				<Route path='products' element={<Products/>}/>
				<Route path='contact' element={<Contact/>}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
