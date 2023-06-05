import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Search() {
    const [result, setResult] = useState([]);
    function onSearch(e) {
        const value = e.target.value;
        axios.get("http://moviesapi.ir/api/v1/movies", { params: { q: value } }).then(function(response) {
            setResult(response.data.data);
        });
    }
    function renderFarm() {
        return result.map(function(movie) {
            const {id, poster, title, year} = movie;
            return (
                <li key={id}>
                    <Link to={`/movies/${id}`}>
                        <img src={poster} />
                        <div class="title-year">
                            <p>{title}</p>
                            <p class="year">{year}</p>
                        </div>
                    </Link>
                </li>
            )
        })
    }
    return (
        <li class="search">
            <div class="search-bar">
                <input type="text" onChange={onSearch}/>
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="result">{renderFarm()}</div>
        </li>
    )
}