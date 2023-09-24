import React from "react";
import "./SeConnecter.css";
function SeConnecter() {
	return (
		<>
			<section>
				<form>
					<div className="email">
                        <h3>Se connecter</h3>
						<label for="email">Email</label>
						<input
							className="inputemail"
							type="email"
							pattern=".@globex.com"
							maxLength="30"
							required
						/>
						<label for="password">Mot de passe</label>
						<input
							className="inputemail"
							type="password"
							maxlength="15"
							required
						/><input type="submit" className="button" value="Se connecter" />
                        <p>Vous n'avez pas de compte ?</p>
                        <a href="/inscription">S'inscrire</a>
					</div>
					
				</form>
			</section>
		</>
	);
}

export default SeConnecter;
