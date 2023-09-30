import { createBrowserRouter } from "react-router-dom";
import { Mainlayout } from "../layout/Mainlayout";
import HomePage from "../pages/HomePage";
import Promotions from "../pages/Promotions";
import Destinations from "../pages/Destinations";
import Connexion from "../pages/Connexion";
import DescriptionCard from "../pages/DescriptionCard";
import Sinscrire from "../Componants/Sinscrire/Sinscrire";
import ContactezNs from "../pages/ContactezNs";
import Reservation from "../Componants/Reservation/Reservation";
import LogoutPage from "../Componants/LogoutForm/LogoutForm";
import { LoginPage } from "../pages/Laconexcion/LoginPage";
import { SinscrirePage } from "../pages/Laconexcion/SinscrirePage";

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
				path: "destinations",
				element: <Destinations />,
			},
			{
				path: "promotions", 
				element: <Promotions />,
			},
			{
				path: "connexion",
				element: <Connexion />,
			},
			{
				path: "offres/pays/:id",
				element: <DescriptionCard />,
			},
			{
				path: "inscription",
				element: <Sinscrire />,
			},
			{
				path: "contactezNs",
				element: <ContactezNs />,
			},
			{
				path: "logout",
				element: <LogoutPage/>,
			},
			{
				path: "reservation",
				element: <Reservation />,
			},
			{
				path: "seconnecter",
				element: <LoginPage />,
			},
			// {
			// 	path: "sinscrire",
			// 	element: <SinscrirePage />,
			// },

		],
	},
]);

export default router;
