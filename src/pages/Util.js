import React, { useEffect, useContext } from "react";
import "./Cart.css";

import db from "../firebase/config";
import { getItems, getItemsByCondition, createItem, addItem, deleteItem, deleteByCondition } from "../firebase/api.js";
import CarritoContext from "../context/Carrito/CarritoContext";

const Util = () => {
    const { setState, state, itemsLoad } = useContext(CarritoContext);

	useEffect(  () => {
		// itemsLoad();
		//console.log('DESA 00:', state.items );

	}, [])
	

    async function btnTest0() {
        // const items = await getItems("items", db);
        // const arr = [];
        // items.forEach((element) => {
        //     arr.push(element);
        // });

        console.log("res:", state);
    }



    async function btnTest1() {
        console.log("btnTest1:");
		setState( { ...state, user:'horacio' }  )
    }

    async function btnTest2() {
        console.log("btnTest2:");
		itemsLoad();
    }

    return (
        <>
            <div className="container marketing mt-5">
                <div className="row">
                    <h1>Util</h1>

                    <button
                        id="btn-buy"
                        style={{ width: "120px" }}
                        className="btn btn-outline-light outline-custom   "
                        onClick={() => btnTest0()}
                    >
                        <b>lista data</b>{" "}
                    </button>
                    <button
                        id="btn-buy"
                        style={{ width: "120px" }}
                        className="btn btn-outline-light outline-custom   "
                        onClick={() => btnTest1()}
                    >
                        <b>Test</b>{" "}
                    </button>
                    <button
                        id="btn-buy"
                        style={{ width: "120px" }}
                        className="btn btn-outline-light outline-custom   "
                        onClick={() => btnTest2()}
                    >
                        <b>Test2</b>{" "}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Util;
