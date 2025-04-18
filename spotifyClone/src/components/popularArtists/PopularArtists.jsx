import React from 'react'
import './PopularArtists.css'
import ArtistCard from '../artistCard/ArtistCard'
const PopularArtists = () => {
  return (
    <div className='popularArtistsMainContainer'>
        Popular Artists
        <ArtistCard/>
    </div>
  )
}

export default PopularArtists