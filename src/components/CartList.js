import React, { useContext, useEffect, useState } from "react";
import CarritoContext from "../context/Carrito/CarritoContext"; 
import { useNavigate } from "react-router-dom";

const CartList = (props) => {
	const { setItemsState, itemsState, itemsLoad, itemsLoad_filterBy_Item, cartState, setCartState } = useContext(CarritoContext); 
	const navigate = useNavigate();
	//console.log('DATA CartList:', props.data    )
	
	function btnOnClickBuy(){
		if( props.data.length <= 0  ) {
	 		alert('no hay items');
		}else {
			navigate('/customer' ); 
		}
		return;
	}

	function btnOnClickEliminar(){
		setCartState([]);
	}
	
  return (
	<> 
		<div className="container marketing mt-5">
			<div className="row">
				<h5><b>Cart List</b> </h5>

				<div className="container mt-3 px-4 py-2" id="hanging-icons">
					<div >
						{ props.data.map((element) => {
							return <CartItem  key={element.itemId} data={element} />  
						})} 
					</div>

					<div className="buttons d-flex flex-row mt-0 gap-3 mb-4">
						<button
							id="btn-process-buy"
							style={{ width: 140 }}
							className="btn btn-outline-dark outline-custom text-uppercase "
							onClick={() => btnOnClickBuy() }
						>
							<b>Comprar</b> 
						</button>
						<button
							id="btn-delete-basket"
							style={{ width: 140 }}
							className="btn btn-outline-dark outline-custom text-uppercase "
							onClick = {() => btnOnClickEliminar() }
						>
							<b>Eliminar</b>
						</button>
					</div>

				</div>
			</div>
		</div> 
	</>
  )
}
export default CartList 



function CartItem(props) {
	const { setItemsState, itemsState, itemsLoad, itemsLoad_filterBy_Item, cartState, setCartState } = useContext(CarritoContext); 
 
	function eliminarProducto(id) {
		let temp = cartState.slice();  
		const index = temp.findIndex(item => item.itemId === id);
		if (index > -1) {  
			temp.splice(index, 1); // 2nd parameter means remove one item only
		}
		setCartState(temp) 
	}

    return (
        <>
			<div className="card mb-3" style={{ maxWidth: 900 }}> 
				<div className="row g-0">
					<div className="col-md-4 text-center ">
						<img src= {props.data.thumbnail} className="img-fluid rounded-start" alt="..." style={{ maxWidth: 250 }} />
					</div>
						<div className="col-md-8 ps-4 py-0 ">
							<div className="card-body ">
								<h5 className="card-title"><b> {props.data.title}  </b>   </h5>
								<h6 className="card-title">{props.data.brand}</h6>
								<p className="card-text mt-4">
									{props.data.description}
									<br/> <br/> 
									<b>Qty: {props.data.qty } </b>  
								</p>
								{/* <p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
								</p> */}
								<button
									id="btn-delete-basket"
									style={{ width: 90, height: 30 }}
									className="btn btn-outline-dark btn-sm outline-custom text-uppercase"
									onClick={() => eliminarProducto(props.data.itemId) }
								>
									<b>borrar</b>{" "}
								</button>
							</div>
						</div>
				</div>
			</div>

        </>
    );
}


