import React, { useState, useEffect, useContext, useRef } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";
//import datajson from "../database/products.json";
// const found =  datajson.products.find(element => element.id ===  parseInt(id) ); 
import CarritoContext from "../context/Carrito/CarritoContext";
import useDidMountEffect from "../_helpers/useDidMountEffect";


//
const ProductDetail = () => {
	const { setItemsState, itemsState, itemsLoad, itemsLoad_filterBy_Item, cartState, setCartState } = useContext(CarritoContext); 
	const quantityRef= useRef(null);
	const QTY_LIMITS = {min: 0, max: 5} 
	const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
	const id = searchParams.get("id")

	const [data, setData] = useState({});
	const [initialQuantity, setInitialQuantity ] = useState(0)

	const stock_qty = (id) => {
		return 20
	}

	useEffect(() => {
		itemsLoad_filterBy_Item(id); 
	}, []);

	useDidMountEffect(() => {


		setData( !!itemsState.items.length ? itemsState.items[0] : { itemId:0, title:"not found" }   )

		if ( !!itemsState.items[0] && itemsState.items[0].stock > 0 ) {
				setInitialQuantity(1)
		}
	}, [itemsState.items ])
	

	useDidMountEffect(() => {
		console.log('cartState:', cartState );	
	}, [cartState ])

	
	function changeImage(e) {
		setData( {...data, thumbnail: e} )
	}
	
	function increaseNumber(e){
		let temp = parseInt( quantityRef.current.value) ;
		if ( temp >= QTY_LIMITS.max ) return;
		quantityRef.current.value = temp + 1 ; 
	}

	function decreaseNumber(e){
		let temp = parseInt( quantityRef.current.value) ;
		if ( temp <= QTY_LIMITS.min  ) return;
		quantityRef.current.value = temp - 1 ; 
	}



	function addItemToBasket() {
		let qty = parseInt( quantityRef.current.value);
		if ( qty <= 0 ) return;

		let obj = {itemId: id, qty:qty, price: data.price , thumbnail: data.thumbnail,  
			title: data.title, description: data.description, categoryId: data.categoryId, brand: data.brand }  

		let temp = cartState.slice();  

		//test if exists 
		const isPresent = temp.some((o) => o.itemId === id);
		if( isPresent) {
			console.log('existe! '   );
			temp.forEach((element ) => { 
				if(element.itemId == id ) { 
					element.qty = element.qty + qty; 
				}
			})
			setCartState(temp) 
			return;
		}
		temp.push( obj )
		setCartState(temp) 
	}

	function btnOnClickProcessBasket() {
		addItemToBasket();
	}
	
	function btnOnClickProcessBuy() {
		// agregar al basket solo si no existe
		let temp = cartState.slice();  
		const isPresent = temp.some((o) => o.itemId === id);
		if(!isPresent) {
			addItemToBasket();
		}
		navigate('/customer' ); 
	}


	 return (
        <> 
		<h5>detail</h5> 
 
				{ ( data.title === 'not found' ) && 
					<div className="container marketing mt-5">
						<h3>not found</h3>
					</div>
				}
	 
				{  ( data.title !== 'not found' ) &&  (true && ('itemId' in data) ) && 
					<div className="container marketing mt-5">

									<div className="container mt-5 mb-5">
										<div className="card">
											<div className="row g-0">
												<div className="col-md-6 border-end">
													<div className="d-flex flex-column justify-content-center">
														<div className="main_image mt-3">

															<img src={ data.thumbnail ? data.thumbnail : "img//300.png" } 
																id="main-product-image" width="310" alt=""/> 

														</div>
														<div className="thumbnail_images">
															<ul id="thumbnail">
																<li>
																	<img
																		onClick={() => changeImage(data.images[0])}
																		src={ ('images' in data ) ? data.images[0] : "img//300.png" }   
																		width="80" alt=""

																	/>
																</li>
																<li>
																	<img
																		onClick={() => changeImage(data.images[1])}
																		src={ ('images' in data ) ? data.images[1] : "img//300.png" } 
																		width="80" alt=""
																	/>
																</li>
																<li>
																	<img
																		onClick={() => changeImage(data.images[2])}
																		src={ ('images' in data ) ? data.images[2] : "img//300.png" } 
																		width="80" alt=""
																	/>
																</li>
																<li>
																	<img
																		onClick={() => changeImage(data.images[3])}
																		src={ ('images' in data ) ? data.images[3] : "img//300.png" } 
																		width="80" alt=""
																	/>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="col-md-6">
													<div className="p-3 right-side">
														<div className="d-flex justify-content-between align-items-center">
															<h3>
																<span id="main-product-title">{data.title}</span>
															</h3>
															<span className="heart">
																<i className="bx bx-heart"></i>
															</span>
														</div>

														<div className="mt-2 pr-3 content">
															<p id="main-product-description">{data.brand}</p>
														</div>
														<div className="mt-2 pr-3 content">
															<p id="main-product-description">{data.description}</p>
														</div>
														<h3>
															$<span id="main-product-price">  {data.price}  </span>
														</h3>
														<div className="ratings d-flex flex-row align-items-center">
															<div className="d-flex flex-row">
																{" "}
																<i className="bx bxs-star"></i> <i className="bx bxs-star"></i>{" "}
																<i className="bx bxs-star"></i> <i className="bx bxs-star"></i>{" "}
																<i className="bx bx-star"></i>{" "}
															</div>{" "}
															<span>stock: { data.stock } </span>
														</div>

														<div className="mt-4">
															<ul className="pagination justify-content-start set_quantity">
																<li className="page-item">
																	<button
																		className="page-link "
																		onClick={() => decreaseNumber('qty-tobuy' ) }
																	>
																		<i className="fas fa-minus"></i>{" "}
																	</button>
																</li>
																<li className="page-item">
																	<input  			
																		ref={quantityRef} 
																		type="text"
																		name=""
																		// value={ initialQuantity }
																		className="page-link"
																		defaultValue={ initialQuantity }
																		id="qty-tobuy"
																	/>
																</li>
																<li className="page-item">
																	<button
																		className="page-link"
																		onClick={() => increaseNumber('qty-tobuy' ) }
																	>
																		<i className="fas fa-plus"></i>
																	</button>
																</li>
															</ul>
														</div>

														<div style={{ height: "150px" }}></div>
														<div className="buttons d-flex flex-row mt-5 gap-3 mb-4">
															<button
																id="btn-buy"
																style={{ width: "160px" }}
																className="btn btn-outline-dark outline-custom text-uppercase "
																onClick={() => btnOnClickProcessBuy() }
															>
																<b>Buy Now</b>{" "}
															</button>
															<button
																id="btn-basket"
																style={{ width: "160px" }}
																className="btn btn-outline-dark outline-custom text-uppercase "
																onClick={() => btnOnClickProcessBasket() }
															>
																<b>Add to Basket</b>{" "}
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div> 


					</div>
				}					

        </>
    );
};
export default ProductDetail;



    // console.log("ID:", searchParams.get("id"));
    // const { id, thumbnail, title, description, price } = data.products[0];
    // const obj = { id, thumbnail, title, description, price };