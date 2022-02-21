import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';


// Styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { useOnClickOutside } from './hooks';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';

// Components
import Home from './routes/home';
import Products from './routes/products';
import Contact from './routes/contact';
import Cart from './routes/cart';
import Team from './routes/team';

function App() {
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
		{
			name: 'Diamonds',
			price: 1000,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Diamonds',
			price: 1000,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Diamonds',
			price: 1000,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Diamonds',
			price: 1000,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Diamonds',
			price: 1000,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Diamonds',
			price: 1000,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Diamonds',
			price: 1000,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Diamonds',
			price: 1000,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Diamonds',
			price: 1000,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Diamonds',
			price: 1000,
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
				return;
			}
		}

		newItem.quantity = 1;
		setCartItem(cart.concat(newItem));
	}

	function removeFromCart(item) {
		for (let x = 0; x < cart.length; x++) {
			if (cart[x] === item) {
				let newCart = [...cart];
				const index = newCart.indexOf(item);
				if (index > -1) {
					newCart.splice(index, 1); // 2nd parameter means remove one item only
				}
				setCartItem(newCart);
				return;
			}
		}
	}

	function openCart() {
		document.getElementById('cart').style.display = 'block';
	}

	function decrementQuantity(itemId) {
		for (let x = 0; x < cart.length; x++) {
			if (cart[x] === itemId) {
				if (cart[x].quantity === 0) {
					alert('Delete Item');
					return;
				} else {
					let newCart = [...cart];
					newCart[x].quantity -= 1;
					setCartItem(newCart);
				}
			}
		}
	}

	function incrementQuantity(itemId) {
		for (let x = 0; x < cart.length; x++) {
			if (cart[x] === itemId) {
				let newCart = [...cart];
				newCart[x].quantity += 1;
				setCartItem(newCart);
			}
		}
	}

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	const spacer = ' | ';



		const [open, setOpen] = useState(false);
		const node = useRef();
		const menuId = 'main-menu';
		useOnClickOutside(node, () => setOpen(false));

		return (
			<ThemeProvider theme={theme}>
				<GlobalStyles />

				<div ref={node}>
					<FocusLock disabled={!open}>
						<Burger
							open={open}
							setOpen={setOpen}
							aria-controls={menuId}
						/>
						<Menu open={open} setOpen={setOpen} id={menuId} />
					</FocusLock>
				</div>
				<div>
					<h1>Fake Buisness</h1>
				</div>

				<BrowserRouter>
					<div className="App">
						{/* <Cart
							items={cart}
							incrementFcn={incrementQuantity}
							decrementFcn={decrementQuantity}
							removeItemFcn={removeFromCart}
						/> */}

						<Routes>
							<Route path="/" element={<Home />} />
							<Route
								exact path="/products"
								element={
									<Products
										availableItems={products}
										addToCart={addToCart}
									/>
								}
							/>
							<Route path="/team" element={<Team />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</div>
				</BrowserRouter>
			</ThemeProvider>
		);
}

export default App;
