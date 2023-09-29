import React from 'react'

export const Tendances = () => {

  return (
    <section className="block">
  <h2>Les destinations tendances </h2>

  <div className="list-cards">

  {/* <Link to={"/offres/pays/4"}> */}

    <article className="card">
      
        <img src="/Dubai.png" alt=""/>
     
      <div className="footercard">
        
          <h3>Dubai</h3>
          {/* <p>Depart de marseille le 22/9/2023</p>
          <p>7nuit/hôtel/pescine </p>
          <p>699,99€</p> */}
        
      </div>
    </article>
    {/* </Link> */}

    <article className="card">
      <img src="/Andalousie2.png" alt="" />
      <div className="footercard">
        <h3>Indonésie</h3>
        {/* <p>Depart de marseille le 22/9/2023</p>
        <p>7nuit/hôtel/pescine </p>
        <p>699,99€</p> */}
        
      </div>
    </article>

    <article className="card">
      <img src="/Grèce.png" alt="" />
      <div className="footercard">
        <h3>Grèce</h3>
        {/* <p>Depart de marseille le 22/9/2023</p>
        <p>7nuit/hôtel/pescine </p>
        <p>699,99€</p> */}
        
      </div>
    </article>

  
  </div>
</section>

  )
}

export default Tendances