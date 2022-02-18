import { Link } from 'react-router-dom';

function Header() {

    const spacer = ` | `;

	return (
		<div className="App">
			<h1>Fakebiz</h1>
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
