import React from "react";
import AdminListDestination from "../../../Componants/admin/AdminListDestination";
import { Link } from "react-router-dom";

const AdminDestinationsPage = () => {
	return (
		<div>
			{/* <Link to={"/admin/destination/form"}>Add</Link> */}
			<AdminListDestination />
		</div>
	);
};

export default AdminDestinationsPage;
