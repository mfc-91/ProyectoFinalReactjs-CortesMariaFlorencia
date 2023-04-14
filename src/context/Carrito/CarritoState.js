import React, { useReducer, useState } from "react";
import { getItems, getItemsByCondition, createItem, addItem, deleteItem, deleteByCondition } from "../../firebase/api.js";
import db from "../../firebase/config";

import CarritoContext from "./CarritoContext";

const CarritoState = (props) => {
	const [itemsState, setItemsState ] = useState([] )
	const [categoriesState, setCategoriesState] = useState([] )
	const [cartState, setCartState] = useState([] ); // {itemId: 0, qty: 0 }
	const [paramState, setParamState ] = useState([] )

	const itemsLoad = async () => {
		const items = await getItems('items', db );
		items.sort((a,b) => a.categoryId - b.categoryId); 
		setItemsState( { items:items  } )
	}

	const categoriesLoad = async () => {
		const categories = await getItems('categories', db );
		categories.sort((a,b) => a.name - b.name); 
		setCategoriesState( categories )
	}

	const itemsLoad_filterBy_Item = async (id) => {
		const items = await getItemsByCondition('itemId', parseInt(id), '==', 'items', db );
		setItemsState( { items: items  } )
	}
	const itemsLoad_filterBy_Category = async (id) => {
		const items = await getItemsByCondition('categoryId', parseInt(id), '==', 'items', db );
		setItemsState( { items: items  } )
	}
 
	const items_calcular_filterBy_Item = async (id) => {
		const items = await getItemsByCondition('itemId', parseInt(id), '==', 'items', db );
		return items
	}

	// function fakeNumber() {
	// 	var minm = 10;
	// 	var maxm = 9999;
	// 	return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
	// }

	function fakeNumber() {
		var date1 = new Date(); // current date
		var date2 = new Date("03/30/2023"); // mm/dd/yyyy format
		var timeDiff = Math.abs(date2.getTime() - date1.getTime()); // in miliseconds
		var timeDiffInSecond = Math.ceil(timeDiff / 1000); // in second
		return timeDiffInSecond;
	}

	const order_includeNro = (obj) => {
		let temp = fakeNumber()
		temp = temp.toString().padStart(6, '0');

		obj.header.orderNumber = temp
		//console.log( 'DESA state:',  obj.header.orderNumber   )
	} 


	const order_save = async (obj) => {
		try {
			order_includeNro(obj)
			// const orderNumber = String(fakeNumber() );
			await createItem (obj, obj.header.orderNumber , 'orders', db);

			return obj.header.orderNumber 
		} catch (error) {
			return -1  
		}
	}

    return (
        <CarritoContext.Provider
            value={{
                // contador: state.count,
				itemsLoad,
				itemsLoad_filterBy_Item,
				itemsLoad_filterBy_Category,
				categoriesLoad,
				itemsState, 
				setItemsState,
				categoriesState, 
				setCategoriesState,
				cartState,
				setCartState,
				items_calcular_filterBy_Item,
				order_save 
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    );
};
export default CarritoState;


// import CarritoReducer from "./CarritoReducer";
// import { CANTIDAD_SET } from "../types";
// const initialState = { count: 0 };

// const [state, dispatch] = useReducer(CarritoReducer, initialState);
// const cantidad_set =  (value) => {
// 	dispatch({ type: CANTIDAD_SET, payload: value })
// };

