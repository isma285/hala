// import des dépendances
import express from "express";
import http from "node:http";
import dbConnection from "./services/dbConnection.js";
import destinationRouter from "./routes/destinationRouter.js";
import cors from "cors";
import offresRouter from "./routes/offresRouter.js";
import clientRouter from "./routes/clientRouter.js";
import typehebergementRouter from "./routes/typehebergementRouter.js";
import adminRouter from "./routes/adminRouter.js";

const app = express();

// création d'un routeur
const router = express.Router();

// associer l'application au routeur
app.use(router);

// ajouter la methode json a toutes les routes , pour recupere le requetes
router.use(express.json());
router.use(
	cors({
		origin: "http://localhost:5173",
	}),
);

router.use(express.static('public'));


router.use("/destination", destinationRouter);

router.use("/offres", offresRouter);

router.use("/client", clientRouter);

router.use("/admin", adminRouter);

router.use("/hebergement",typehebergementRouter);

// router.get("/", async (req, res) => {

// 	const query = `
// 	SELECT destination.ville
// 	FROM hala.destination;
//     `;

// 	try {
// 		const [results] = await dbConnection.execute(query);
// 		return res.status(200).json({
// 			status: 200,
// 			message: "OK!",
// 			data: results,
// 		});
// 	} catch (error) {
// 		return res.status(400).json({
// 			status: 400,
// 			message: "Error",
// 		});
// 	}
// });

// router.get("/", async (req, res) => {
// 	const query = `
//    	SELECT offres.*, typehebergement.tyhotelapart,destination.ville,destination.photo
// 	FROM
// 	 hala.offres
// 	JOIN
// 	 hala.typehebergement
// 	ON
// 	 offres.typehebergement_id = typehebergement.id
// 	JOIN
// 	 hala.destination
// 	ON
// 	 offres.destination_id = destination.id
// 	WHERE 
// 		typehebergement.tyhotelapart = "Hôtel"
// 	;
//     `;

// 	try {
// 		const [results] = await dbConnection.execute(query);
// 		return res.status(200).json({
// 			status: 200,
// 			message: "OK!",
// 			data: results,
// 		});
// 	} catch (error) {
// 		return res.status(400).json({
// 			status: 400,
// 			message: "Error",
// 		});
// 	}
// });

// router.get("/", async (req, res) => {
// 	const query = `
// 	SELECT client.*
//     FROM hala.client;
//     `;

// 	try {
// 		const [results] = await dbConnection.execute(query);
// 		return res.status(200).json({
// 			status: 200,
// 			message: "OK!",
// 			data: results,
// 		});
// 	} catch (error) {
// 		return res.status(400).json({
// 			status: 400,
// 			message: "Error",
// 		});
// 	}
// });
const server = http.createServer(app);

export default server;
