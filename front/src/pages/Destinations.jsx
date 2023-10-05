import React, { useEffect, useState } from 'react';
import {getDestinations} from '../services/api'
import { Link } from 'react-router-dom';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

	// éxucuter la requete HTTP au premier affichage du composant
	useEffect(() => {
		// récuperer les destinations à partir  de l'API
		getDestinations().then((values) => setDestinations(values.data));
	}, []);

  return <>
  	<section className="descreption-card">
      {destinations.map((values) => <article className="first-card" key={crypto.randomUUID()}>
				<img 
					className="image" 
					src={values.photo}
					alt=""
				/>
				<div className="text-descreption">
					<p>
          {values.textdescription}
					</p>
				</div>

				<article className="info-card">
					<ul>
						<li>
							<h3> {values.ville}</h3>
						</li>
						<li>De {values.aeroport} le {values.datedepart}</li>
						<li>jusqu'à {values.dateretour} </li>
						<li>Prix: {values.prix}</li>
						<li>{values.typehebergement_id}</li>

						
						<li>
						<Link to={"/reservation"} className="reservation">
								Réservation
							</Link>
						</li>
					</ul>
				</article>
			</article>)
      }

    </section>
    {/* <div>Destinations</div*/}
  </>
}

export default Destinations;