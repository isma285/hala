import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from './Nav.css'
import DivBurger from "./DivBurger";


export default function () {
	const [menu, setMenu] = useState(false)
	function changeclass() {
	setMenu(!menu)	
	console.log(menu);
	}
	return (
		<>
		<nav className="menu">
		<div className="logo">
			<Link to="#"
			 ><img className="logoimg" src="/public/Fichier 1.svg" alt="#"/></Link>
		</div>
		{menu ? <DivBurger/> : null}
	   <img onClick={changeclass} 
	   className="burgur" src="/public/menu (1).png" alt="" />
   </nav>
	</>		
	);
}
