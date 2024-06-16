import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'


const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies === null) return 
    const mainMovies = movies[5]
    const {title, overview,imageurl, id} = mainMovies
    // console.log(mainMovies)
  return (
    <div>
        <VideoTitle title = {title} description = {overview} image_url={imageurl}/>
        <VideoBackground movieId = {id}/>
     
    </div>
  )
}

export default MainContainer