import Navbar from "../Componants/nav/NavTest/NavTest/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Componants/Footer/Footer";

const AdminLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default AdminLayout;
