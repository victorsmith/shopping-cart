import CartItem from './cartItem';

export default function Cart(props) {
	return (
		<div>
			{props.items.map((item) => {
				return (
					<CartItem
						name={item.name}
						price={item.price}
						quantity={item.quantity}
					/>
				);
			})}
		</div>
	);
}
