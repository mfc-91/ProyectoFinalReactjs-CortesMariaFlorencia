import React, { useContext, useEffect, useState } from "react";
import CartList from './CartList'
import CarritoContext from "../context/Carrito/CarritoContext"; 


// TODO: 
// convertir datos de cliente, reducir mail y nombre, + cart detail para q sea la table Orders 

const CartListContainer = () => {
	const { setItemsState, itemsState, itemsLoad, itemsLoad_filterBy_Item, cartState, setCartState } = useContext(CarritoContext); 

	const [data, setData] = useState(null)
	useEffect(() => {
		setData( cartState )
	}, [cartState])

	

  return (
	<> 
		{ !!data  && 
			<div className="  mt-5">
				<CartList  data={ data }  />
			</div>
		}
	</>
  )
}

export default CartListContainer 

