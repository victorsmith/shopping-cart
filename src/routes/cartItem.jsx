import '../App.css'

export default function CartItem(props) {
	return (
		<div>
			<h1>{props.itemInfo.name}</h1>
			<h2>{props.itemInfo.price}</h2>
			<h2>{props.itemInfo.quantity}</h2>
		</div>
	);
}
