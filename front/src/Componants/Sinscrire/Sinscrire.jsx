import "../SeConecter/SeConnecter.css";

function Sinscrire() {
	return (
		<section>
			<form>
				<div className="email">
					<h3>S'inscrire</h3>
					<label for="name">Prénom </label>

					<input
						className="inputemail"
						type="text"
						name="name"
						required
						maxlength="15"
						size="10"
					/>
					<label for="name">Nom </label>

					<input
						className="inputemail"
						type="text"
						name="name"
						required
						maxlength="15"
						size="10"
					/>

					<label for="email">E-mail</label>
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
					/>

					<input type="submit" className="button" value="Se connecter" />
				</div>
			</form>
		</section>
	);
}

export default Sinscrire;
