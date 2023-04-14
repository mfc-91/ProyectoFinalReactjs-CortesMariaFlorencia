import React, { useContext, useEffect, useState  } from "react";
import "./ItemSummary.css"; 
import CarritoContext from "../context/Carrito/CarritoContext";

const itemSummary = ({handlePasador}) => {
	const { cartState, itemsState, items_calcular_filterBy_Item  } = useContext(CarritoContext);
	const initValue = {qty: 0, amount: 0.00, total: 0.00, tax: 0.00, discount: 0.00 }
	const [summary, setSummary] = useState(initValue)



	useEffect(() => {
		//console.log("useEffect:", cartState );
		// itemId, qty
		const fetchData = async () => {
			let cont = 0;
			let sum = 0;
			for (let i = 0; i < cartState.length; i++) {
				const element = cartState[i];

				const [unItem] = await items_calcular_filterBy_Item( element.itemId )		
				// console.log("useEffect unItem LOOP:", unItem.itemId,  unItem.price );
				sum = sum + unItem.price * element.qty;
				cont = cont + element.qty;
			}
			// TODO: calcular 
			const tempSummary =  { qty: cont, amount: sum, total:sum , tax: 0.00, discount: 0.00 }
			setSummary( tempSummary )


			let arr = []
			cartState.forEach(element => {
				const { thumbnail, brand, description, categoryId, ...newObject } = element  
				arr.push(newObject )
			});
			// console.log("newObject0:", arr  );
			handlePasador( {header: tempSummary, detail: arr }  );
	  	}
		fetchData();

		


		// //setCounter( cartState.length )
		// let cont = 0;
		// let sum = 0;
		// cartState.forEach((element ) => {
		// 	cont = cont + element.qty;
		// 	sum = sum + element.qty;
		// })
		// // let temp = {qty: 23, amount: 1200.23, total: 1200.23, tax: 0.0, discount: 0.0 }
		// setSummary( {...summary, qty: cont, amount: sum, total:sum })


	}, []);


	return (
		<>
		<div className="table-responsive">
		<table className="table text-center">
			<thead>
			<tr>
				<th style={{ width: "34%"}}></th>  
				<th style={{ width: "22%"}}>Qty</th>
				<th style={{ width: "2%"}}></th>
				<th style={{ width: "42%"}}>Amount&nbsp;&nbsp;</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th scope="row" className="text-start">ITEMS</th>
				<td align="right"><svg className="bi" width="24" height="24"> </svg>{summary.qty}</td>
				<td ><svg className="bi" width="24" height="24"> </svg></td>
				<td align="right"><svg className="bi" width="24" height="24"> </svg>${summary.amount}.-</td>
			</tr>
			<tr>
				<th scope="row" className="text-start">discount</th>
				<td><svg className="bi" width="24" height="24"> </svg></td>
				<td><svg className="bi" width="24" height="24"> </svg></td>
				<td align="right"><svg className="bi" width="24" height="24"> </svg>${summary.discount}.-</td>
			</tr>
			<tr>
				<th scope="row" className="text-start">Tax</th>
				<td><svg className="bi" width="24" height="24"> </svg></td>
				<td><svg className="bi" width="24" height="24"> </svg></td>
				<td align="right"><svg className="bi" width="24" height="24"> </svg>${summary.tax}.-</td>
			</tr>
			<tr>
				<th scope="row" className="text-start">TOTAL</th>
				<td></td>
				<td align="right" ><svg className="bi" width="24" height="24"> </svg></td>
				<td align="right" ><svg className="bi" width="24" height="24"> </svg>${summary.total}.-</td>
			</tr>
			</tbody>

		</table>
		</div>
	</>
  )
}

export default itemSummary 

