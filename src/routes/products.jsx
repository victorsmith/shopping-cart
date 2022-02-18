import { useState } from 'react';
import Cart from './cart';
import Header from './header';
import Item from './item';
import { v4 as uuid } from 'uuid';

export default function Products() {
	const [availableItems, setAvailableItem] = useState([
		{ 
            name: 'Fakebiz T-Shirt', 
            price: 80,
            quantity: 0,
            id: uuid()
        },
		{ 
            name: 'Fakebiz Hoodie', 
            price: 40,
            quantity: 0,
            id: uuid()
        },
		{ 
            name: 'Fakebiz Fake Rolex', 
            price: 5000,
            quantity: 0,
            id: uuid()
        },
		{ 
            name: 'Fakebiz Fake Gucci Flipflops', 
            price: 9.99,
            quantity: 0,
            id: uuid()
        }, 
		{ 
            name: 'Fakebiz Unreasonably Priced Sneakers', 
            price: 400,
            quantity: 0,
            id: uuid()
        },
		{ 
            name: 'Fakebiz Intrinsicly Worthless Diamonds', 
            price: 1000,
            quantity: 0,
            id: uuid()
        },
		
	]);
	
    const [shoppingCartItems, setShoppingCartItem] = useState([]);

	return (
		<>
			<Header />
			<Cart items={shoppingCartItems}/>
			<main style={{ padding: '1rem 0' }}>
				<h2>Products</h2>
				{availableItems.map((availableItem) => {
					return (
						<Item itemInfo={availableItem} key={availableItem.id} />
					);
				})}
			</main>
		</>
	);
}
