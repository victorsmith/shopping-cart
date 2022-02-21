import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

// Components
import Home from './routes/home';
import Products from './routes/products';
import Contact from './routes/contact';
import Cart from './routes/cart';

function App() {
	// State
	const [cart, setCartItem] = useState([]);
	const [products, setProductItem] = useState([
		{
			name: 'T-Shirt',
			price: 80,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Hoodie',
			price: 40,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Folex',
			price: 5000,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Fakeflops',
			price: 9.99,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Shoes',
			price: 400,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Diamonds',
			price: 1000,
			quantity: 0,
			id: uuid(),
		},
	]);


	function addToCart(newItem) {
		// alert("It worked")
		for (let x = 0; x < cart.length; x++) {
			if (cart[x] === newItem) {
				let newCart = [...cart];
				newCart[x].quantity += 1;
				setCartItem(newCart);
				return
			} 
		} 
		setCartItem(cart.concat(newItem));
	}


	function openCart() {
		document.getElementById('cart').style.display = 'block';
	}


	function incrementQuantity (itemId) {
		for (let x = 0; x < cart.length; x++) {
			if (cart[x] === itemId) {
				let newCart = [...cart];
				newCart[x].quantity += 1;
				setCartItem(newCart);
			}
		} 
	}	
	
	function decrementQuantity(itemId) {
		for (let x=0; x<cart.length; x++) {
			if ( cart[x] ===  itemId ) {
				let newCart = [...cart];
				newCart[x].quantity -= 1;
				setCartItem(newCart);
			}
		} 
	}


	useEffect( () => {
		console.log(cart);
	}, [cart])


	const spacer = ' | ';
	return (
		<BrowserRouter>
			<div className="App">
				<header>
					<h1>Fakebiz</h1>
					<nav>
						<Link to="/">Home</Link>
						{spacer}
						<Link to="/products">Products</Link>
						{spacer}
						<Link to="/contact">Contact</Link>
					</nav>
					<button onClick={() => openCart()}>
						Cart: {cart.length}
					</button>
				</header>

				<Cart 
					items={cart}
					incrementFcn={incrementQuantity}
					decrementFcn={decrementQuantity}/>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/products"
						element={
							<Products
								availableItems={products}
								addToCart={addToCart}
							/>
						}
					/>
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
