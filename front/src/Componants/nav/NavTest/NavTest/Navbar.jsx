import { useContext, useState } from "react";
import "./Navbar.css"
import React from 'react'
import { UserContext } from "../../../../providers/UserProvider";
import { Link } from "react-router-dom";


export const Navbar = () => {
  
    const [menu, setmenu] = useState("");
    const { user ,setUser } = useContext(UserContext);
  return (
    <div>
<nav className="navbar">
      <Link to="/" className="logo">
        <img
          src="/Fichier 1.svg"
          alt="logo"
          className="logo-imag"
        />
      </Link>

      <ul className={`navlink ${menu}`}>
        <li className="listnav">
          <Link to="/destinations" className="lienbtn">
            Toutes les offres
          </Link>
        </li>
        <li className="listnav">
          <Link to="/promotions" className="lienbtn">
          Promotions
          </Link>
        </li>
        <li className="listnav">
          <Link to="/contactezNs" className="lienbtn">
          Contactez-nous
          </Link>
        </li>
        <li className="listnav">
          {
            user ? <Link to={"/logout"} >Logout </Link> : 
          <>
          <Link to="/connexion" className="lienbtn">
          Se connecter
          </Link>
          </>
          }

        </li>
        {/* <li><img className="icon-user" src="../../../public/img/menubuttonofthreelines_79781.png" alt="" /></li> */}
    {/* <li className="icon-user"> <AccountCircleIcon/></li> */}
      </ul>
 
      <img
        src="./menu (1).png"
        alt=""
        className="menu-burger"
        onClick={() => {
          setmenu(menu == "" ? "mobile-menu" : "");
        }}
      />
    
    </nav>


    </div>
  )
}

export default Navbar