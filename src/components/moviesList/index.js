import { Link } from "react-router-dom";
import "./style.css";

export default function MoviesList(k) {
    function timeLoop() {
        return k.data.map(function(movie) {
            const {id, poster, title, year, genres, imdb_rating} = movie;
            return (
                <li key={id}>
                    <Link to={`/movies/${id}`}>
                        <div class="box">
                            <img src={poster} />
                            <div class="hover-box">
                                <div class="info up">
                                    <h3>{title}</h3>
                                    <p class="year">{year}</p>
                                </div>
                                <div class="info down">
                                    <ul class="genres-wrap">
                                        {renderGenres(genres)}
                                    </ul>
                                    <div class="rating-wrapper">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" />
                                        <p class="rating">{imdb_rating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
            )
            function renderGenres() {
                const { genres = [] } = movie;
                return genres.map(function(genre, i) {
                    return (
                        <li key={i} class="genre">
                            <p>{genre}</p>
                            <span></span>
                        </li>
                    )
                })
            }
        })
        
    }
    return (
        <div class="movies-list">
            <div class="container">
                <div class="title">
                    <div class="tri"></div>
                    <h1>Movies</h1>
                </div>
                <ul>{timeLoop()}</ul>
            </div>
        </div>
    )
}