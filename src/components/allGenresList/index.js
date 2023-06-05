import { Link } from "react-router-dom";
import "./style.css";

export default function AllGenresList(k) {
    function timeLoop() {
        return k.data.map(function(genre) {
            const {id, name} = genre;
            return (
                <li key={id}>
                    <h3><Link to={`/genres/${id}`} class="genre-button">{name}</Link></h3>
                </li>
            )
        })
    }
    return (
        <div class="genres">
            <div class="container">
                <div class="title">
                    <div class="tri"></div>
                    <h1>Popular Movie Genres</h1>
                </div>
                <ul>
                    {timeLoop()}
                </ul>
            </div>
        </div>
    )
}