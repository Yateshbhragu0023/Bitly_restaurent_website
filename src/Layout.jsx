import React from 'react'

import Footer from './common/Footer'
import { Outlet } from 'react-router-dom'
import Header from './common/Header'

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
