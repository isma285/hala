import express from "express";
import dbConnection from "../services/dbConnection.js";
import argon2 from "argon2";

const adminRouter = express.Router();

adminRouter.get("/", async (req, res) => {
	// requete sql a éxécuter
	const query = `
        SELECT admin.*
		FROM hala.admin;
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


adminRouter.post("/", async (req, res) => {
	// requete SQL
	const query = `
SELECT admin.*,  
FROM hala.admin
WHERE admin.email = :email;

`;
	//exécution de la requête
	let results;

	try {
		// récuperation des resultas de la requête
		[results] = await dbConnection.execute(query, req.body);

		console.log(results);

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
	const admin = results.shift();
	// console.log(user);
	//  verefier la corcondance entre le hash contenu dans le table avec le mot de passe saisi
	/* 
    user.password : le hash est contenu dans le table, récupéré dans le select
    req.body.password : la saisie en clair du champ de formulaire nommé password 
  */

	if (!(await argon2.verify(admin.password, req.body.password))) {
		return res.status(403).json({
			status: 403,
			message: "forbidden",
		});
	}

	// si l' utilisateur existe, renvoyer l'utillisateur dans réponse HTTP
	return res.status(200).json({
		status: 200,
		message: "ok",
    	data: admin
	});
});












export default adminRouter;