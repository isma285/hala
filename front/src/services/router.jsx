import { createBrowserRouter } from "react-router-dom";
import { Mainlayout } from "../layout/Mainlayout";
import HomePage from "../pages/HomePage";
import Offres from "../Componants/offres/Offres";

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
            element:<Connexion/>
           }
        ],
    },
]);

export default router;