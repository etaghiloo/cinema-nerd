import { Link } from "react-router-dom";
import "./style.css";
import Homebackground from "../../Homebackground.jpg";

export default function Join() {
    return (
        <div class="join">
            <div class="background">
                <img src={Homebackground} />
            </div>
            <div class="container">
                <div class="join-wrapper">
                    <div class="text">
                        <h1>Want to Annotate?</h1>
                        <p>Feel like you could provide some greate feedback on movies? Here are the features and benefits of becoming a memeber.</p>
                        <ul>
                            <li>
                                <i class="fa-sharp fa-solid fa-check"></i>
                                <h2>Discuss movies with friends</h2>
                            </li>
                            <li>
                                <i class="fa-sharp fa-solid fa-check"></i>
                                <h2>Build your collection of discussed films</h2>
                            </li>
                            <li>
                                <i class="fa-sharp fa-solid fa-check"></i>
                                <h2>Save your favorite movies</h2>
                            </li>
                        </ul>
                    </div>
                    <div class="create-account">
                        <div class="create-account-up">
                            <div class="name">
                                <input class="first-name" placeholder="FIRST NAME"/>
                                <input class="last-name" placeholder="LAST NAME"/>
                            </div>
                            <div class="email">
                                <input class="email" placeholder="EMAIL ADDRESS"/>
                            </div>
                            <div class="password">
                                <input class="password" placeholder="PASSWORD"/>
                            </div>
                            <div class="password-confirm">
                                <input class="password-confirm" placeholder="CONFIRM PASSWORD"/>
                            </div>
                        </div>
                        <div class="create-account-down">
                            <p>Already a member? <Link>Sign in</Link></p>
                            <button class="create">CREATE ACCOUNT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}