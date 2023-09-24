import React from 'react'
// import Nav from '../Componants/nav/Nav'


import { Outlet } from 'react-router-dom'
import Footer from '../Componants/Footer/Footer'
import Nav from '../Componants/nav/Nav'


export const Mainlayout = () => {
  return (
    <>
<Nav/>


<Outlet/>
<Footer />
 </> )
}
