import React from 'react'
import { Link } from "react-router-dom"; 

const ItemList = (props) => {
  return (
	<>
	<main>
		<div className="container-fluid bg-trasparent my-4 p-3" style={{ position: "relative" }}>
			<div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 gx-5"	>
				{ props.data.map((element) => {
					return <Card key={element.id} data={element} />;
				})}
			</div>
		</div>
	</main>
	</>
  )
}
export default ItemList 


function Card(props) {
    function shorterText(text, length) {
        return text.length < length ? text : text.substring(0, length - 2) + "..";
    }

    return (
        <>
            <div className="col  mb-5">
                <div className="card custom-card h-100">
					
					 <Link to={'/item?id=' + props.data.id }> 
							<div className="a-link-normal pb-3 px-0 " target="_top" rel="noopener" title="to be defined"  > 

							<div className="mx-auto custom-img mt-2">
								<img
									src={props.data.thumbnail}
									className="mx-auto d-block custom-img"
									width="210"
									height="160"
									alt="..."
								/>
							</div>

							<div className="card-body pb-3" >
								<span className="card-title card-title-custom"  >
									<b> {shorterText(props.data.title, 30)} </b> 
								</span>
								<div className="card-text card-description-custom ">
									{shorterText(props.data.description, 26 * 4)} 
								</div>
					
								<div className="card-footer bg-transparent mt-1">
									<div >
										<span className="price-font float-start" >
											<span className="price-font">$</span> {props.data.price} 
										</span>
										<span className="card-text float-end" >
											stock: {props.data.stock }  
										</span>
									</div>
								</div>
							</div>

							</div>
					 </Link>

                </div>
            </div>
        </>
    );


}

