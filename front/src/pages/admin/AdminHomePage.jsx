import React from "react";
import AdminDestinationForm from "../../Componants/admin/AdminDestinationForm";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
	return (
		<>
			<h1>Admin</h1>
			{/* <AdminDestinationForm/> */}
		
			<Link to={"/admin/destination"}>Tous les destinations</Link>
		</>
	);
};

export default AdminHomePage;
