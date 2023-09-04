import React from 'react'
import Nav from '../Componants/nav/Nav'
import { Outlet } from 'react-router-dom'
import Heder from '../Componants/heder/Heder'
import Offres from '../Componants/offres/Offres'
import Tendances from '../Componants/Tendances/Tendances'
import Promotion from '../Componants/promotion /Promotion'

export const Mainlayout = () => {
  return (
    <>
<Nav/>
<Heder/>
<Offres/>
<Tendances/>
<Promotion/>
<Outlet/>
<footer>footer</footer>
 </> )
}
