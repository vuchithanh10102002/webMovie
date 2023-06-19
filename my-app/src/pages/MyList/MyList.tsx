import React, { useState, useEffect } from 'react';
import './MyList.css';
import { Film } from '../../Model/Film';
import { getFilms } from './Service';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import favoriteApi from '../../api/favoriteApi'
import { setListFavorite } from '../../redux/userSlice';

function MyList() {
  const [films, setFilms] = useState<Array<Film>>([]);
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    const getFavorite = async (userID?: string) => {
      const { response, error }: any = await favoriteApi.getList({ userID: userID });
      if (response) {
        setFilms(response)
      }
      else {
        console.log(error);
      }
    }
    getFavorite(user.user.user._id);

  }, [])

  const handleData = (idFilm?: string) => {
    navigate(`/detail/${idFilm}`);
  }


  return (
    <div className='myList'>
      <h1>My List Film</h1>
      <div className='myListFilm'>
        {films?.map((film, index) => (
          <div
            key={index}
            className='filmTag'
            onClick={() => handleData(film?.idFilm)}>
            <div className='img'>
              <img src={`${film?.imageUrl}`} alt={film?.title} />
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