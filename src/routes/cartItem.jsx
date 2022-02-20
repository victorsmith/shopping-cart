import '../App.css'

export default function CartItem(props) {
	return (
		<div className='cart-item'>
			<h6>{props.itemInfo.name}</h6>
			<p>Price: {props.itemInfo.price} | Quantity: {props.itemInfo.quantity}</p>
		</div>
	);
}
