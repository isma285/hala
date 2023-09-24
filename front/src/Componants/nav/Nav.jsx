import React, { useState } from "react";
import { Link } from "react-router-dom";

import DivBurger from "./DivBurger";

export default function () {
	const [menu, setMenu] = useState(false);
	function changeclass() {
		setMenu(!menu);
		console.log(menu);
	}
	return (
		<>
			<nav className="menu">
				<div className="logo">
					<Link to="/">
						<img className="logoimg" src="/Fichier 1.svg" alt="" />
					</Link>
				</div>
					<div className="navlink">
				<li className="ismatop">
					<Link to="/destinations">
						<h3>Toutes les offres</h3>
					</Link>
				</li>
				<li className="ismatop">
					<Link to="/promotions">
						<h3>Promotions</h3>
					</Link>
				</li>
				<li className="ismatop">
					<Link to="/">
						<h3>Contactez-nous</h3>
					</Link>
				</li>
				<li className="ismatop">
					<Link to="/connexion">
						<h3>Se connecter</h3>
					</Link>
				</li>
				</div>

				{menu ? <DivBurger /> : null}

				{/* rome-ignore lint/a11y/useButtonType: <explanation> */}

				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img
					className="burgur"
					onClick={changeclass}
					src="/menu (1).png"
					alt=""
				/>
			</nav>
		</>
	);
}
