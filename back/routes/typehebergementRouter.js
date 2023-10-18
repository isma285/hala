import express from "express";
import dbConnection from "../services/dbConnection.js";

const typehebergementRouter = express.Router();

typehebergementRouter.get("/", async (req, res) => {
	// requete sql a exécuter
	const query = `
	SELECT offres.*, typehebergement.tyhotelapart,destination.ville,destination.photo
	FROM
	 hala.offres
	JOIN
	 hala.typehebergement
	ON
	 offres.typehebergement_id = typehebergement.id
	JOIN
	 hala.destination
	ON
	 offres.destination_id = destination.id
	WHERE 
		typehebergement.tyhotelapart = "Hôtel"
    `;

	// exécuter la requete
	try {
		// récuperer les resultats de la requete
		const [results] = await dbConnection.query(query);
		// console.log(results);

		// renvoyer la reponse HTTP
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: results,
		});
	} catch (error) {
		// renvoyer une erreur
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}
});

export default typehebergementRouter;
