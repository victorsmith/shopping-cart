import { Link } from 'react-router-dom';

function Header(props) {
	const spacer = ` | `;

	return (
		<header className="row">
			<h1>Fakebiz</h1>
			<nav>
				<Link to="/">Home</Link>
				{spacer}
				<Link to="/products">Products</Link>
				{spacer}
				<Link to="/contact">Contact</Link>
			</nav>
			<h6>Cart: {props.numItems}</h6>
		</header>
	);
}

export default Header;
