import "../css/Favorites.css"
import {useMovieContext} from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard";
function Favorites(){
    const {favorites} =useMovieContext();
    if(favorites){
        return (<div className="movie-grid">
        {favorites.map((movie) => (
            (<MovieCard movie={movie} key={movie.id} />)
        ))}
      </div>)
    }
    return(
        <div className="favorite-empty">
            <p>Empty Page</p>
        </div>
    );
}

export default Favorites;