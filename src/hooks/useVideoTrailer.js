import React from 'react'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utilis/movieSlice'
const useVideoTrailer = (movieId) => {
    const dispatch = useDispatch()
    // fetch trailer video and updating the store with trailer video data.
    const getMovieVideos = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",API_OPTIONS)
      const json = await data.json()
      console.log(data)
      
      const filterData = json.results?.filter(video => video.type == "Trailer") ;
      const trailer = filterData?.length ? filterData[0]: json?.results[0]
      dispatch(addTrailerVideo(trailer))
      
    }
    
    useEffect(()=>{
         getMovieVideos()
    },[])
}

export default useVideoTrailer