import React, { Component } from 'react';
import FavouriteList from './components/FavouriteList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      heading: 'The movie store',
      moviesList: [],
      favourites: []
    }
    
  }


  componentDidMount = async () => {

    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e08d15260b80f4fba575a381012e7ce8&language=en-US&page=1`);
    let parsedResponse = await response.json();
    let moviesList = parsedResponse.results;
    
    this.setState({
      moviesList
    })

  }

  setMovieasFavourite = (id) => {

    let movie = this.state.moviesList.find((movie) => movie.id === id);

    this.setState((prevState) => ({
      favourites: [...prevState.favourites, movie]
    }))

  }

  
  render() {
    return (
      <div>
        <h1>
          {this.state.heading}
        </h1>
        
        <ul className='movies-list'>
          { this.state.moviesList.map((movie) => 
          
          <li className='movies-item'> 
            
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} height="200px" width="300px"  />

            <span>{movie.title}</span>
            <button onClick={() => this.setMovieasFavourite(movie.id)} >Add to fav</button>

          </li>

          )  }
        </ul>

        <h2>Favourites</h2>

        <FavouriteList  favourites={this.state.favourites} />

      </div>
    );
  }
}

export default App;