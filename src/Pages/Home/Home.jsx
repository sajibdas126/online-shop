import React from 'react'
import { Hero } from './HomeComponent/Hero'
import { HomeCategory } from './HomeComponent/HomeCategory'
import { PopularProduct } from './HomeComponent/PopularProduct/PopularProduct'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeCategory/>
      <PopularProduct/>
    </div>
  )
}
