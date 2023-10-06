import express from "express";
import dbConnection from "../services/dbConnection.js";
import multer from "multer";
import { getExtensionFromMimeType } from "../services/fileService.js";

const destinationRouter = express.Router();

const uploadDestination = "public/img";
const uploader = multer({
	dest: uploadDestination,
});

destinationRouter.get("/", async (req, res) => {
	// requete sql a exécuter
	const query = `
		SELECT offres.*, typehebergement.tyhotelapart, destination.ville, destination.photo, destination.textdescription
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
		;
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

destinationRouter.post("/create", uploader.any(), async (req, res) => {
	const photo = `${req.files[0].filename}.${getExtensionFromMimeType(
		req.files[0].mimetype,
	)}`;

	console.log(req.body, req.files);
	// requete sql a exécuter
	const query = `
      
		INSERT INTO hala.destination
		VALUE ( NULL, :ville , :photo, :textdescription, :tendance)
		
    `;

	// exécuter la requete
	try {
		// récuperer les resultats de la requete
		const [results] = await dbConnection.execute(query, {
			...req.body,
			photo: photo,
		});
		// console.log(results);
		await fs.rename(
			`${req.files[0].destination}${req.files[0].filename}`,
			`${req.files[0].destination}${photo}`,
		);
		// renvoyer la reponse HTTP
		return res.status(201).json({
			status: 201,
			message: "OK",
		});
	} catch (error) {
		// renvoyer une erreur
		return res.status(400).json({
			status: 400,
			message: error,
		});
	}
});

export default destinationRouter;
