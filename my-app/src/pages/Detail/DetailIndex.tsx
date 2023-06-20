import React, { useEffect, useState } from 'react';
import { Film } from '../../Model/Film';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllCasts, getAllGenres, getDetail } from './Service';
import './Detail.css';
import StorageIcon from '@mui/icons-material/Storage';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import favoriteApi from '../../api/favoriteApi';
import { addFavorite, removeFavorite } from '../../redux/userSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Genres } from '../../Model/Genres';
import { Cast } from '../../Model/Cast';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function DetailIndex() {
  const { id } = useParams();
  const [film, setFilm] = useState<Film>(new Film());
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [open, setOpen] = useState(false);
  const [genres, setGenres] = useState<Array<Genres>>([]);
  const [casts, setCasts] = useState<Array<Cast>>([]);
  const navigate = useNavigate();
  const filmFavor = user?.listFavorites?.some((item: any) => item?.idFilm === film?._id);
  const filmFavorite = user?.listFavorites?.find((item: any) => item?.idFilm === film?._id);
  const [genresOfFilm, setGenresOfFilm] = useState<Array<Genres>>([]);
  const [castsOfFilm, setCastsOfFilm] = useState<Array<Cast>>([]);

  const handleClose = () => {
    setOpen(false);
  };



  useEffect(() => {
    const getGenres = async () => {
      try {
        const response: any = await getAllGenres();
        setGenres(response);

      }
      catch (error) {
        console.log(error);
      }
    }
    getGenres();
  }, [])

  useEffect(() => {
    const getCasts = async () => {
      try {
        const response: any = await getAllCasts();
        setCasts(response);

      }
      catch (error) {
        console.log(error);
      }
    }
    getCasts();
  }, [])



  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      if (id) {
        try {
          const data: any = await getDetail(id);
          setFilm(data);
          const genreNames = data.genres.map((obj: any) => {
            const genreObj: any = genres.find((item: any) => item?._id === obj);
            return genreObj
          });
          setGenresOfFilm(genreNames);

          const castName = data.cast.map((obj: any) => {
            const castObj: any = casts.find((item: any) => item?._id === obj);
            return castObj;
          });
          setCastsOfFilm(castName);

        } catch (error) {
          console.log('Error fetching film detail:', error);
        }
      }
    };
    fetchData();
  }, [id]);

  const handleClickFavorites = async () => {
    if (!user.user) {
      setOpen(true);
      console.log("Please signin");
    }


    else {
      const body = {
        user: user?.user.user?._id,
        idFilm: film?._id,
        title: film?.title,
        type: "movie",
        poster: film?.poster_path,
        rate: film?.vote_average,
        status: film?.status
      }

      const { response, error }: any = await favoriteApi.add(body);
      if (response) {
        dispatch(addFavorite(response));
      }
      else {
        console.log(error);
      }
    }

  }

  const handleRemoveFavorite = async (favoriteId?: string) => {
    const { response, error }: any = await favoriteApi.remove({ favoriteId });
    if (response) {
      dispatch(removeFavorite(response));
    }
    else {
      console.log(error);
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
          style={{ backgroundImage: `url("${film?.background}")` }}

        />
        <div className='detailTag'>
          <div className="imgDetail">
            <img src={`${film?.imageUrl}`} alt="" />
          </div>
          <div className='infoDetailTag'>
            <h1>{film?.title}</h1>
            <div className='actions'>
              {
                filmFavor ? <>
                  <IconButton
                    className='iconFavour isFavour'
                    sx={{ backgroundColor: 'black', marginRight: 5 }}
                    onClick={() => handleRemoveFavorite(filmFavorite?._id)}>
                    <FavoriteIcon
                      className={'isFavour'}
                      sx={{ color: 'white' }} />
                  </IconButton>
                </> : <>
                  <IconButton
                    className='iconFavour'
                    sx={{ backgroundColor: 'black', marginRight: 5 }}
                    onClick={handleClickFavorites}>
                    <FavoriteIcon
                      sx={{ color: 'white' }} />
                  </IconButton>
                </>
              }
            </div>
            <p><b>Release Date: </b> {film?.realeaseDate}</p>
            <p><b>Running Time: </b> {getTime(film?.runtime)}</p>
            <p><b>Genre: </b> {genresOfFilm?.map((genre) => genre?.genre + ', ')}</p>
            <p><b>Overview:</b> {film?.overview}</p>
            <p><b>Rating:</b> {getRound(film?.vote_average)} <StarIcon sx={{ color: 'white', fontSize: 15 }} /></p>
          </div>
        </div>
        <h1 style={{ color: 'black', padding: '0 100px' }}>Casts: </h1>
        <div className='casts'>
          {castsOfFilm?.map(cast => (
            <div className='cast-tag'>
              <div className='avatar-cast'>
                {cast?.image ? <>
                  <img src={`${cast?.image}`} alt="" />
                </> : <>

                </>}
              </div>
              <h4>{cast?.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please login first!
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 40 }}>
            <Button onClick={() => navigate('/login')}>Login</Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default DetailIndex