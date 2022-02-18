export default function Item(props) {
	return (
		<div>
			<h5>{props.itemInfo.name}</h5>
			<h6>Price: {props.itemInfo.price} | Quantity: {props.itemInfo.quantity}</h6>
		</div>
	);
}
