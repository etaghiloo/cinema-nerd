import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import Homebackground from "../../Homebackground.jpg";
import logo from "../../cinema-nerd-logo-white.png";
import SingleGenreList from "../../components/singleGenreList";
import Footer from "../../components/footer";


export default function Genre() {
    const {genreId} = useParams();
    const [genre, setGenre] = useState([]);
    function getApi() {
        axios.get(`http://moviesapi.ir/api/v1/genres/${genreId}/movies`).then(function(response) {
            setGenre(response.data.data);
        })
    }
    useEffect(function() {
        getApi();
    }, []);
    return (
        <div class="genre-page">
            <Header icon={logo} background={Homebackground} text03={genreId} />
            <div class="single-genre-list">
                <div class="container">
                    {/* <h1 class="genre-button">{genreId}</h1> */}
                    <SingleGenreList data={genre} />
                </div>
            </div>
            <Footer />
        </div>
    )
}