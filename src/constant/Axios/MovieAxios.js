import axios from 'axios';
import {ListPopularMovieAPI, DetailMovieAPI} from '../Api/MovieApi';


export const axiosGetListPopularMovie=()=>{
    return axios.get(ListPopularMovieAPI)
}

export const axiosGetDetailMovie=(id)=>{
    return axios.get(DetailMovieAPI(id))
}