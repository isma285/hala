import {createContext, useState } from "react";


// créer un contexte : support de donnes
const ClientContext = createContext();
// créer un provider : composant associé à un contexte 
const ClientProvider = ({children}) => {
// value : permet de définir les donnes associées au Provider
    const [client,setClient] = useState();


    return <ClientContext.Provider value={ {client, setClient} }>
        {children}
    </ClientContext.Provider>

}


export {ClientContext, ClientProvider }