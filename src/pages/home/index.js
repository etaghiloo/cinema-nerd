import { useEffect,useState } from "react";
import axios from "axios";
import Header from "../../components/header";
import Homebackground from "../../Homebackground.jpg";
import logo from "../../cinema-nerd-logo-white.png";
import SlideMoviesList from "../../components/slideMoviesList";
import Blog from "../../components/blog";
import Join from "../../components/join";
import Footer from "../../components/footer";

export default function Home() {
    const [movies, setMovies] = useState([]);
    function getApi() {
        axios.get("http://moviesapi.ir/api/v1/movies").then(function(response) {
            setMovies(response.data.data);
        })
    }

    useEffect(function() {
        getApi();
    }, []);

    return (
        <div class="home-page">
            <Header background={Homebackground} icon={logo} logo={logo} text01="CINEMA NERD" text02="Browse Through Our Collection of Movies and Series! " />
            <SlideMoviesList data={movies} title="Popular Movies" link={`/movies`}/>
            <SlideMoviesList data={movies} title="Popular Series" link={`/series`}/>
            <Blog />
            <Join />
            <Footer />
        </div>
    )
}