import '../App.css';

export default function Item(props) {
	return (
		<div className="card">
			<h5>{props.itemInfo.name}</h5>
			<h6>
				Price: {props.itemInfo.price} | Quantity:{' '}
				{props.itemInfo.quantity}
			</h6>
			<button onClick={props.addToCart}>Add To Cart</button>
		</div>
	);
}
