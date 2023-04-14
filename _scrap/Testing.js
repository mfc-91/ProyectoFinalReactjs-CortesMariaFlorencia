import React, { useContext } from "react";

import CarritoContext from "../context/Carrito/CarritoContext";

const Testing = () => {
    const { contador, cambiar, multiplicar, multiplicarx2 } = useContext(CarritoContext);

    function apicall() {
        multiplicar(contador + 1);
    }
    function apicall2() {
        multiplicarx2();
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <h5>Testing contador: {contador} </h5>
                    <div>
                        <button onClick={() => apicall()} type="button" className="mx-1 btn btn-success">
                            add articulo
                        </button>
                        <button onClick={() => apicall2()} type="button" className="mx-1 btn btn-success">
                            cero
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testing;
