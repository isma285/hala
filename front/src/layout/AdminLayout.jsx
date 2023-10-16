import Navbar from "../Componants/nav/NavTest/NavTest/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Componants/Footer/Footer";
import AdminNav from "../Componants/nav/NavTest/NavTest/AdminNav";

const AdminLayout = () => {
	return (
		<>
			<AdminNav />
			<Outlet />
			<Footer />
		</>
	);
};

export default AdminLayout;
