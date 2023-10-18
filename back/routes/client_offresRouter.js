import express from "express";
import dbConnection from "../services/dbConnection.js";

const destinationRouter = express.Router();

destinationRouter.get("/", async (req, res) => {
	// requete sql a exécuter
	const query = `
        SELECT destination.*
        FROM hala.destination;
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

export default destinationRouter;
