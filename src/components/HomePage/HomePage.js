import "./HomePage.css"
function HomePage() {
	return (
		<div id="banner">
			<article id="restaurant-description">
				<h2>Little Lemon</h2>
				<h4>Chicago</h4>
				<p>We are a family owned restaurant, focused on traditional recipes served with a modern twist</p>
				{/* <button id="reserve-table">Reserve a Table</button> */}
				<a id="reserve-table" href="/booking">
					Reserve a Table
				</a>
			</article>
			<div id="restaurant-img">
				<img src="../../../Assets/restauranfood.jpg" alt="" />
			</div>
		</div>
	)
}

export default HomePage
