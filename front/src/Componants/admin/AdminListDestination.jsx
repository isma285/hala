import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteDestination, getAllDestinations } from "../../services/api.js";
import "./AdminDestination.css";

const AdminListDestination = () => {
	const API_URL = import.meta.env.VITE_API_URL;

	// état pour rafraîchir le composant après la suppression d'un élève
	const [forceUpdate, setForceUpdate] = useState(false);

	// état pour stocker les données de l'API
	const [destinations, setDestinations] = useState([]);

	// état pour stocker la notification contenue dans la sessionStorage
	const [message, setMessage] = useState();

	// exécuter la requête HTTP au premier affichage du composant
	useEffect(() => {
		// récupérer les étudiants à partir de l'API
		getAllDestinations().then((values) => setDestinations(values.data));
		// console.log(values.data);
	}, [forceUpdate]);

	// récupérer la notification du sessionStorage
	useEffect(() => {
		// si un message existe en session
		if (window.sessionStorage.getItem("notice")) {
			// stocker le message dans l'état
			setMessage(window.sessionStorage.getItem("notice"));

			// supprimer le massage en session
			window.sessionStorage.removeItem("notice");

			// faire disparaître le message après un délai en millisecondes
			setTimeout(() => setMessage(null), 5000);
		}
	});

	// supprimer un élève
	const handleClick = async (id) => {
		// console.log(id);
		const responseAPI = await deleteDestination(id);
		if (responseAPI.status === 200) {
			window.sessionStorage.setItem("notice", "Destination supprimée");
		} else {
			window.sessionStorage.setItem("notice", "Erreur");
		}
		setForceUpdate(!forceUpdate);
	};

	return (
		<>
			<p>{message}</p>
			<p>
				<Link to={"/admin/destination/form"}>Add</Link>
			</p>
			<table className="table">
				<thead>
					<tr className="tr">
						<td className="td">Id</td>
						<td className="td">Ville</td>
						<td className="td">photo</td>
						<td className="td">Description</td>
						<td className="td">Tendance</td>
						<td className="td"> </td>
					</tr>
				</thead>
				<tbody>
					{destinations.map((value) => (
						<tr key={crypto.randomUUID()}>
							<td className="td">{value.id}</td>
							<td className="td">{value.ville}</td>

							<td className="td">
								<img src={`${API_URL}/img/${value.photo}`} alt={value.ville} />
							</td>
							<td className="td">{value.textdescription}</td>
							<td className="td">{value.tendance}</td>

							<td className="td">
								<Link to={`/admin/destination/${value.id}/form`}>Edit</Link>
								<Link onClick={() => handleClick(value.id)}> Delete</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default AdminListDestination;
