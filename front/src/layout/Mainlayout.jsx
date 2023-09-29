import React, { useContext } from 'react'
// import Nav from '../Componants/nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Componants/Footer/Footer'
import Nav from '../Componants/nav/Nav'
import Navbar from '../Componants/nav/NavTest/NavTest/Navbar'
import { UserContext } from '../providers/UserProvider'



export const Mainlayout = () => {
  const { client, setClient  } = useContext(UserContext);

  return (
    <>
    <p>{JSON.stringify(client)}</p>
<Navbar/>


<Outlet/>
<Footer />
 </> )
}
