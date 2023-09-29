import React, { useContext, useEffect, useState } from "react";
import "./SeConnecter.css";
import { useForm } from "react-hook-form";
import { checkUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";

export const SeConnecter = () => {

	const {
		formState: { errors },
		handleSubmit,
		watch,
		register,
	} = useForm();

	const { user, setUser } = useContext(UserContext);

	const navigate = useNavigate();

	const [message, setMessage] = useState();

	const onSubmit = async (values) => {

		const responseAPI = await checkUser(values);
		if (responseAPI.status === 200) {
			setUser(responseAPI.data);
			window.sessionStorage.setItem("notice", "You are login");
			navigate("/");
		} else {
			setMessage("vous n'êtes pas inscrit ");
			setTimeout(() => setMessage(), 5000);
		}
	};
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
}

export default SeConnecter;
