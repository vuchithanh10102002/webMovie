import React, { useEffect, useState } from 'react';
import { Film } from '../../Model/Film';
import { useParams } from 'react-router-dom';
import { getDetail } from './Service';
import './Detail.css';
import StorageIcon from '@mui/icons-material/Storage';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import favoriteApi from '../../api/favoriteApi';
import { addFavorite } from '../../redux/userSlice';

const listIcon = [
  <FavoriteIcon sx={{ color: 'white' }} />,
]
function DetailIndex() {
  const { id } = useParams();
  const [film, setFilm] = useState<Film>(new Film());
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  console.log(id);


  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      if (id) {
        try {
          const data: any = await getDetail(id);
          setFilm(data);
        } catch (error) {
          console.log('Error fetching film detail:', error);
        }
      }
    };

    fetchData();
  }, [id]);

  const handleClickFavorites = async () => {
    if (!user) {
      console.log("Please signin");
    }

    const body = {
      user: user.user.user._id,
      mediaId: film.id,
      mediaTitle: film.original_title,
      mediaType: "movie",
      mediaPoster: film.poster_path,
      mediaRate: film.vote_average
    }

    const { response, error }: any = await favoriteApi.add(body);

    if (error) {
      console.log(error);
    }

    if (response) {
      dispatch(addFavorite(response));

    }
  }



  const getTime = (time: number = 0) => {
    var Hours = Math.floor(time / 60)
    var minutes = time % 60
    return Hours + 'h' + minutes + 'm';
  }

  const getRound = (number: number = 0) => {
    return number.toFixed(1);
  }


  return (
    <div>
      <div style={{ height: '100vh', position: 'relative', color: 'white' }}>
        <div
          className='background-image'
          style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w1280${film?.backdrop_path}")` }}

        />
        <div className='detailTag'>
          <div className="imgDetail">
            <img src={`https://image.tmdb.org/t/p/w1280${film?.poster_path}`} alt="" />
          </div>
          <div className='infoDetailTag'>
            <h1>{film?.title}</h1>
            <div className='actions'>
              {listIcon.map(icon => (

                <IconButton sx={{ backgroundColor: 'black', marginRight: 5 }} onClick={handleClickFavorites}>
                  {icon}
                </IconButton>
              ))}
            </div>
            <p><b>Release Date: </b> {film?.realeaseDate}</p>
            <p><b>Running Time: </b> {getTime(film?.runtime)}</p>
            <p><b>Genre: </b> {film?.genres?.map((genre) => genre.name + ', ')}</p>
            <p><b>Overview:</b> {film?.overview}</p>
            <p><b>Rating:</b> {getRound(film?.vote_average)} <StarIcon sx={{ color: 'white', fontSize: 15 }} /></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DetailIndex