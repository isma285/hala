import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Promotions from "../pages/Promotions";
import Destinations from "../pages/Destinations";
import Connexion from "../pages/Connexion";
import DescriptionCard from "../pages/DescriptionCard";
import ContactezNs from "../pages/ContactezNs";
import Reservation from "../Componants/Reservation/Reservation";
import LogoutPage from "../Componants/LogoutForm/LogoutForm";
import SinscrirePage from "../pages/Laconexcion/SinscrirePage";
import Guard from "../Componants/Guard/Guard";
import TestPage from "../pages/TestPage";
import AdminLayout from "../layout/AdminLayout";
import LoginPage from "../pages/Laconexcion/LoginPage";
import Mainlayout from "../layout/Mainlayout";
import AdminHomePage from "../pages/admin/AdminHomePage";
// import ContactezNous from "../Componants/ContactezNous/ContactezNous";


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
				element: <SinscrirePage />,
			},
			{
				path: "contactezNs",
				element: <ContactezNs/>,
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
			{
				path: "test",
				element: <TestPage />,
			},
		
		],
	},
	{
		path: "/admin/",
		element: (
			<Guard role="admin">
				<AdminLayout />
			</Guard>
		),
		children: [
			{
				path: ":id?",
				element: <AdminHomePage />
			},
			// {
			// 	path: "students/:id?",
			// 	element: <AdminStudentsHomePage />,
			// },
			// {
			// 	path: "students/:id?/form",
			// 	element: <AdminStudentsFormPage />,
			// },
		],
	},


]);

export default router;
