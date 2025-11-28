import React from 'react'
import { Hero } from './HomeComponent/Hero'
import { HomeCategory } from './HomeComponent/HomeCategory'
import { PopularProduct } from './HomeComponent/PopularProduct/PopularProduct'
import LatestExculusive from './HomeComponent/LatestExculusive'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeCategory/>
      <PopularProduct/>
      <LatestExculusive></LatestExculusive>
    </div>
  )
}
