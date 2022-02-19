import { Link } from 'react-router-dom';

function Header(props) {

    const spacer = ` | `;

	return (
		<div className="App">
			<div>
				<h1>Fakebiz</h1>
				<h1>Cart {props.numItems}</h1>
			</div>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
				}}>
				<Link to="/">Home</Link>
                {spacer} 
                <Link to="/products">Products</Link>
                {spacer}
			    <Link to="/contact">Contact</Link>
			</nav>
		</div>
	);
}

export default Header;
