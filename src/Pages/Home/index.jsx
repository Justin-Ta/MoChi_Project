import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import VideoJs from '../../Components/Video';
import {ActionGetListPopularMovie} from '../../Redux/Action/MovieAction';

export default function Home(props) {
    const state = useSelector(state=> state.MovieReducer.results);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(ActionGetListPopularMovie())
    },[dispatch])

    const renderMovieList=()=>{
        return state?.map((movie, index) => {
          const {id, title, poster_path, release_date, vote_average } = movie;
          return (
            <div key={index} className="movie__item">
              <NavLink className="navlink" to={`/detail/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
              <div className="play__button">
              <i class="fa fa-play"></i>
              </div>
              <div className="item__content">
                <h3 className="item__title">{title}</h3>
                <p>
                  Release date: <span>{release_date}</span>
                </p>
                <p>{vote_average > 7 ? <i class="fa fa-thumbs-up"></i> : <i class="fa fa-thumbs-down"></i>} <span>{vote_average}</span></p>
              </div>
              </NavLink>
            </div>
          );
        });
    }
    return (
      <div className="home__Content">
        <div className="video">
          <VideoJs />
        </div>
        
        <h2>POPULAR MOVIE</h2>
        <div className="container">
          {renderMovieList()}
          </div>
      </div>
    );
}
