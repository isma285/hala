import express from "express";
import dbConnection from "../services/dbConnection.js";

const offresRouter = express.Router();

offresRouter.get("/", async (req, res) => {
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

offresRouter.post("/create", async (req, res) => {
	// requete sql a éxécuter
	const query = `
    INSERT INTO hala.offres
    VALUE (NULL, :aeroport, :datedepart, :dateretour, :prix, :guide, :promotion, :typehebergement_id, :destination_id)

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

// modifier un offre
offresRouter.put("update", async (req, res) => {
	// rêquete
	const query = `
	UPDATE hala.offres
	SET 
	offre.aeroport = :aeroport,
	offre.datedepart = :datedepart,
	offre.dateretour = :dateretour,
	offre.prix = :prix,
	offre.guide = :guide,
	WHERE destination.id = :id,

	`;

	try {
		const [results] = await dbConnection.execute(query, req.body);
		return res.status(200).json({
			status: 200,
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

// supprimer un offre
offresRouter.delete("/delete", async (req, res) => {
	// requête
	const query = `
		DELETE FROM hala.offres
		WHERE destination.id = :id;
	`;
	try {
		const [results] = await dbConnection.execute(query, req.body);
		return res.status(200).json({
			status: 200,
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

offresRouter.get("/destination/:id", async (req, res) => {
	// const { id } = req.params;

	// requete sql a exécuter
	const query = `
		SELECT offres.*, destination.ville, destination.photo, destination.textdescription,
		FROM hala.offres
		JOIN hala.destination
		ON destination.id = offres.destination_id
		WHERE destination.id = :id;
    `;

	// exécuter la requete
	try {
		// récuperer les resultats de la requete
		const [results] = await dbConnection.execute(query, req.params);
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

export default offresRouter;
