import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../Components/SherComponent/Header/Header'
import { Footer } from '../Components/SherComponent/Footer/Footer'

export const Root = () => {
  return (
   <div>
    <Header></Header>
   <Outlet></Outlet>
   <Footer></Footer>
   </div>
  )
}
