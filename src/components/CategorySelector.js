import React, { useContext, useEffect, useRef } from "react";
import {useNavigate} from 'react-router-dom';
import "./CategorySelector.css";
import CarritoContext from "../context/Carrito/CarritoContext";

const CategorySelector = (props) => {
	const { categoriesLoad,  categoriesState } = useContext(CarritoContext);
	const selectRef= useRef(null);

	useEffect(() => {
		const fetchData = async () => {
			await categoriesLoad();
	  	}
		fetchData();
	}, []);

	useEffect(() => {
		if ( props.id == null  ) {
			if( !!selectRef.current )
				selectRef.current.value= 0 ; 
		} else {
			if( !!selectRef.current )
				selectRef.current.value = props.id; 
		}
	}, [categoriesState, props.id ]);

	const navigate = useNavigate();
  
	function handleChange(event ) {
		navigate('/categories'+ "?id=" + event.target.value ); 
	}
 
     return (
        <>	
		{
			(categoriesState.length > 0) && 
			<select onChange={handleChange} className="btn btn-outline-light outline-custom" ref={selectRef} > 
				<option key={0} value="0"> -- Select category -- </option>
				{categoriesState.map((element) => <option key={element.id}  value={element.id}>{element.name} </option>)}
			</select> 
		}
        </>
    );
};
export default CategorySelector;





	//<option key={0} value={ 0 } >{"not selected"} </option>
		// 


{/* <select id="select-category" name="select-category" className="btn btn-outline-light outline-custom" onChange={btnChange} >  
	<Options options={categoriesState} />
</select>
 */}

// function Options({ options }) {
// 	return options.map((option) => (
// 		<option key={option.id} value={ option.id } >
// 			{option.name}
// 		</option>
// 	));
// }




	// TODO:  populate ddl 

	// const initialState = [{ id: 0, name: 'not selected'  }]
	// const [data, setData ] = useState(initialState)


	// useEffect(() => {
	// 	//categoriesLoad()
	// 	//setData(  ); 
	// 	console.log("S useEffect:", state  );
	// }, [])
	
	// useDidMountEffect(() => {
	// 	let arr = []
	// 	arr.push( data[0] )
	// 	// console.log("S slice2222:", temp  );
	// 	console.log("S useDidMountEffect:", arr.concat(categoriesState) );
	// 	setData( arr.concat(categoriesState) )

	// }, [categoriesState ])

	
	//console.log("S state:",  state   );	

	// console.log("Select STATE0:", itemsState  );


		// window.location.reload();

 	// { (categoriesState.length > 0) && 		}
	// style={{ width: "360px" }} 

	// let [data, setData] = useState("Select a cat")

	// let handleChange = (e) => {
	// 	console.log("Select handleChange:", e.options[e.selectedIndex].value  );
	// }