import React, {useEffect} from 'react';
import {getData} from "../actions";
import DogCard from './DogCard';

import {useSelector,useDispatch} from 'react-redux';
import { FETCH_DATA } from '../store/actions/action';

const DogList = props=>{

    const dispatch = dispatch(); 

    const cards= useSelector {(state=>state.cards)}
    const isFetching = useSelector(state =>state.isFetching)
    const error = useSelector(state=>state.error)

    useEffect(()=>{
       dispatch(fetchMoves{});
    },[FETCH_DATA])

    return(
    <div>
        {isFetching&& <p>Getting Dog pictures ...</p> }
        {cards.map(card =><DogCard card ={card}/>}
        {error && <p>Error loading {error}</p>}
  </div>
    )
}

export default DogList; 