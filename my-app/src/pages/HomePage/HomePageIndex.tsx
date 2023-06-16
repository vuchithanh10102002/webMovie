import React, { useEffect, useState } from 'react';
import SlideShowIndex from '../../layout/SlideShow/SlideShowIndex'
import './homepage.css';
import { Film } from '../../Model/Film';
import { getAllPopular, getAllTopRated, getAllUpComing } from './Service';
import { useNavigate } from 'react-router-dom';

function HomePageIndex() {
  const [popular, setPopular] = useState<Array<Film>>([]);
  const [topRated, setTopRated] = useState<Array<Film>>([]);
  const [upComing, setUpComing] = useState<Array<Film>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPopular = async () => {
      try {
        const response: any = await getAllPopular();
        const films = response?.results;
        setPopular(films);

      }
      catch (error) {
        console.log('Error fetching popular films:', error);
      }
    };

    getPopular();
  }, [])

  useEffect(() => {
    const getTopRated = async () => {
      try {
        const response: any = await getAllTopRated();
        const films = response?.results;
        setTopRated(films);

      }
      catch (error) {
        console.log('Error fetching popular films:', error);
      }
    };

    getTopRated();
  }, [])

  useEffect(() => {
    const getUpComing = async () => {
      try {
        const response: any = await getAllUpComing();
        const films = response?.results;
        setUpComing(films);

      }
      catch (error) {
        console.log('Error fetching popular films:', error);
      }
    };

    getUpComing();
  }, [])

  const handleData = (id: number) => {
    navigate(`/detail/${id}`);
  }

  return (
    <>
      <div className='slideShow'>
        <SlideShowIndex />
      </div>
      <div style={{ padding: '0 90px' }}>
        <h3 style={{ padding: '0 10px' }}>Popular</h3>
        <div className='popular'>
          {popular?.map((film, index) => (
            <div key={index} className='filmTag' onClick={() => handleData(film?.id)}>
              <div className='img'>
                <img src={`https://image.tmdb.org/t/p/w1280${film?.poster_path}`} alt={film?.title} />
              </div>
              <div className='info-films'>
                <span style={{ padding: '10px' }}><b>{film?.title}</b></span>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ padding: '0 100px' }}>Top Rated</h3>
        <div className='popular'>
          {topRated?.map((film, index) => (
            <div key={index} className='filmTag' onClick={() => handleData(film?.id)}>
              <div className='img'>
                <img src={`https://image.tmdb.org/t/p/w1280${film?.poster_path}`} alt={film?.title} />
              </div>
              <div className='info-films'>
                <span style={{ padding: '10px' }}><b>{film?.title}</b></span>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ padding: '0 100px' }}>Up Coming</h3>
        <div className='popular'>
          {upComing?.map((film, index) => (
            <div key={index} className='filmTag' onClick={() => handleData(film?.id)}>
              <div className='img'>
                <img src={`https://image.tmdb.org/t/p/w1280${film?.poster_path}`} alt={film?.title} />
              </div>
              <div className='info-films'>
                <span style={{ padding: '10px' }}><b>{film?.title}</b></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  )
}

export default HomePageIndex