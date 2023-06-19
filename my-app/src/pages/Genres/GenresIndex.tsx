import React, { useState, useEffect } from 'react';
import './Genres.css';
import { Film } from '../../Model/Film';
import { getFilms } from './Service';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

function Genres() {
  const { pathname } = useParams();
  const [films, setFilms] = useState<Array<Film>>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  console.log(state);


  useEffect(() => {
    const getAllFilms = async () => {
      try {
        const response: any = await getFilms();
        const films = response.results;
        setFilms(films);

      }
      catch (error) {
        console.log('Error fetching popular films:', error);
      }
    };

    getAllFilms();
  }, [])

  const handleData = (id: number) => {
    navigate(`/detail/${id}`);
  }


  return (
    <div className='myList'>
      <h1>{state.genre.genre}</h1>
      <div className='myListFilm'>
        {films?.map((film, index) => (
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
  )
}

export default Genres