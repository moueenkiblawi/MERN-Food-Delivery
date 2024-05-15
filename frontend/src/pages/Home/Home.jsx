import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Header from '../../components/header/Header'
import './home.css'
import FoodItem from '../../components/foodItem/FoodItem';
import AppDownload from '../../components/AppDownload/AppDownload';

function Home() {
    const [ category,setCategory]= useState('All');

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodItem category={category} />
        <AppDownload/>
    </div>
  )
}

export default Home