import React, { useContext, useEffect  } from "react";
import CategorySelector from "../components/CategorySelector";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import CarritoContext from "../context/Carrito/CarritoContext";

const ItemListContainer = (props) => {
	const { itemsState, itemsLoad, itemsLoad_filterBy_Category } = useContext(CarritoContext);

	useEffect(() => {
		const fetchData = async () => {
			if ( props.id === null || props.id == 0 ) {
				console.log(" sin filtro " );
				await itemsLoad();
			} else {
				console.log(" con filtro " );
				await itemsLoad_filterBy_Category(props.id);
			}
	  	}
		fetchData();

	}, [props.id]);


  return (
	<>
		<div className="container marketing pt-0 mt-5 mb-5">
			<CategorySelector id={props.id} />
			{
				itemsState.items && itemsState.items.length > 0 &&  <ItemList data={ itemsState.items }/>
			}
		</div>
	</>
  )
}
export default ItemListContainer 




// import datajson from "../database/products.json";
// import { useSearchParams, useNavigate, Link } from "react-router-dom"; 

// const navigate = useNavigate(); 
// function btnOnclick1(){
// 	navigate('/util' ); 
// }

// <Link to="/util">gotoLinkTAg</Link>
// &nbsp;


// <span className="me-2">
// <button
// 	id="btn-buy"
// 	style={{ width: "120px" }}
// 	className="btn btn-outline-light outline-custom   "
// 	onClick={() => btnOnclick1()}
// >
// 	<b>goto</b>{" "}
// </button>		
// </span>
// &nbsp;
// &nbsp;
// <a className="a-link-normal pb-3 px-0 " target="_top" rel="noopener"   href={'/util' }> 
// gotoHref
// </a>
 

