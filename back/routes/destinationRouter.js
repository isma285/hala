import express from "express";
import dbConnection from "../services/dbConnection.js";
import multer from "multer";
import getExtensionFromMimeType  from "../services/fileService.js";
import { getDestinationById } from "../services/api.js";

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

destinationRouter.put("/update", uploader.any(), async (req, res) => {
	// console.log(req.body, req.files);
	// {
	// 	fieldname: 'photo',
	// 	originalname: 'logo_h3_campus_online.svg',
	// 	encoding: '7bit',
	// 	mimetype: 'image/svg+xml',
	// 	destination: 'public/img/',
	// 	filename: '869d1fed42c5140b73266e806159908a',
	// 	path: 'public/img/869d1fed42c5140b73266e806159908a',
	// 	size: 3660
	//   }

	// récupérer les inhalas dans la base de données pour connaître l'image existante
	const { id } = req.body;
	const destination = await getDestinationById(id);

	// récupérer le body de la requête
	let bodyWithImage = req.body;

	// si aucune image n'a été sélectionnée dans le formulaire, utiliser l'image existante en base de données
	if (req.files.length === 0) {
		bodyWithImage = { ...bodyWithImage, photo: destination.photo };
	}
	// si une image a été sélectionnée dans le formulaire, transférer la nouvelle image et supprimer l'ancienne
	else {
		// nom final du fichier transféré : ajout de l'extension
		const photo = `${req.files[0].filename}.${getExtensionFromMimeType(
			req.files[0].mimetype,
		)}`;

		// renommer le fichier transféré avec son nom final
		await fs.rename(
			`${req.files[0].destination}${req.files[0].filename}`,
			`${req.files[0].destination}${photo}`,
		);

		// supprimer l'ancienne image
		await fs.rm(`${uploadDirectory}${destination.photo}`);

		// utiliser la nouvelle image dans le body de la requête
		bodyWithImage = { ...bodyWithImage, photo: photo };
	}

	// requête
	const query = `
		UPDATE hala.destination
		SET
			destination.ville = :ville,
			destination.photo = :photo,
			destination.textdescription = :textdescription,
			destination.tendance = :tendance,
			WHERE destination.id = :id;
		`;

	/*
		la valeur de la variable id de la requête SQL est définie dans un objet JS dont les propriétés reprennent les noms des variables SQL
			variable SQL :id > { id: ... }
			variable SQL :name et :id > { name: ..., id: ... }
	*/

	try {
		const [results] = await dbConnection.execute(query, bodyWithImage);
		return res.status(200).json({
			status: 200,
			message: "OK",
		});
	} catch (error) {
		// renvoyer une erreur
		return res.status(400).json({
			status: 400,
			// message: "Error",
			message: error,
		});
	}
});

export default destinationRouter;
