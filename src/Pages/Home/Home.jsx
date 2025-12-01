import React from 'react'
import { Hero } from './HomeComponent/Hero'
import { HomeCategory } from './HomeComponent/HomeCategory'
import { PopularProduct } from './HomeComponent/PopularProduct/PopularProduct'
import LatestExculusive from './HomeComponent/LatestExculusive'
import NewProduct from './HomeComponent/NewProduct'
import Collection from './HomeComponent/Collection'
import Support from './HomeComponent/Support'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeCategory/>
      <PopularProduct/>
      <LatestExculusive></LatestExculusive>
      <NewProduct></NewProduct>
      <Collection></Collection>
      <Support></Support>
    </div>
  )
}
