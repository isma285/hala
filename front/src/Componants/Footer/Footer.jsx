import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<footer>
				<div >
					<h3> A Propos</h3>
					<li>
						<Link to={"/Apropos"}>
							
							À propos de nous</Link>
					</li>
					<li>
						<a href="#">Politique de confidentialité</a>
					</li>
				</div>
				<div>
					<h3>SUIVEZ-NOUS</h3>
					<li>
						<a href="#">Facebook</a>
					</li>
					<li>
						<a href="#">Instagram</a>
					</li>
				</div>
				<div>
					<h3> AIDE</h3>
					<li>
						<a href="#">Aide et FAQ</a>
					</li>
					<li>
						<a href="#">Nous contacter</a>
					</li>
				</div>
			</footer>
		</>
	);
}
