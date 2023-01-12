import './App.css'
import { getMovieList, searchMovie } from "./api"
import { useEffect, useState } from "react"
import React from 'react'


const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect (() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])
  
  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      const poster_path = movie.poster_path
      const imageUrl = process.env.REACT_APP_BASEIMGURL;
      return(
        <div className="Movie-wrapper" key={i}>
            <div className="Movie-container Movie-tittle">{movie.title}</div>
            <img className="Movie-image" src={`${imageUrl}/${poster_path}`}/>
            <div className="Movie-date">Date Release : {movie.release_date}</div>
            <div className="Movie-rate">Rate : {movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async(q) => {
    if (q.length > 3){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
      // console.log({query:query})
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ling's Movie</h1>
        <input className='Movie-search' placeholder='search...' 
          onChange={({target}) => search(target.value)}
        ></input>
        <div className="Movie-container">
          <PopularMovieList/>
        </div>
      </header>
    </div>
  );
}

export default App;
