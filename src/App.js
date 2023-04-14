import React, { useState, useContext } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import CarritoState from "./context/Carrito/CarritoState";
import Home from "./pages/Home";
import Util from "./pages/Util";
import Customer from "./pages/Customer";

export default function App() {
    return (
        <>
		<CarritoState>
			<NavBar />
			<Routes>
				<Route  path="/" element={ <Home />} />
				<Route  path="/categories" element={ <Home />} />
				<Route  path="/item" element={ <ProductDetail />} />
				<Route  path="/cart" element={ <Cart />} />
				<Route  path="/util" element={ <Util />} />
				<Route  path="/customer" element={ <Customer />} />
				
				<Route path="*" element={<h5 className="mt-5 ms-5" >404</h5>} />
			</Routes>
			<Footer />
		</CarritoState>
        </>
    );
}

// export default function App() {
//     return (
//         <>
// 			<Routes>
// 				<Route path="/" element={
// 					<CarritoState>
// 						<NavBar />
// 						<Home />
// 						<Footer />
// 					</CarritoState>
// 				} />
// 				<Route path="/categories/" element={
// 						<CarritoState>
// 							<NavBar />
// 							<Home />
// 							<Footer />
// 						</CarritoState>
// 				} />
// 				<Route path="/item/" element={
// 						<CarritoState>
// 							<NavBar />
// 							<ProductDetail />
// 							<Footer />
// 						</CarritoState>
// 				} />
// 				<Route path="/cart" element={
// 					<CarritoState>
// 						<NavBar />
// 						<Cart />
// 						<Footer />
// 					</CarritoState>
// 				} />
// 				<Route path="/util" element={
// 					<CarritoState>
// 						<NavBar />
// 						<Util />
// 						<Footer />
// 					</CarritoState>
// 				} />
// 			</Routes>
//         </>
//     );
// }
