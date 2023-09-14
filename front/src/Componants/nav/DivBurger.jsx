import './Nav.css'
import { Link } from "react-router-dom";

const DivBurger = () => {
  return (
    <div className="navlink menu-mobile">
    <ul>
        <li><Link to="/Destinations"><h3>Destination</h3></Link></li>
        <li><Link to="/offre"><h3>Offre</h3></Link></li>
        <li><Link to="/"><h3>Contactez-nous</h3></Link></li>
        <li><Link to="/connexion"><h3>Se connecter</h3></Link></li>
    </ul>
   
</div>
  )
}

export default DivBurger