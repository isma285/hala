import express from "express";
import dbConnection from "../services/dbConnection.js";

const clientRouter = express.Router();

clientRouter.get("/", async (req, res) => {
	// requete sql a éxécuter
	const query = `
    SELECT client.*
    FROM hala.client;
    `;

	// exécuter la requete
	try {
		// récuperer les resultats de la requete
		const [results] = await dbConnection.execute(query);
		// console.log(results);

		// renvoyer la reponse HTTP
		return res.status(200).json({
			status: 200,
			message: "OK",
			data: results,
		});
	} catch (error) {
		// renovoyer une erreur
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}
});
clientRouter.post("/create", async (req, res) => {
	// requete sql a éxécuter
	const query = `
    INSERT INTO hala.client
    VALUE (NULL,:lastname ,:firstname, :adresse, :birthay, :email, :password, :nmrtlfn)
    `;

	// exécuter la requete
	try {
		// récuperer les resultats de la requete
		const [results] = await dbConnection.execute(query, req.body);
		// console.log(results);

		// renvoyer la reponse HTTP
		return res.status(201).json({
			status: 201,
			message: "OK",
			
		});
	} catch (error) {
		// renovoyer une erreur
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}
});

export default clientRouter;