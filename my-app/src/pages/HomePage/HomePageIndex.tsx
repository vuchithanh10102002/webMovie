import React, { useEffect, useState } from 'react';
import NavbarIndex from '../../layout/Navbar/NavbarIndex'
import SlideShowIndex from '../../layout/SlideShow/SlideShowIndex'
import './homepage.css';
import { Film } from '../../Model/Film';

function HomePageIndex() {
  const [popular, setPopular] = useState<Array<Film>>([]);
  const [topRated, setTopRated] = useState<Array<Film>>([]);
  const [upComing, setUpComing] = useState<Array<Film>>([]);

  useEffect(
    () => {
      fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=abe684651c0f85fb2222ec901f2f7c25')
        .then(response => response?.json())
        .then(films => {
          setPopular(films?.results);
        })
        .catch(err  => console.log(err))
    }, [])

    useEffect(
      () => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=abe684651c0f85fb2222ec901f2f7c25')
          .then(response => response?.json())
          .then(films => {
            setTopRated(films?.results);
          })
          .catch(err  => console.log(err))
      }, [])

      useEffect(
        () => {
          fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=abe684651c0f85fb2222ec901f2f7c25')
            .then(response => response?.json())
            .then(films => {
              setUpComing(films?.results);
            })
            .catch(err  => console.log(err))
        }, [])

        
  return (
    <>
      <div className='slideShow'>
        <SlideShowIndex />
      </div>
      <div>
        <h3 style={{ padding: '0 100px' }}>Popular</h3>
        <div className='trending'>
          {popular?.map((film, index) => (
            <div key={index} className='filmTag'>
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
        <div className='trending'>
          {topRated?.map((film, index) => (
            <div key={index} className='filmTag'>
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
        <div className='trending'>
          {upComing?.map((film, index) => (
            <div key={index} className='filmTag'>
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