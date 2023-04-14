import React, { useEffect, useState, useContext  } from 'react';
import "./Customer.css";
import ItemSummary from "../components/ItemSummary";
import Swal from "sweetalert2";  
import CarritoContext from "../context/Carrito/CarritoContext"; 

const Customer = () => {
	const { setItemsState, itemsState, itemsLoad, itemsLoad_filterBy_Item, cartState, setCartState, order_save } = useContext(CarritoContext); 

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])

	const [state, setState] = useState({
		address: "Rivadavia 23, Moron",
		email: "floppy@gmail.com",
		email2: "floppy@gmail.com",
		phone: "+54 11 xxxx-xxxx"
	})
	const [pasador, setPasador] = useState({})

	const handleChange = evt => {
		const name = evt.target.name;
		const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
		setState({
			...state,
			[name]: value
		})
	}

	const handlePasador = (payload) => {
		setPasador( payload )
	};

	const formatedTimestamp = ()=> {
		const d = new Date()
		const date = d.toISOString().split('T')[0];
		const time = d.toTimeString().split(' ')[0].replace(/:/g, ':');
		return `${date} ${time}`
	}

	function dunmmy(){

		Swal.fire({
			title: "Compra procesada!",
			text: "continua con la compra?",
			icon: 'success',
			// confirmButtonColor: "#1477d2",
			confirmButtonText: "Accept",
			showCancelButton: false,
			allowOutsideClick: false,
			// cancelButtonColor: "#a1a1a1",
			cancelButtonText: "Cancel",
			//customClass: "white-background",
			customClass: {
				confirmButton: 'custom-button-confirm',
				cancelButton: 'custom-button-cancel',
			},
		}) ;


		return true 
	}


	async function btnOnClickProcess() {
 
		let temp = Object.assign({}, pasador)

		if( state.email !== state.email2 ) {
			alert('repita la carga del email, no coinciden');
			return;
		}
		const {email2, ...restState } = state;
		temp.header = { ...temp.header, ...restState, dateTime: formatedTimestamp(), orderNumber: 0 }

		console.log('argument from Child: ', temp);

		if(temp.header.total <= 0 ) {
			alert('no hay items');
			return;
		}

		// CALL API 
		const result = await order_save(temp); 
		//

		if(!!result){
			setCartState([]); // borrar lista carrito 
		} else {
			alert('error al procesar orden')
		}

		Swal.fire({
			title: "Compra procesada!",
			text: "NRO DE ORDEN: " + result , 
			icon: 'success',
			// confirmButtonColor: "#1477d2",
			confirmButtonText: "Accept",
			showCancelButton: false,
			allowOutsideClick: false,
			// cancelButtonColor: "#a1a1a1",
			cancelButtonText: "Cancel",
			//customClass: "white-background",
			customClass: {
				confirmButton: 'custom-button-confirm',
				cancelButton: 'custom-button-cancel',
			},
		}) ;




		// Swal.fire({
		// 	title: "confirmación",
		// 	text: "continua con la compra?",
		// 	icon: 'question',
		// 	// confirmButtonColor: "#1477d2",
		// 	confirmButtonText: "Accept",
		// 	showCancelButton: true,
		// 	allowOutsideClick: false,
		// 	// cancelButtonColor: "#a1a1a1",
		// 	cancelButtonText: "Cancel",
		// 	//customClass: "white-background",
		// 	customClass: {
		// 		confirmButton: 'custom-button-confirm',
		// 		cancelButton: 'custom-button-cancel',
		// 	},
		// }).then(function (e) {
		// 	if (e.isConfirmed) {
		// 		new Swal({
		// 			toast: true,
		// 			position: "top-end",
		// 			showConfirmButton: false,
		// 			timer: 6000,
		// 			icon: "success",
		// 			title: "compra confirmada!",
		// 			showCloseButton: true,
		// 		});
		// 			console.log("BUY:" );
		// 		}
		// });
	}


    return (
        <>
            <div className="container marketing mt-5">
                <div className="row">
					<h5>
                        <b>SUMMARY </b> 
                    </h5>
                    <hr className="mt-1 mb-1" />
					
                    		<ItemSummary handlePasador={handlePasador} />

                    <h5 className="mt-4" >
                        <b>BILLING ADDRESS</b> 
                    </h5>
                    <hr className="mt-1 mb-1" />

                    <div className="col-md-8 order-md-1 mt-4">
                        {/* <form className="needs-validation" noValidate="" onSubmit={e => e.preventDefault()} >  */}
                        <div className="needs-validation"  > 


                            {/* <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder=""
                                        defaultValue=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Valid first name is required.</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder=""
                                        defaultValue=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Valid last name is required.</div>
                                </div>
                            </div> */}
                            {/* <div className="mb-3">
                                <label htmlFor="username">Username</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Username"
                                        required=""
                                    />
                                    <div className="invalid-feedback" style={{ width: "100%" }}>
                                        Your username is required.
                                    </div>
                                </div>
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="email">
                                    Email <span className="text-muted"></span>
                                </label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com"

									name="email" 
									// value={ state.email } 
									defaultValue={ state.email }
									onChange={ handleChange }
								/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email2">
                                    Email <span className="text-muted">( repeat )</span>
                                </label>
                                <input type="email" className="form-control" id="email2" placeholder="you@example.com"

									name="email2" 
									// value={ state.email } 
									defaultValue={ state.email2 }
									onChange={ handleChange }
								/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    placeholder="+54 11 xxxx-xxxx"
                                    required=""

									name="phone" 
									// value={ state.address } 
									defaultValue={ state.phone }
									onChange={ handleChange } 
                                />
                                <div className="invalid-feedback">Please enter your shipping email.</div>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="1234 Main St"
                                    required=""

									name="address" 
									// value={ state.address } 
									defaultValue={ state.address }
									onChange={ handleChange } 
                                />
                                <div className="invalid-feedback">Please enter your shipping address.</div>
                            </div>
							
                            {/* <div className="mb-3">
                                <label htmlFor="address2">
                                    Address 2 <span className="text-muted">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address2"
                                    placeholder="Apartment or suite"
                                />
                            </div> */}


                            {/* <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="country">Country</label>
                                    <select className="custom-select d-block w-100" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">Please select a valid country.</div>
                                </div>


                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state">State</label>
                                    <select className="custom-select d-block w-100" id="state" required="">
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">Please provide a valid state.</div>
                                </div>


                                <div className="col-md-3 mb-3">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">Zip code required.</div>
                                </div>
                            </div> */}

{/* 
                            <hr className="mb-4" />
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="same-address" />
                                <label className="custom-control-label" htmlFor="same-address">
                                    Shipping address is the same as my billing address
                                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="save-info" />
                                <label className="custom-control-label" htmlFor="save-info">
                                    Save this information for next time
                                </label>
                            </div>
                            <hr className="mb-4" />
                            <h4 className="mb-3">Payment</h4>
                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input
                                        id="credit"
                                        name="paymentMethod"
                                        type="radio"
                                        className="custom-control-input"
                                        defaultChecked=""
                                        required=""
                                    />
                                    <label className="custom-control-label" htmlFor="credit">
                                        Credit card
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        id="debit"
                                        name="paymentMethod"
                                        type="radio"
                                        className="custom-control-input"
                                        required=""
                                    />
                                    <label className="custom-control-label" htmlFor="debit">
                                        Debit card
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        id="paypal"
                                        name="paymentMethod"
                                        type="radio"
                                        className="custom-control-input"
                                        required=""
                                    />
                                    <label className="custom-control-label" htmlFor="paypal">
                                        PayPal
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name">Name on card</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-name"
                                        placeholder=""
                                        required=""
                                    />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">Name on card is required</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-number">Credit card number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-number"
                                        placeholder=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Credit card number is required</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration">Expiration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-expiration"
                                        placeholder=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Expiration date required</div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-cvv">CVV</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cc-cvv"
                                        placeholder=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Security code required</div>
                                </div>
                            </div> */}
                            <hr className="mb-4" />
                            {/* <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Continue to checkout
                            </button> */}
							<button
								id="btn-basket"
								style={{ width: "160px" }}
								className="btn btn-outline-dark outline-custom text-uppercase "
								onClick={() => btnOnClickProcess() }
							>
								<b> Comprar </b>
							</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Customer;
