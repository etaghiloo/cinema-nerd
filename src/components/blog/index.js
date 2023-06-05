import { Link } from "react-router-dom";
import lost4 from "../../lost4.jpg";
import blue2 from "../../blue2.jpg";
import "./style.css";

export default function Blog() {
    return (
        <div class="blog-review">
            <div class="container">
                <div class="title">
                    <div class="tri"></div>
                    <h1>Blog & Rewiews</h1>
                </div>
                <div class="blog-wrapper">
                    <div class="article12">
                        <div class="article1">
                            <h2>12 Angry Men</h2>
                            <p>/  A courtroom drama</p>
                        </div>
                        <div class="article2">
                            <h2>Jérémy Clapin’s “I Lost My Body”</h2>
                            <p>/  A visually sumptuous slice of macabre storytelling that works best when it uses its director’s magical sense of composition.</p>
                        </div>
                    </div>
                    <div class="article2-image">
                        <img src={lost4} />
                    </div>
                    <div class="article3">
                        <h2>The Pale Blue Eye</h2>
                        <p>/  Adapted from a novel by Louis Bayard, “The Pale Blue Eye” is one of those mysteries that features a limited cast of characters.</p>
                    </div>
                    <div class="explore">
                        <h2>EXplore the <Link to={`/blog`}>blog</Link></h2>
                        <h2>&</h2>
                        <h3>write reviws!</h3>
                    </div>
                </div>
                <div class="blog-wrapper">
                    <div class="article4">
                        <h2>The Game</h2>
                        <p>/  written by John Brancato and Michael Ferris, "The Game" is David Fincher's first film since "Seven," and projects the same sense of events being controlled by invisible manipulation. This time, though, there's an additional element: Van Orton is being broken down and reassembled like the victim of some cosmic EST program. And it is unclear, to him and to us, whether the Game is on the level of a fraud, or perhaps spinning out of control.</p>
                    </div>
                    <div class="article3-image">
                        <img src={blue2} />
                    </div>
                </div>
            </div>
        </div>
    )
}