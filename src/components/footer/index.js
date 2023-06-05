import { Link } from "react-router-dom";
import "./style.css";

export default function Footer() {
    return (
        <div class="footer">
            <div class="container">
                <div class="footer-up">
                    <h3><Link to={`/movies`}>MOVIES</Link></h3>
                    <span>|</span>
                    <h3><Link to={`/series`}>SERIES</Link></h3>
                    <span>|</span>
                    <h3><Link to={`/`}>HOME</Link></h3>
                    <span>|</span>
                    <h3><Link to={`/blog`}>BLOG</Link></h3>
                    <span>|</span>
                    <h3><Link to={`/signIn`}>JOIN US!</Link></h3>
                </div>
                <div class="footer-down">
                    <Link to={`/???`}>
                        <i class="fa-solid fa-paper-plane"></i>
                    </Link>
                    <Link to={`/???`}>
                        <i class="fa-brands fa-instagram"></i>
                    </Link>
                    <Link to={`/???`}>
                        <i class="fa-brands fa-twitter"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}