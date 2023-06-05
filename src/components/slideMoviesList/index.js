import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import "./style.css";

export default function SlideMoviesList(k) {
  function timeLoop() {
    return k.data.map(function(movie) {
        const {id, poster} = movie;
        return (
            <SwiperSlide>
              <li key={id}>
                  <Link to={`/movies/${id}`}>
                      <img src={poster} />
                  </Link>
              </li>
            </SwiperSlide>
        )
    })
  }
  return (
    <div class="slide-movies-list">
      <div class="container">
        <div class="title-all">
          <div class="title">
            <div class="tri"></div>
            <h1>{k.title}</h1>
          </div>
          <h3><Link to={k.link}>View All  <i class="fa-solid fa-angle-right"></i></Link></h3>
        </div>
        <ul class="swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            {timeLoop()}
          </Swiper>
        </ul>
      </div>
    </div>
  )
}



