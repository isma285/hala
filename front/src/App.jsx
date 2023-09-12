import React from "react";
import Nav from "./Componants/nav/Nav";
// import Nav02 from "./Componants/nav02:Nav02";
import { RouterProvider } from "react-router-dom";
import router from "./services/router";

export default function App() {
	return <RouterProvider router={router} />;
}
