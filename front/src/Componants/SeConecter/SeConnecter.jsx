import React, { useContext, useEffect, useState } from "react";
import "./SeConnecter.css";
import { useForm } from "react-hook-form";
import { checkClinet } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../../providers/UserProvider";

export const SeConnecter = () => {


	const {
		formState: { errors },
		handleSubmit,
		watch,
		register,
	} = useForm();
// import le contexte de l'utilisateur
	const { clinet, setClient } = useContext(ClientContext);

	const navigate = useNavigate();
// affichage d'un message
	const [message, setMessage] = useState();

// soumission du formulaire
	const onSubmit = async (values) => {
	// appel de la route d'API créant un utilisateur
	// console.log(values);
		const responseAPI = await checkClinet(values);

		// stoker l'utilisateur dans un context
		// console.log(responseAPI);

		if (responseAPI.status === 200) {
			setClient(responseAPI.data);
			window.sessionStorage.setItem("notice", "You are login");
			navigate("/");
		} else {
			setMessage("vous n'êtes pas inscrit ");
			setTimeout(() => setMessage(), 5000);
		}
	};
	// observateur de la saisie

	useEffect(() => {
		const observer = watch((values) => console.log(values));

		return () => observer.unsubscribe();
	}, [watch]);

	return (
		<>
			
			<section>
				<p> {message} </p>
				<form onSubmit={handleSubmit(onSubmit)}>
					
					<div className="email">
                        <h3>Se connecter</h3>
						<label for="email">Email</label>
						{/* utiliser les noms des colonnes sql pour le nom des champs */}

						<input
							className="inputemail"
							type="email"
							// pattern=".@globex.com"
							maxLength="30"
							required
							{...register("email", { required: "Email is required" })}
							
						/>
						<small>{errors.email?.message}</small>

						<label for="password">Mot de passe</label>
						<input
							className="inputemail"
							type="password"
							maxlength="15"
							required 
							{...register("password", { required: "Password is required" })}

						/>
						<small>{errors.password?.message}</small>
						
						<input type="submit" className="button" value="Se connecter" />
                        <p>Vous n'avez pas de compte ?</p>
                        <a href="/inscription">S'inscrire</a>
					</div>
					
				</form>
			</section>
		</>
	);
};

export default SeConnecter;
