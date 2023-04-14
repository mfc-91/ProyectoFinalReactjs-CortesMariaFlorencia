import React, { useContext, useEffect, useState  } from "react";
import { Link } from "react-router-dom";  

import CarritoContext from "../context/Carrito/CarritoContext";


const CartComponent = () => {
	const { cartState } = useContext(CarritoContext);

	const [counter, setCounter ] = useState(0)

	useEffect(() => {
		//setCounter( cartState.length )
		let cont = 0;
		cartState.forEach((element ) => {
			cont = cont + element.qty;
		})
		setCounter( cont )
	}, [cartState]);

	return (
		<Link to={'/cart'}> 
			<div className="nav-link active custom-link">
				<h5 className="custom-link">
					<i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;
					<span id="items-cart">{ counter } &nbsp;items </span> 
				</h5>
			</div>
		</Link>
	)
}
export default CartComponent 
