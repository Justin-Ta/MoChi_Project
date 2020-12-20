import React,  { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {ActionGetDetailMovie} from '../../Redux/Action/MovieAction';


export default function Detail(props) {
    const state = useSelector(state=> state.MovieReducer);
    const id = props.match.params.id;
    const dispatch= useDispatch();

    console.log(id)
    useEffect(() => {
        dispatch(ActionGetDetailMovie(id))
    }, [dispatch, id])

    return (
        <div>   
            
        </div>
    )
}
