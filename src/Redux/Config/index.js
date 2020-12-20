import { combineReducers } from 'redux';
import MovieReducer from '../Reducer/MovieReducer'
const configStore = combineReducers({
    MovieReducer: MovieReducer
});

export default configStore;