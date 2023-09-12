import React from 'react'
// import Nav from '../Componants/nav/Nav'
import Nav from '../Componants/nav/Nav'

import { Outlet } from 'react-router-dom'
import Heder from '../Componants/heder/Heder'
import Offres from '../Componants/offres/Offres'
import Tendances from '../Componants/Tendances/Tendances'


export const Mainlayout = () => {
  return (
    <>
<Nav/>
<Heder/>
<Offres/>
<Tendances/>

<Outlet/>
<footer>footer</footer>
 </> )
}
