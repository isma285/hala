import React from "react";
import "./Offres.css";
import { Link } from "react-router-dom";


export const Offres = () => {

	// const [offres, setOffres] = useState([]);
	// // éxucuter la requete HTTP au premier affichage du composant
	// useEffect(() => {
	// 	// récuperer les destinations à partir  de l'API
	// 	getOffresByDestinations().then((values) => getOffresByDestinations(values.data));
	// }, []);


// je rajoute le id des payes de 1=>7 


	return (

		
		<section className="block">
			<p className="paragraph">
				Bienvenue chez Hala Voyage, votre passerelle vers une aventure sans
				souci et des découvertes inoubliables. Chez Hala Voyage, nous avons
				consacré notre expertise à la création de voyages organisés
				exceptionnels, conçus pour vous offrir des expériences de voyage
				enrichissantes et sans tracas.
			</p>
			<h2>Les meilleures offres </h2>

			<div className="list-cards">
				
				<Link to={"/offres/pays/1"}>
					<article className="card">
						<img src="/Tailande.jpg" alt="" />

						<div className="footercard">
							<h3>Thaïlande</h3>
						</div>
					</article>
				</Link>
	
	
				<Link to={"/offres/pays/2"}>
				<article className="card">

						<img src="/maldives2.png" alt="" />
					
					<div className="footercard">
						<a href="../DesCardSuis">
							<h3>Maldives</h3>
							
						</a>
					</div>
				</article>
				</Link>
				<Link to={"/offres/pays/3"}>
				<article className="card">
					
					<img src="/sangapoure.jpg" alt="" />
					<div className="footercard">
						<h3>Singapour</h3>
						
					</div>
				</article>
				</Link>

				<Link to={"/offres/pays/4"}>
				<article className="card">
					
					<img src="/italie.png" alt="" />
					<div className="footercard">
						<h3>Italie</h3>
						
					</div>
				</article>
				</Link>
			</div>
			


			<h2>Les destinations tendances </h2>
			<div className="list-cards">
				 <Link to={"/offres/pays/5"}>

    <article className="card">
      
        <img src="/Dubai.png" alt=""/>
     
      <div className="footercard">
        
          <h3>Dubai</h3>
          {/* <p>Depart de marseille le 22/9/2023</p>
          <p>7nuit/hôtel/pescine </p>
          <p>699,99€</p> */}
        
      </div>
    </article>
    </Link>
	<Link to={"/offres/pays/6"}>
	<article className="card">
      <img src="/Andalousie2.png" alt="" />
      <div className="footercard">
        <h3>Indonésie</h3>
      
        
      </div>
    </article>
	</Link>
	<Link to={"/offres/pays/7"}>

	<article className="card">
      <img src="/Grèce.png" alt="" />
      <div className="footercard">
        <h3>Grèce</h3>
        {/* <p>Depart de marseille le 22/9/2023</p>
        <p>7nuit/hôtel/pescine </p>
        <p>699,99€</p> */}
        
      </div>
    </article>
	</Link>
	</div>
		</section>

	);
}


export default Offres;
