import React from "react";
import Nav from "./Componants/nav/Nav";
// import Nav02 from "./Componants/nav02:Nav02";
import { RouterProvider } from "react-router-dom";
import router from "./services/router";
import { ClientProvider } from "./providers/UserProvider";

export default function App() {
	return <ClientProvider>
	<RouterProvider router={router} />
</ClientProvider>
}
