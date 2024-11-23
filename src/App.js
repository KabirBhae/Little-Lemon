import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header"
import Nav from "./components/Navbar/Nav"
// import HomePage from "./components/HomePage/HomePage"
import BookingPage from "./components/BookingPage/BookingPage"
import Chicago from "./components/Chicago/Chicago"
import CustomersSay from "./components/CustomersSay/CustomersSay"
import Specials from "./components/Specials/Specials"
import Main from "./components/Main"

function App() {
	return (
		<Router>
			<Header></Header>
			<Nav></Nav>
			<Routes>
				<Route exact path="/" element={<Main />} />
				<Route path="/booking" element={<BookingPage />} />
				<Route path="/chicago" element={<Chicago />} />
				<Route path="/customers-say" element={<CustomersSay />} />
				<Route path="/menu" element={<Specials />} />
			</Routes>

			<Footer></Footer>
		</Router>
	)
}

export default App
