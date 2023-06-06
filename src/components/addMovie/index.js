import Homebackground from "../../Homebackground.jpg";
import "./style.css";

export default function AddMovie() {
    return (
        <div class="add-movie">
            <div class="background">
                <img src={Homebackground} />
            </div>
            <div class="container">
                <div class="add-movie-wrapper">
                    <div class="text">
                        <h1>Want to Contribute?</h1>
                        <p>Looking for a movie and cannot find it? Help us expand our data base! Fill in the movie information box and we'll be looking to add it to our website as soon as possible. ;)</p>
                    </div>
                    <div class="insert-movie-info">
                        <div class="movie-info-up">
                            <div class="movie-title">
                                <input class="title" placeholder="TITLE"/>
                            </div>
                            <div class="id-country bundle">
                                <input class="imdb_id" placeholder="IMDB ID"/>
                                <input class="country" placeholder="COUNTRY"/>
                            </div>
                            <div class="year-director bundle">
                                <input class="year" placeholder="YEAR"/>
                                <input class="director" placeholder="DIRECTOR"/>
                            </div>
                            <div class="rating-votes bundle">
                                <input class="imdb_rating" placeholder="IMDB RATING"/>
                                <input class="imdb_votes" placeholder="IMDB VOTES"/>
                            </div>
                            <div class="poster">
                                <input class="poster" placeholder="POSTER"/>
                            </div>
                        </div>
                        <div class="movie-info-down">
                            <p class="required">required *</p>
                            <span>/</span>
                            <p class="optional">optional *</p>
                            <button class="add">ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}