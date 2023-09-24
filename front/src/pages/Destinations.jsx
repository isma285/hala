import React, { useEffect, useState } from 'react';
import getDestinations from '../services/api'

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

	// éxucuter la requete HTTP au premier affichage du composant
	useEffect(() => {
		// récuperer les étudiants à partir  de l'API
		getDestinations().then((values) => setDestinations(values.data));
	}, []);

  return <>
    <div>Destinations</div>
    {destinations.map((values) => (
    <p>{ values.ville }</p>))}
  </>
}

export default Destinations;