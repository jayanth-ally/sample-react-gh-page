import React, { Component, useEffect, useState } from 'react';

import Poster from '../poster';

import * as http from '../../utils/http';

const MoviesComponent = () => {

  const [movieList,setMovieList] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [loader,setLoader] = useState(true)

  useEffect(()=>{
    http.searchMovies('war').then(movieList => {
      setMovieList(movieList)
      setLoader(false)
    })
  },[])
  
  const onSearchTextChanged = (e) => {
    setSearchText(e.target.value)
  }
  
  const fetchMovies = () => {
    setLoader(true)
    http.searchMovies(searchText).then(movieList => {
      setMovieList(movieList)
      setLoader(false)
      setSearchText("")
    })
  }

  return (<div>
    <div className="App-header">
      <h2>Movies</h2>
    </div>

    <div className="search-bar">
      <input type="text" placeholder="Search Movies..." value={searchText} onChange={(e) => onSearchTextChanged(e)} />
      <button className="search-btn" onClick={fetchMovies}>Search</button>
    </div>
    {loader ? <h1>Loading...</h1> : <div className="movies">
      {movieList.map((movie, i) => {
        return <Poster key={i}
          title={movie.Title}
          year={movie.Year}
          image={movie.Poster}
          imdbID={movie.imdbID}
        />
      })}
    </div>}
  </div>);
}

export default MoviesComponent;
