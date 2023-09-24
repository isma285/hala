import React from "react";
import "./DesCard.css";
function DesCard() {
	return (
		<section className="descreption-card">
			<article className="first-card">
				<img
					className="image"
					src="/thailandehotel.jpg"
					alt=""
				/>
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
						{/* <Link to= "#" ><div className='reservation'>Reservation</div></Link> */}
						<li>
							<a className="reservation" href="#">
								Réservation
							</a>
						</li>
					</ul>
				</article>
			</article>
			<article className="first-card">
				<img
					className="image"
					src="/thailande-maison.webp"
					alt=""
				/>
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
						<li>Depart de Marsille Provence le 22/9/2023</li>
						<li> 10 nuits / Apartement / Piscine </li>
						<li> Prix: 759,99€</li>
						{/* <Link to= "#" ><div className='reservation'>Reservation</div></Link> */}
						<li>
							<a className="reservation" href="#">
								Réservation
							</a>
						</li>
					</ul>
				</article>
			</article>
		</section>
	);
}

export default DesCard;
