import { createBrowserRouter } from "react-router-dom";
import { Mainlayout } from "../layout/Mainlayout";
import HomePage from "../pages/HomePage";
import Promotions from "../pages/Promotions";
import Destinations from "../pages/Destinations";
import Connexion from "../pages/Connexion";
import DescriptionCard from "../pages/DescriptionCard";
import Sinscrire from "../Componants/Sinscrire/Sinscrire";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Mainlayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "/destinations",
				element: <Destinations />,
			},
			{
				path: "/promotions",
				element: <Promotions />,
			},
			{
				path: "/connexion",
				element: <Connexion />,
			},
			{
				path: "/offres/pays/:id",
				element: <DescriptionCard />,
			},
			{
				path: "/inscription",
				element: <Sinscrire />,
			},
		],
	},
]);

export default router;
