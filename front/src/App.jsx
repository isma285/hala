import React from "react";
import Nav from "./Componants/nav/Nav";
// import Nav02 from "./Componants/nav02:Nav02";
import { RouterProvider } from "react-router-dom";
import router from "./services/router";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
	return <UserProvider>
	<RouterProvider router={router} />
</UserProvider>
}
