import { createBrowserRouter } from "react-router-dom";
import { Mainlayout } from "../layout/Mainlayout";
import HomePage from "../pages/HomePage";
import Offre from "../pages/Offre";
import Destinations from "../pages/Destinations";
import Connexion from "../pages/Connexion";
import DescriptionCard from "../pages/DescriptionCard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout/>,
        children: [
            {
                path: '',
                element: <HomePage/>
            },
           {
            path: '/Destinations',
            element:<Destinations/>
           },
           {
            path: '/offre',
            element:<Offre/>
           },
           {
            path: '/connexion',
            element:<Connexion />
           },
           {
            path: '/DescriptionCard',
            element:<DescriptionCard />
           }
        ], 
    },
]);

export default router;