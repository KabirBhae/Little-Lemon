import "./Specials.css"
function Specials() {
	return (
		<>
			<div id="menu-section">
				<div id="menu-section-header">
					<h2>This week's Specials!</h2>
					{/* <button id="online-menu">Online Menu</button> */}
					<a id="online-menu" href="/menu">
						Online Menu
					</a>
				</div>
				<div id="menu-section-body">
					<div className="body-cards">
						<img src="../../../Assets/greek salad.jpg" alt="" />
						<div className="card-title">
							<h4>Greek Salad</h4>
							<h4 className="card-price">$3.99</h4>
						</div>
						<p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro obcaecati rerum, accusantium velit numquam culpa unde vitae ad sed eius dolor cumque, quis nemo voluptatem recusandae magnam suscipit at adipisci.</p>
					</div>
					<div className="body-cards">
						<img src="../../../Assets/bruchetta.svg" alt="" />
						<div className="card-title">
							<h4>Greek Salad</h4>
							<h4 className="card-price">$3.99</h4>
						</div>
						<p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro obcaecati rerum, accusantium velit numquam culpa unde vitae ad sed eius dolor cumque, quis nemo voluptatem recusandae magnam suscipit at adipisci.</p>
					</div>
					<div className="body-cards">
						<img src="../../../Assets/lemon dessert.jpg" alt="" />
						<div className="card-title">
							<h4>Greek Salad</h4>
							<h4 className="card-price">$3.99</h4>
						</div>
						<p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro obcaecati rerum, accusantium velit numquam culpa unde vitae ad sed eius dolor cumque, quis nemo voluptatem recusandae magnam suscipit at adipisci.</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Specials
