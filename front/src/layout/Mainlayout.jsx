// import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Componants/Footer/Footer";
import Navbar from "../Componants/nav/NavTest/NavTest/Navbar";
// import { UserContext } from "../providers/UserProvider";

import React from "react";

const Mainlayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Mainlayout;
