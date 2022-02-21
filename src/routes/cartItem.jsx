import '../App.css';

export default function CartItem(props) {
	return (
		<div className="cart-item">
			<h6>{props.itemInfo.name}</h6>
			<p>Price: {props.itemInfo.price}</p>
			<span>
				<button
					onClick={() => {
						console.log('Target -: ' + props.itemInfo.id);
						props.decrement(props.itemInfo);
					}}
				>
					-
				</button>
				<span>Quantity: {props.itemInfo.quantity}</span>
				<button
					onClick={() => {
						console.log('Target +: ' + props.itemInfo.id);
						props.increment(props.itemInfo);
					}}
				>
					+
				</button>
			</span>
		</div>
	);
}
