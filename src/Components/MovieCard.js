import React from 'react'
import { IMG_CDN_URL } from '../utilis/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard