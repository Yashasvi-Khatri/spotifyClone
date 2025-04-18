import React from 'react'
import './MainSection.css'
import Trending from '../trending/trending'
import PopularArtists from '../popularArtists/PopularArtists'
const MainSection = () => {
  return (
    <main className='mainSection'>
        <Trending />
        <PopularArtists/>
        </main>
  )
}

export default MainSection