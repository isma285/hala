import express from "express";
import dbConnection from "../services/dbConnection.js";

const adminRouter = express.Router();

adminRouter.get("/", async (req, res) => {
	// requete sql a éxécuter
	const query = `
        // §
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

export default destinationRouter;