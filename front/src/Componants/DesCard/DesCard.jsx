import { useEffect, useState } from "react";
import "./DesCard.css";
import { Link, useParams } from "react-router-dom";
import { getDestinations, getOffresByDestinations } from "../../services/api";

function DesCard() {
	const { id } = useParams();

	const [offres, setOffres] = useState([]);

	const [destinations, setDestinations] = useState([]);

	// éxucuter la requete HTTP au premier affichage du composant
	useEffect(() => {
		// récuperer les destinations à partir  de l'API
		getOffresByDestinations(id).then((values) => setOffres(values.data));

		getDestinations().then((values) => setDestinations(values.data));
	}, []);

	return (
		<section className="descreption-card">
			{offres.map((values) => (
				<article className="first-card">
					<img 
					className="image" 
					src={values.photo}
					alt=""
					 />
					<div className="text-descreption">
						<p>{values.textdescription}</p>
					</div>

					<article className="info-card">
						<ul>
							<li>
								<h3> {values.ville}</h3>
							</li>
							<li>
								De {values.aeroport} le {values.datedepart}
							</li>
							<li>jusqu'à {values.dateretour} </li>
							<li>Prix: {values.prix}</li>
						

							<li>
								<Link to={"/reservation"} className="reservation">
									Réservation
								</Link>
							</li>
						</ul>
					</article>
				</article>
			))}

			{/* <article className="first-card">
				<img className="image" src="/thailandehotel.jpg" alt="" />
				<div className="text-descreption">
					<p>
						Bangkok, la dynamique capitale de la Thaïlande, est une métropole
						animée réputée pour son riche patrimoine culturel, sa vie de rue
						effervescente et ses superbes temples, offrant un mélange captivant
						de tradition et de modernité..
					</p>
				</div>

				<article className="info-card">
					<ul>
						<li>
							<h3>Bangkok</h3>
						</li>
						<li>Depart de PARIS CDG le 22/9/2023</li>
						<li> 7 nuits / Hôtel / Piscine </li>
						<li> Prix: 699,99€</li>
						* <Link to= "#" ><div className='reservation'>Reservation</div></Link> *
						<li>
							<Link to={"/reservation"} className="reservation">
								Réservation
							</Link>
						</li>
					</ul>
				</article>
			</article>
			<article className="first-card">
				<img className="image" src="/thailande-maison.webp" alt="" />
				<div className="text-descreption">
					<p>
						Pattaya est une ville balnéaire située sur la côte est de la
						Thaïlande, célèbre pour ses plages, sa vie nocturne animée et ses
						nombreuses attractions touristiques. Elle attire des visiteurs du
						monde entier en quête de divertissement, de sports nautiques et de
						détente au bord de la mer.
					</p>
				</div>

				<article className="info-card">
					<ul>
						<li>
							<h3> Pattaya</h3>
						</li>
						<li>Depart de Marseille Provence le 22/9/2023</li>
						<li> 10 nuits / Apartement / Piscine </li>
						<li> Prix: 759,99€</li>
						/* <Link to= "#" ><div className='reservation'>Reservation</div></Link> *
						<li>
							<Link to={"/reservation"} className="reservation">
								Réservation
							</Link>
						</li>
					</ul>
				</article>
			</article> */}
		</section>
	);
}

export default DesCard;
