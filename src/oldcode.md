<BrowserRouter>
	<div className="App">
        <header>
            <h1>Fakebiz</h1>
            <div className="header-right">
                <nav>
                    <Link to="/">Home</Link>
                    {spacer}
                    <Link to="/products">Products</Link>
                    {spacer}
                    <Link to="/team">Team</Link>
                    {spacer}
                    <Link to="/contact">Contact</Link>
                </nav>
                <button onClick={() => openCart()}>
                    Cart: {cart.length}
                </button>
            </div>
        </header>
        <Cart
            items={cart}
            incrementFcn={incrementQuantity}
            decrementFcn={decrementQuantity}
            removeItemFcn={removeFromCart}
        />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/products"
                element={
                    <Products
                        availableItems={products}
                        addToCart={addToCart}
                    />
                }
            />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
</BrowserRouter>
