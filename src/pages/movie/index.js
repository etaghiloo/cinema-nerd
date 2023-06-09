import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import SingleMovie from "../../components/singleMovie";
import Footer from "../../components/footer";
import logo from "../../cinema-nerd-logo-white.png";
import "./style.css";

export default function Movie() {
    const {id} = useParams()
    const [movie, setMovie] = useState({});
    const {poster} = movie;
    function getApi() {
        axios.get(`http://moviesapi.ir/api/v1/movies/${id}`).then(function(response) {
            setMovie(response.data);
        })
    }
    useEffect(function() {
        getApi();
    }, [id]);
    return (
        <div class="movie-page">
            <div class="single-movie-relative">
                <Header background={poster} icon={logo} />
                <SingleMovie data={movie}/>
            </div>
            <Footer />
        </div>
    )
}