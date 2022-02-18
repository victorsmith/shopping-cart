export default function CartItem(props) {
	return (
		<div>
			<h1>{props.name}</h1>
			<h2>{props.price}</h2>
			<h2>{props.quantity}</h2>
		</div>
	);
}
