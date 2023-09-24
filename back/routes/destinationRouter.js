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
		const [results] = await dbConnection.execute(query);
		// console.log(results);

		// renvoyer la reponse HTTP
		return res.status(200).json({
			status: 200,
			message: "ok",
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
destinationRouter.get("/:id", async (req, res) => {
	// requete sql a exécuter
	const { id } = req.params;

	const query = `
		SELECT destination.*
	FROM hala.destination
	WHERE destination.id = :id ;
		`;

	// exécuter la requete
	try {
		// récuperer les resultats de la requete
		const [results] = await dbConnection.execute(query, req.params);
		// console.log(results);

		// renvoyer la reponse HTTP
		return res.status(200).json({
			status: 200,
			message: "ok",
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

destinationRouter.post("/create", async (req, res) => {
	// requete sql a exécuter
	const query = `
      
		INSERT INTO hala.destination
		VALUE ( NULL, :ville , :photo, :textdescription, :tendance)
		§§§§§§§§§§§§§§§§§§§§ table jointure
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
		// renvoyer une erreur
		return res.status(400).json({
			status: 400,
			message: "Error",
		});
	}
});

export default destinationRouter;
