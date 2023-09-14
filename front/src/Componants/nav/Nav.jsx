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
					<Link to="#">
						<img className="logoimg" src="/public/Fichier 1.svg" alt="" />
					</Link>
				</div>
				{menu ? <DivBurger /> : null}

				{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
				 
					{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
 <img className="burgur"
					 onClick={changeclass}
					src="/public/menu (1).png" alt="" />
			
			</nav>
		</>
	);
}
