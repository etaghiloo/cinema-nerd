import runtimeicon from "../../runtimeicon.png";

export default function SingleMovie(k) {
    const {data} = k;
    function renderGenres(genres = []) {
        return genres.map(function(genre, i) {
            return (
                <li key={i}>
                    <p class="p-big genre-button">{genre}</p>
                </li>
            )
        })
    }
    function renderSnippets(images = []) {
        return images.map(function(image, i) {
            return (
                <li key={i}>
                    <img src={image} />
                </li>
            )
        })
    }
    return (
        <div class="single-movie">
            <div class="container">
                <div class="single-movie-wrapper">
                    <div class="image">
                        <img src={data.poster} />
                    </div>
                    <div class="info">
                        <p class="p-big white">{data.year}</p>
                        <div class="run-time">
                            <img src={runtimeicon} />
                            <p class="p-big white">{data.runtime}</p>
                        </div>
                        <h1 class="title-single">{data.title}</h1>
                        <div class="info-down">
                            <div class="plot">
                                <p class="p-big">{data.plot}</p>
                            </div>
                            <div class="rating-wrapper">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" />
                                <p class="p-bigger">{data.imdb_rating}</p>
                            </div>
                            <ul class="genre">
                                {renderGenres(data.genres)}
                            </ul>
                            <div class="awards">
                                <p class="p-big">AWARDS</p>
                                <p class="p-big">{data.awards}</p>
                            </div>
                            <div class="cast-crew">
                                <p class="p-big distant">CAST & CREW</p>
                                <ul>
                                    <div class="dot"></div>
                                    <p class="p-big cast">STARS</p>
                                </ul>
                                <ul>
                                    <div class="line"></div>
                                    <p class="p-big">{data.actors}</p>
                                </ul>
                                <ul class="vertical-padding">
                                    <div class="dot"></div>
                                    <p class="p-big cast">DIRECTOR</p>
                                </ul>
                                <ul>
                                    <div class="line"></div>
                                    <p class="p-big">{data.director}</p>
                                </ul>
                                <ul class="vertical-padding">
                                    <div class="dot"></div>
                                    <p class="p-big cast">WRITERS</p>
                                </ul>
                                <ul>
                                    <div class="line"></div>
                                    <p class="p-big">{data.writer}</p>
                                </ul>
                            </div>
                            <div class="snippets">
                                <p class="p-big distant">SNIPPETS</p>
                                <ul>
                                    {renderSnippets(data.images)}
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
    )
}