import CartItem from './cartItem';
import "../App.css"

export default function Cart(props) {

	const {items} = props;
	const { incrementFcn, decrementFcn } = props;
	
	function closeCart() {
		document.getElementById('cart').style.display = 'none';
	}

	return (
		<div id="cart">
			<button onClick={() => closeCart()}>Close</button>
			<h2>Cart</h2>
			{items.map((item) => {
				return (
					<CartItem
						itemInfo={item}
						increment={incrementFcn}
						decrement={decrementFcn}
					/>
				);
			})}

			<button>Checkout</button>
		</div>
	);
}
