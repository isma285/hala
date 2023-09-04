import React from 'react'
import "./Offres.css"
function Offres() {
  return (
    <section className="block">
  <h2>Les meilleures offres:</h2>
  <div className="list-cards">
    <article className="card">
      <a href="https://chat.openai.com/">
        <img src="../../../public/suisse.jpg" alt="" />
      </a>
      <div className="footercard">
        <a href="https://chat.openai.com/">
          <h3>Suisse</h3>
          <p>Depart de marseille le 22/9/2023</p>
          <p>7nuit/hôtel/pescine </p>
          <p>699,99€</p>
        </a>
        <a className="reservation" href="#">
          Réservation
        </a>
      </div>
    </article>
    <article className="card">
      <img src="../../../public/sangapoure.jpg" alt="" />
      <div className="footercard">
        <h3>Sngapoure</h3>
        <p>Depart de marseille le 22/9/2023</p>
        <p>7nuit/hôtel/pescine </p>
        <p>699,99€</p>
        <a className="reservation" href="#">
          Réservation
        </a>
      </div>
    </article>
    <article className="card">
      <img src="../../../public/Tailande.jpg" alt="" />
      <div className="footercard">
        <h3>Tailande</h3>
        <p>Depart de marseille le 22/9/2023</p>
        <p>7nuit/hôtel/pescine </p>
        <p>699,99€</p>
        <a className="reservation" href="#">
          Réservation
        </a>
      </div>
    </article>
  </div>
</section>

  )
}

export default Offres