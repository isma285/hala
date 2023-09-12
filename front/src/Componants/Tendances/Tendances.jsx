import React from 'react'

function Tendances() {
  return (
    <section className="block">
  <h2>Les Destinations tendances: </h2>
  <div className="list-cards">
    <article className="card">
      <a href="https://chat.openai.com/">
        <img src="../../../public/Dubai.png" alt="" />
      </a>
      <div className="footercard">
        <a href="https://chat.openai.com/">
          <h3>Dubai</h3>
          <p>Depart de marseille le 22/9/2023</p>
          <p>7nuit/hôtel/pescine </p>
          <p>699,99€</p>
        </a>
       
      </div>
    </article>

    <article className="card">
      <img src="../../../public/Andalousie2.png" alt="" />
      <div className="footercard">
        <h3>Indonésie</h3>
        <p>Depart de marseille le 22/9/2023</p>
        <p>7nuit/hôtel/pescine </p>
        <p>699,99€</p>
        
      </div>
    </article>

    <article className="card">
      <img src="../../../public/Grèce.png" alt="" />
      <div className="footercard">
        <h3>Grèce</h3>
        <p>Depart de marseille le 22/9/2023</p>
        <p>7nuit/hôtel/pescine </p>
        <p>699,99€</p>
        
      </div>
    </article>

    <article className="card">
      <img src="../../../public/Grèce.png" alt="" />
      <div className="footercard">
        <h3>Grèce</h3>
        <p>Depart de marseille le 22/9/2023</p>
        <p>7nuit/hôtel/pescine </p>
        <p>699,99€</p>
      
      </div>
    </article>
  </div>
</section>

  )
}

export default Tendances