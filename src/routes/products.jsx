import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Cart from './cart';
import Header from './header';
import Item from './item';
import '../App.css';

export default function Products(props) {

	const {availableItems, addToCart} = props;

	return (
		<div>
			<h2>Products</h2>
			<main className="products-grid">
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
		</div>
	);
}
