import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import CartComponent from "./CartComponent";

const NavBar = (props) => {

    return (
        <>
		<nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
			<div className="container-fluid">
				<ul className="nav float-left">
					<Link  to={'/'}> 
						<div className="nav-link active custom-link" >
							<h4 className="pt-1"> <i className="fa-solid fa-store"></i>&nbsp;&nbsp;ecommerce floppy </h4>
						</div>
					</Link>

				</ul>
				<form className="d-flex">
					<CartComponent /> 
				</form>
			</div>
		</nav>
        </>
    );
};
export default NavBar;
