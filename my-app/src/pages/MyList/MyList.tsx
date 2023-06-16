import React, { useState, useEffect } from 'react';
import './MyList.css';
import { Film } from '../../Model/Film';
import { getFilms } from './Service';
import { useNavigate } from 'react-router-dom';

function MyList() {
  const [films, setFilms] = useState<Array<Film>>([]);
  const navigate = useNavigate();

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
      <h1>My List Film</h1>
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

export default MyList