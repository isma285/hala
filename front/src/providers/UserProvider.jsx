import {createContext, useState } from "react";


// créer un contexte : support de donnes
const UserContext = createContext();
// créer un provider : composant associé à un contexte 
const UserProvider = ({children}) => {
// value : permet de définir les donnes associées au Provider
    const [user,setUser] = useState();


    return <UserContext.Provider value={ {user, setUser} }>
        {children}
    </UserContext.Provider>

}


export {UserContext, UserProvider }