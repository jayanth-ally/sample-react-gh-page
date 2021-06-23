import React, { Component } from 'react';

import Poster from './components/poster';
import ProductCard from './components/productCard';
import Counter from './components/counter';

import { searchMovies } from './utils/http';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieList:[],
      searchText:"",
      loader:true
     }
  }

  componentDidMount(){
    searchMovies('war').then(movieList => {
      this.setState({movieList,loader:false})
    })
  }

  onSearchTextChanged = (e) => {
    this.setState({searchText:e.target.value});
  }

  fetchMovies = () => {
    this.setState({loader:true})
    searchMovies(this.state.searchText).then(movieList => {
      this.setState({movieList,loader:false,searchText:""})
    })
  }

  render() { 
    const {movieList,loader,searchText} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Movies</h2>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search Movies..." value={searchText} onChange={(e)=>this.onSearchTextChanged(e)}/>
          <button className="search-btn" onClick={this.fetchMovies}>Search</button>
        </div>
      {loader ?  <h1>Loading...</h1> : <div className="movies">
      {movieList.map((movie,i)=>{
        return <Poster key={i}
            title={movie.Title}
            year={movie.Year}
            image={movie.Poster}
            imdbID={movie.imdbID}
        />
      })}
    </div>}
    </div>
      
    );
  }
}
 
export default App;
