import {GET_LIST_POPULAR_MOVIE, GET_DETAIL_MOVIE} from '../Type/MovieType';
import {axiosGetListPopularMovie, axiosGetDetailMovie} from '../../constant/Axios/MovieAxios';


export const ActionGetListPopularMovie=()=>{
    return dispatch => {
        axiosGetListPopularMovie()
        .then(res=>{
            dispatch({
                type: GET_LIST_POPULAR_MOVIE,
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const ActionGetDetailMovie=()=>{
    return dispatch => {
        axiosGetDetailMovie()
        .then(res=>{
            console.log(res.data);
            dispatch({
                type: GET_DETAIL_MOVIE,
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
