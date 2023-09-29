import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css'

// import DivBurger from "./DivBurger";

const Nav = () => {
	
	const [menu, setMenu] = useState("");
	// function changeclass() {
	// 	setMenu(!menu);
		// console.log(menu);
	
	return (
		<>
			<nav className="menu">
				<div className="logo">
					<Link to="/">
						<img className="logoimg" src="/Fichier 1.svg" alt="" />
					</Link>
				</div>
					
						<ul className={`navlink ${menu}`}>
				<li className="ismatop">
					<Link to="/destinations">
						Toutes les offres
					</Link>
				</li>
				<li className="ismatop">
					<Link to="/promotions">
						Promotions
					</Link>
				</li>
				<li className="ismatop">
					<Link to="/contactezNs">
						Contactez-nous
					</Link>
				</li>
				<li className="ismatop">
					<Link to="/connexion">
						Se connecter
					</Link>
				</li>
				</ul>
			

				{/* {menu ? <DivBurger /> : null} */}

				{/* rome-ignore lint/a11y/useButtonType: <explanation> */}

				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img src="/menu (1).png"
					className="burgur"
					onClick={() => {
					setMenu(menu =="" ? "mobile-menu" : 
					"");
					}}
				/>
			</nav>
		</>
	);
			};
export default Nav;

