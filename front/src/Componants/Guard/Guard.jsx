import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";
// role est récupéree par la props créer sur le composant dans router.jsx


const Guard = ({ children, role}) => {
	// accéder à l'utilisateur stocké dans un contexte
	const { client, setClient } = useContext(UserContext);
    // hook de la redirection
    const navigate = useNavigate();

	// vérifier l'utilisateur
	useEffect(() => {
    //    si l'utilisateur n'est pas connecté ou si l'utilisateur ne possède pas le rôle requis
    if(!client || client.role !== 'role'){
        window.sessionStorage.setItem('notice','Access denied');
        navigate("/");
    }
    });

	return <>{children}</>;
};

export default Guard;