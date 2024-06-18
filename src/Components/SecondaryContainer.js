import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return movies.nowPlayingMovies && (
    <div className='-mt-40 pl-12 relative z-10'>
      <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
      <MovieList title = {"Popular Movies"} movies = {movies.popularMovies}/>
      <MovieList title = {"Top Rated Movies"} movies = {movies.topRatedMovies}/>
      <MovieList title = {"Upcoming Movies"} movies = {movies.upComingMovies}/>
      <MovieList title = {"Horror Movies"} movies = {movies.nowPlayingMovies}/>
      {/* 
        Movielist - Popular
        - MovieCard * n
        Movielist - Trending
        Movielist - Now Playing Movies
        Movielist - Horror Movie



      */}
    </div>
  )
}

export default SecondaryContainer