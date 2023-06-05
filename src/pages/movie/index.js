import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
// import SingleMovie from "../../components/singleMovie";
import Footer from "../../components/footer";
import logo from "../../cinema-nerd-logo-white.png";
import runtimeicon from "../../runtimeicon.png";
import "./style.css";

export default function Movie() {
    const {id} = useParams()
    const [movie, setMovie] = useState({});
    const {poster, year, runtime, title, plot, imdb_rating, genres, awards, director, writer, actors, images} = movie;
    function getApi() {
        axios.get(`http://moviesapi.ir/api/v1/movies/${id}`).then(function(response) {
            setMovie(response.data);
        })
    }
    useEffect(function() {
        getApi();
    }, [id]);
    function renderGenres() {
        const { genres = [] } = movie;
        return genres.map(function(genre, i) {
            return (
                <li key={i}>
                    <p class="p-big genre-button">{genre}</p>
                </li>
            )
        })
    }
    function renderSnippets() {
        const { images = [] } = movie;
        return images.map(function(image, i) {
            return (
                <li key={i}>
                    <img src={image} />
                </li>
            )
        })
    }
    return (
        <div class="movie-page">
            <div class="single-movie-relative">
                <Header background={poster} icon={logo} />

                <div class="single-movie">
                    <div class="container">
                        <div class="single-movie-wrapper">
                            <div class="image">
                                <img src={poster} />
                            </div>
                            <div class="info">
                                <p class="p-big white">{year}</p>
                                <div class="run-time">
                                    <img src={runtimeicon} />
                                    <p class="p-big white">{runtime}</p>
                                </div>
                                <h1 class="title-single">{title}</h1>
                                <div class="info-down">
                                    <div class="plot">
                                        <p class="p-big">{plot}</p>
                                    </div>
                                    <div class="rating-wrapper">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" />
                                        <p class="p-bigger">{imdb_rating}</p>
                                    </div>
                                    <ul class="genre">
                                        {renderGenres(genres)}
                                    </ul>
                                    <div class="awards">
                                        <p class="p-big">AWARDS</p>
                                        <p class="p-big">{awards}</p>
                                    </div>
                                    <div class="cast-crew">
                                        <p class="p-big distant">CAST & CREW</p>
                                        <ul>
                                            <div class="dot"></div>
                                            <p class="p-big cast">STARS</p>
                                        </ul>
                                        <ul>
                                            <div class="line"></div>
                                            <p class="p-big">{actors}</p>
                                        </ul>
                                        <ul class="vertical-padding">
                                            <div class="dot"></div>
                                            <p class="p-big cast">DIRECTOR</p>
                                        </ul>
                                        <ul>
                                            <div class="line"></div>
                                            <p class="p-big">{director}</p>
                                        </ul>
                                        <ul class="vertical-padding">
                                            <div class="dot"></div>
                                            <p class="p-big cast">WRITERS</p>
                                        </ul>
                                        <ul>
                                            <div class="line"></div>
                                            <p class="p-big">{writer}</p>
                                        </ul>
                                    </div>
                                    <div class="snippets">
                                        <p class="p-big distant">SNIPPETS</p>
                                        <ul>
                                            {renderSnippets(images)}
                                        </ul>
                                    </div>
                                    <div class="posts">
                                        <p class="p-big distant">RELATED BOG POSTS</p>
                                        <div class="posts-wrapper">
                                            <div class="post01">
                                                <p class="p-big">POST 1</p>
                                            </div>
                                            <div class="post02">
                                                <p class="p-big">POST 2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <SingleMovie data={movie}/> */}
            </div>
            <Footer />
        </div>
    )
}