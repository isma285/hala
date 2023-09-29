import "../SeConecter/SeConnecter.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { createUser } from "../../services/api";

export const Sinscrire = () => {
	const {
		formState: { errors },
		handleSubmit,
		watch,
		register,
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const responseAPI = await createUser(values);
		window.sessionStorage.setItem("notice", "Account created");
		navigate("/");
	};

	useEffect(() => {
		const observer = watch((values) => console.log(values));

		return () => observer.unsubscribe();
	}, [watch]);

	return (
		<section>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="email">
					<h3>S'inscrire</h3>

					<label htmlFor="name">Nom </label>

					<input
						className="inputemail"
						type="text"
						name="name"
						required
						maxLength="15"
						size="10"
					{...register("lastname", { required: "Lastname is required" })}
					/>
					<small>{errors.lastname?.message}</small>


					<label htmlFor="name">Prénom </label>

					<input
						className="inputemail"
						type="text"
						name="name"
						required
						maxLength="15"
						size="10"
					{...register("firstname", { required: "Firstname is required" })}
					/>
					<small>{errors.firstname?.message}</small>

					<label htmlFor="email">E-mail</label>
					<input
						className="inputemail"
						type="email"
						// pattern=".@globex.com"
						maxLength="30"
						required
						{...register("email", { required: "Email is required" })}
					/>
					<small>{errors.email?.message}</small>

					<label htmlFor="password">Mot de passe</label>
					<input
						className="inputemail"
						type="password"
						maxLength="15"
						required
						{...register("password", { required: "Password is required" })}
					/>
					<small>{errors.password?.message}</small>

					<input type="submit" className="button" value="Se connecter" />
				</div>
			</form>
		</section>
	);
};

export default Sinscrire;
