import React, { useState, useEffect } from 'react';
import './Genres.css';
import { Film } from '../../Model/Film';
import { getFilms } from './Service';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import genreApi from '../../api/genreApi'

function Genres() {
  const { pathname } = useParams();
  const [films, setFilms] = useState<Array<Film>>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    const getListByGenre = async (genre?: string) => {
      const { response, error }: any = await genreApi.getList({ genreID: genre });
      if (response) {
        setFilms(response)
      }
      else {
        console.log(error);
      }
    }
    getListByGenre(state?.genre?._id);

  }, [state?.genre?._id])


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