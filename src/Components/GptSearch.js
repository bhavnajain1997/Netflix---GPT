import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG_URL } from '../utilis/constants'

const GptSearch = () => {
  return (
    <div>
    <div className='absolute '>
    <img src={BG_URL}/>

    </div>
      <GptSearchBar/>
      <GptMoviesSuggestions/>
      {/* 
      - GPT Search Bar
      - GPT Movie Suggestions
      */}
       </div>
  )
}

export default GptSearch