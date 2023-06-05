import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import sampleMovie from "../../sampleMovie.jpg"
import AllGenresList from "../../components/allGenresList";
import MoviesList from "../../components/moviesList";
import Footer from "../../components/footer";
import logo from "../../cinema-nerd-logo-white.png";
import ratingIcon from "../../imdb.png";
import "./style.css";

export default function Movies() {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    function getApiGenres() {
        axios.get("http://moviesapi.ir/api/v1/genres").then(function(response) {
            setGenres(response.data);
        })
    }
    function getApi() {
        axios.get("http://moviesapi.ir/api/v1/movies").then(function(response) {
            setMovies(response.data.data);
        })
    }
    useEffect(function() {
        getApiGenres();
    }, []);
    useEffect(function() {
        getApi();
    }, []);
    return (
        <div class="movies-page">
            <Header background={sampleMovie} icon={logo} text03="The Prestige" text04="Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate stage illusion." ratingIcon={ratingIcon} text05="8.5"/>
            <AllGenresList data={genres} />
            <MoviesList data={movies} />
            <Footer />
        </div>
    )
}