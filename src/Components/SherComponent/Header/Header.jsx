import React from 'react'
import { TopHeader } from './TopHeader'
import { MidHeader } from './MidHeader'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <div>
        <TopHeader></TopHeader>
        <MidHeader></MidHeader>
        <Navbar></Navbar>
    </div>
  )
}
