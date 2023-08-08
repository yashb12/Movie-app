import {useEffect, useState} from "react";

import './App.css';
import MovieCard from "./MovieCard";

// efe1a3d6
const API_URL = 'http://www.omdbapi.com?apikey=efe1a3d6';

const movie1 =
  {
    
      "Title": "Spiderman",
      "Year": "1990",
      "imdbID": "tt0100669",
      "Type": "movie",
      "Poster": "N/A"
}


const App = () => { 

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
      searchMovies('Spiderman')
    }, []);

    const handleSearch = (e) => {
      if(e.key === 'Enter'){
        searchMovies(searchTerm);
      }
    };

    return(
     <div className="app">
      <h1>MovieFlix</h1>

      <div className="search">
        <input
         placeholder="Search movies"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         onKeyPress={handleSearch}
        />
        {/* <img 
         src = {SearchIcon}
         alt = "search"
        onClick={() => searchMovies(searchTerm)}
        /> */}
         </div>

         {
          movies?.length>0
          ?(
            <div className="container">
            {movies.map((movie) => (
             <MovieCard movie = {movie} />
              ) )}
            </div>  
           
          ):(
            <div className="empty">
              <h2> No Movies Found </h2>
            </div>
          )
         }

      
     </div>
    );
  }


export default App;