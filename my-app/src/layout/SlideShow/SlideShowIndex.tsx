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
import { getAllFilm } from './Service';
import { useNavigate } from 'react-router-dom';

type SwiperRef = {
    swiper: SwiperCore | null;
};

SwiperCore.use([Navigation, Pagination, Autoplay]);
export default function SlideShow() {
    const [films, setFilm] = useState<Array<Film>>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getAllFilms = async () => {
            try{
                const response:any = await getAllFilm();
                setFilm(response);
            }
            catch (error){
                console.log('Error fetching all films:', error);
            }
        }
        getAllFilms();
    }, []);

    const handleData = (_id?: string) => {
        navigate(`/detail/${_id}`);        
      }    

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
                {films?.map((film) => (                   
                    <SwiperSlide key={film?.id}>
                        <div
                            className="swiper-slide"
                            style={{ backgroundImage: `url("${film?.background}")`, cursor: "pointer" }}
                            onClick={() => handleData(film?._id)}
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