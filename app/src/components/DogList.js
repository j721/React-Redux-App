import React, {useEffect} from 'react';
import {fetchData} from "../store/actions/action";

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';


// import {useSelector,useDispatch} from 'react-redux';
import { FETCH_DATA } from '../store/actions/action';

const DogList = props=>{

    const dispatch = useDispatch(); 

    const cards= useSelector {(state=>state.cards)}
    const isFetching = useSelector(state =>state.isFetching)
    const error = useSelector(state=>state.error)

    useEffect(()=>{
       dispatch(getData());
    },[getData])

    return(
    <div>
        {isFetching&& <p>Getting Dog pictures ...</p> }
        {cards.map(card =><DogCard card ={card}/>}
        {error && <p>Error loading ({error})</p>}
  </div>
    )
}

export default DogList; 