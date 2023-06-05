import Header404 from "../../components/header404";
import Homebackground from "../../Homebackground.jpg";
import logo404 from "../../logo404.png";
import Footer from "../../components/footer";
import "./style.css";

export default function NotFound() {
    return (
        <div class="not-found-page">
            <Header404 background={Homebackground} logo={logo404} text01="Oops, Page Not Found." text02="try one of the links below instead." />
            <div class="lost-strip"></div>
            <Footer />
        </div>
    )
}