import {GET_LIST_POPULAR_MOVIE, GET_DETAIL_MOVIE} from '../Type/MovieType'
const initiaState = {
};

const MovieReducer = (state = initiaState, action) => {
    switch (action.type) {
        case GET_LIST_POPULAR_MOVIE:
        return action.payload;

        case GET_DETAIL_MOVIE:
        return action.payload;
        
        default:
        return state;
    }
}

export default MovieReducer;