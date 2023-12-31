import express from "express";
import dbConnection from "../services/dbConnection.js";
import argon2 from "argon2";

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
		const [results] = await dbConnection.query(query);
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
clientRouter.get("/:id", async (req, res) => {
	// requete sql a éxécuter
	const { id } = req.params;

	const query = `
    SELECT client.*
    FROM hala.client
	WHERE client.id =:id;
    `;

	// exécuter la requete
	try {
		// récuperer les resultats de la requete
		const [results] = await dbConnection.query(query, req.params);
		// console.log(results);

		// renvoyer la reponse HTTP
		return res.status(200).json({
			status: 200,
			message: "OK",
			// shift : récupérer le premier indice d'un array
			data: results.shift(),
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
    VALUE (NULL,:lastname ,:firstname,:email, :password, 2)
    `;

	// exécuter la requete
	try {
		// récuperer les resultats de la requete
		const [results] = await dbConnection.query(query, req.body);
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

// créer un utilisateur
clientRouter.post("/register", async (req, res) => {
	// hacher le mot de passse contenu dans req.body
	const bodyHashed = {
		...req.body,
		password: await argon2.hash(req.body.password),
	};
	// console.log(bodyHashed);
	// créer une requête
	const query = `
	INSERT INTO hala.client
    VALUE (NULL,:lastname ,:firstname,:email, :password, 2)
    `;

	try {
		// rcupere le body de la requete avec la propriete body de la requtes
		const [results] = await dbConnection.query(query, bodyHashed);

		return res.status(201).json({
			status: 201,
			message: "User created",
		});
	} catch (error) {
		return res.status(400).json({
			status: 400,
			message: "Bad Request",
		});
	}
});

// connexion
clientRouter.post("/login", async (req, res) => {
	// requete SQL
	const query = `
		SELECT client.*, role.name AS role 
		FROM hala.client
		JOIN hala.role
		ON role.id = client.role_id
		WHERE client.email = :email
`;
	//exécution de la requête
	let results;

	try {
		// récuperation des resultas de la requête
		[results] = await dbConnection.query(query, req.body);

		// console.log(results);

		// si l'email n'existe pas dans la table
		if (results.length === 0) {
			return res.status(403).json({
				status: 403,
				message: "forbidden",
			});
		}
	} catch (error) {
		return res.status(400).json({
			status: 400,
			message: "error",
		});
	}
	// récuperer l'utilisateur
	const client = results.shift();
	// console.log(user);
	//  verefier la corcondance entre le hash contenu dans le table avec le mot de passe saisi
	/* 
    user.password : le hash est contenu dans le table, récupéré dans le select
    req.body.password : la saisie en clair du champ de formulaire nommé password 
  */

	if (!(await argon2.verify(client.password, req.body.password))) {
		return res.status(403).json({
			status: 403,
			message: "forbidden",
		});
	}

	// si l' utilisateur existe, renvoyer l'utillisateur dans réponse HTTP
	return res.status(200).json({
		status: 200,
		message: "ok",
		data: client,
	});
});

clientRouter.put("/update", async (req, res) => {
	// requête
	const query = `
		UPDATE hala.client
		SET
			client.lastname = :lastname,
			client.firstname = :firstname,
			client.email = :email,
		WHERE client.id = :id;
	`;

	/*
		la valeur de la variable id de la requête SQL est définie dans un objet JS dont les propriétés reprennent les noms des variables SQL
			variable SQL :id > { id: ... }
			variable SQL :name et :id > { name: ..., id: ... }
	*/

	try {
		const [results] = await dbConnection.query(query, req.body);
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

export default clientRouter;
