import React from 'react'
import "./Offres.css"
import { Link } from 'react-router-dom'

function Offres() {
  return (
    <section className="block">
      <p className='paragraph'>Bienvenue chez Hala Voyage, votre passerelle vers une aventure sans souci et des découvertes inoubliables. Chez Hala Voyage, nous avons consacré notre expertise à la création de voyages organisés exceptionnels, conçus pour vous offrir des expériences de voyage enrichissantes et sans tracas.</p>
  <h2>Les meilleures offres:</h2>
  <div className="list-cards">

 <article className="card">
 <a href="../../DescriptionCard">
      <img src="../../../public/Tailande.jpg" alt="" /></a>
      <div className="footercard">
      <a href="../DesCard/DesCard.jsx">
        <h3>Thaïlande</h3>
        {/* <p>Depart de marseille le 22/9/2023</p>
        <p>7nuit/hôtel/pescine </p>
        <p>699,99€</p> */}
        </a>
        
      </div>
    </article>
    <article className="card">

      <a href="../../DescriptionCard">
        <img src="../../../public/suisse.jpg" alt="" />
      </a>
      <div className="footercard">
        <a href="../DesCard/DesCard.jsx">
          <h3>Suisse</h3>
          {/* <p>Depart de marseille le 22/9/2023</p>
          <p>7nuit/hôtel/pescine </p>
          <p>699,99€</p> */}
        </a>
       
      </div>
    </article>
    <article className="card">
      <img src="../../../public/sangapoure.jpg" alt="" />
      <div className="footercard">
        <h3>Singapour</h3>
        {/* <p>Depart de marseille le 22/9/2023</p>
        <p>7nuit/hôtel/pescine </p>
        <p>699,99€</p> */}
      
      </div>
    </article>
   
  </div>
</section>

  )
}

export default Offres