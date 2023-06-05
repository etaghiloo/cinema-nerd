// import { Link } from "react-router-dom";
// import Search from "../search";
import "./style.css";

export default function Header404(props) {
    return (
        <div class="header">
            <div class="background">
                <img src={props.background} />
            </div>
            <div class="container">
                <div class="logo404">
                    <img src={props.logo} />
                </div>
                <div class="content">
                    <div class="text01">
                        <h1>{props.text01}</h1>
                    </div>
                    <div class="text02">
                        <p>{props.text02}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}