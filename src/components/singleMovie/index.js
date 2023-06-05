export default function SingleMovie(k) {
    const {poster, year, runtime, title, plot, imdb_rating, genres, awards, director, writer, actors, images} = movie;
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

        return k.data.map(function(movie) {
            // const {poster, year, runtime, title, plot, imdb_rating, genres, awards, director, writer, actors, images} = movie;
            return (
                <div class="single-movie">
                    <div class="container">
                        <div class="single-movie-wrapper">
                            <div class="image">
                                <img src={poster} />
                            </div>
                            <div class="info">
                                <p class="p-big white">{year}</p>
                                <div class="run-time">
                                    <i class="fa-regular fa-clock-three"></i>
                                    <p class="p-big white">{runtime}</p>
                                </div>
                                <h1 class="title-single">{title}</h1>
                                <p class="p-big plot white">{plot}</p>
                                <div class="info-down">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    // function renderSnippets(snippets) {
    //     const {id} =snippets;
    //     return snippets.map(function(snippet) {
    //         return (
    //             <li key={id}>
    //                 <img src={snippet} />
    //             </li>
    //         )
    //     })
    // }
    // return (
    //     <div class="single-movie">
    //         <ul>{timeLoop()}</ul>
    //     </div>
    // )
}