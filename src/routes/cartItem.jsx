import '../App.css';

export default function CartItem(props) {
	const { itemInfo, decrement, increment, removeItem} = props;

	if (itemInfo.quantity > 0) {
		return (
			<div className="cart-item">
				<h6>{itemInfo.name}</h6>
				<p>Price: {itemInfo.price}</p>
				
				<button onClick={ () => removeItem(itemInfo) }>
					Delete
				</button>

				<span>
					<button
						onClick={() => { decrement(itemInfo) }}>
						-
					</button>
					<span>Quantity: {itemInfo.quantity}</span>
					<button
						onClick={() => { increment(itemInfo) }}>
						+
					</button>
				</span>
			</div>
		);
	} 
	else {
		return (
			<></>
		)
	}
}
