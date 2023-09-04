import { createBrowserRouter } from "react-router-dom";
import { Mainlayout } from "../layout/Mainlayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout/>,
        children: [
            {
                path: '',
                element: <HomePage/>
            },
            // {
            //     path: 'contact',
            //     element: <ContactPage />
            // },
        ],
    },
]);

export default router;