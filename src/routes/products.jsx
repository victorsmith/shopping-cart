import { useEffect, useState } from 'react';
import Cart from './cart';
import Header from './header';
import Item from './item';
import { v4 as uuid } from 'uuid';
import '../App.css';

export default function Products() {
	const [availableItems, setAvailableItem] = useState([
		{
			name: 'Fakebiz T-Shirt',
			price: 80,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Fakebiz Hoodie',
			price: 40,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Fakebiz Fake Rolex',
			price: 5000,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Fakebiz Fake Gucci Flipflops',
			price: 9.99,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Fakebiz Unreasonably Priced Sneakers',
			price: 400,
			quantity: 0,
			id: uuid(),
		},
		{
			name: 'Fakebiz Intrinsicly Worthless Diamonds',
			price: 1000,
			quantity: 0,
			id: uuid(),
		},
	]);

	const [shoppingCartItems, setShoppingCartItem] = useState([]);

    useEffect ( () => { 
        console.log(shoppingCartItems)
    }, [shoppingCartItems] );

    function addToCart(newItem) {
        // alert("It worked")
        setShoppingCartItem(
            shoppingCartItems.concat(newItem)
        )
    }

	return (
		<>
			<Header />
			{/* <Cart items={shoppingCartItems}/> */}
			<h2>Products</h2>
			<main className="grid">
				{availableItems.map((availableItem) => {
					return (
						<Item
							itemInfo={availableItem}
							key={availableItem.id}
							addToCart={() => addToCart(availableItem)}
						/>
					);
				})}
			</main>
		</>
	);
}
