import { Link } from "react-router-dom";
import Search from "../search";
import "./style.css";

export default function Header(props) {
    return (
        <div class="header">
            <div class="background">
                <img src={props.background} />
            </div>
            <div class="container">
                <div class="menu">
                    <ul class="menu-left">
                        <li class="icon">
                            <Link to={`/`}>
                                <img src={props.icon} />
                            </Link>
                        </li>
                        <li class="movies"><h2 class="movies"><Link to={`/movies`}>MOVIES</Link></h2></li>
                        <li class="series"><h2 class="series"><Link to={`/series`}>SERIES</Link></h2></li>
                    </ul>
                    <ul class="menu-right">
                        <li class="blog"><h2 class="blog"><Link to={`/blog`}>BLOG</Link></h2></li>
                        <Search />
                    </ul>
                </div>
                <div class="logo">
                    <img src={props.logo} />
                </div>
                <div class="content">
                    <div class="text01">
                        <h1>{props.text01}</h1>
                    </div>
                    <div class="text02">
                        <p>{props.text02}</p>
                    </div>
                    <div class="text-name">
                        <h1>{props.text03}</h1>
                    </div>
                    <div class="text-plot-rating">
                        <div class="left-line"></div>
                        <div class="text">
                            <h3>{props.text04}</h3>
                            <div class="text-rating">
                                <img src={props.ratingIcon} />
                                <h2>{props.text05}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}