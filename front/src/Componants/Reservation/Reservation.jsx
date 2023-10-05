import React from 'react'

const Reservation = () => {
  return (
    <section>
    <form>
      <div className="email">
        <h3>Réservation</h3>
      
        <label for="name">Nom </label>

        <input
          className="inputemail"
          type="text"
          name="name"
          required
          maxlength="15"
          size="10"
        />
<label for="name">Prénom </label>

        <input
          className="inputemail"
          type="text"
          name="name"
          required
          maxlength="15"
          size="10"
        />
               <label for="name">Date de naissance</label>

<input
  className="inputemail"
  type="nember"
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

          <label for="name">Numéro de téléphone </label>

        <input
          className="inputemail"
          type="nember"
          name="name"
          required
          maxlength="15"
          size="10"
        />	

        <input type="submit" className="button" value="suivant" />
      </div>
    </form>
  </section>
  )
}

export default Reservation