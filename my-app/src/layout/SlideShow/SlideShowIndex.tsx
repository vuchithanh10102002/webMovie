import React, { useState, useRef } from "react";
import { useEffect } from 'react';
import 'react-slideshow-image/dist/styles.css'
import "./SlideShow.css";
import { Film } from '../../Model/Film';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

type SwiperRef = {
    swiper: SwiperCore | null;
};

SwiperCore.use([Navigation, Pagination, Autoplay]);
export default function SlideShow() {
    const [films, setFilm] = useState<Array<Film>>([]);
    useEffect(
        () => {
            fetch('https://api.themoviedb.org/3/movie/297762/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')
                // fetch('https://api.themoviedb.org/3/movie/popular?api_key=802cb5f8eebd0f41daddfffbbe9d2f45')
                .then(response => response.json())
                .then(films => {
                    setFilm(films.results);
                })
        }, [])

    const swiperRef = useRef<SwiperRef>({ swiper: null });

    const goNext = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = { swiper };
                }}
                spaceBetween={30}
                centeredSlides
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                className="bg_sl"
            >
                {films.map((film) => (
                    <SwiperSlide key={film?.id}>
                        <div
                            className="swiper-slide"
                            style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w1280${film?.backdrop_path}")` }}
                        />
                        <div className="swiper-slide-caption info_slide">
                            <h2>{film?.title}</h2>
                            <p className="overview">{film?.overview}</p>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
            <div className="slideshow-buttons">
                    <IconButton className="prev-button" onClick={goPrev} sx={{ backgroundColor: 'black' }}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton className="next-button" onClick={goNext} sx={{ backgroundColor: 'black' }}>
                        <ArrowForwardIosIcon />
                    </IconButton>
            </div>
        </div>
    );
}