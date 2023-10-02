import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../../providers/UserProvider";

const LogoutFrom = () => {
	// accéder a l'utilisateur stocké dans le contexte 
	const {client ,setClient} = useContext(ClientContext);

	const navigate = useNavigate(); 
	// supprimer l'utilisateur 
	useEffect(()=>{
		// supprimer l'utilisateur stocké dans le contexte 
		setClient();
		// message en session 
		window.sessionStorage.setItem('notice', 'You are logout ');
		// redirection
		navigate("/") 


	});
	return <></>;
};

export default LogoutFrom;
