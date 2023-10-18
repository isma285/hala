import dbConnection from "./dbConnection.js";

// récupérer un étudiant par son identifiant
const getDestinationById = async (id) => {
	// requête
	const query = `
		SELECT destination.*
		FROM hala.destination
		WHERE destination.id = :id;
	`;

	try {
		const [results] = await dbConnection.query(query, { id: id });
		return results.shift();
	} catch (error) {
		// renvoyer une erreur
		return error;
	}
};

export { getDestinationById };
