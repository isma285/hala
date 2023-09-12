import Styles from './Nav.css'
import { Link } from "react-router-dom";

const DivBurger = () => {
  return (
    <div className="navlink menu-mobile">
    <ul>
        <li><Link to="/"><h3>Destination</h3></Link></li>
        <li><Link to="#"><h3>Offre</h3></Link></li>
        <li><Link to="#"><h3>Bon Plan</h3></Link></li>
        <li><Link to="#"><h3>Contact</h3></Link></li>
    </ul>
   
</div>
  )
}

export default DivBurger