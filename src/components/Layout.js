import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar"
const Layout = () => {
  return (
    <>
    <Navbar/>
    <section className='pages'>
      <Outlet/>
    </section>
    </>
  )
}

export default Layout