import "./nav.css"

function Nav() {
	return (
		<nav className="navbar-container">
			<img src="../../Assets/Logo.svg" alt="" />
			<ul className="navbar-items">
				<li>
					<a href="/">HOME</a>
				</li>
				<li>
					<a href="/about">ABOUT</a>
				</li>
				<li>
					<a href="/menu">MENU</a>
				</li>
				<li>
					<a href="/reservation">RESERVATION</a>
				</li>
				<li>
					<a href="/order-online">ORDER ONLINE</a>
				</li>
				<li>
					<a href="/login">LOGIN</a>
				</li>
			</ul>
		</nav>
	)
}
export default Nav
