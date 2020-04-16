import React, {useEffect} from 'react';
//import action
import {getData} from "../actions/action";

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';


// import {useSelector,useDispatch} from 'react-redux';


// const DogList = props=>{

//     const dispatch = useDispatch(); 

//     const cards= useSelector {(state=>state.cards)}
//     const isFetching = useSelector(state =>state.isFetching)
//     const error = useSelector(state=>state.error)

//     useEffect(()=>{
//        dispatch(getData());
//     },[getData])

//     return(
//     <div>
//         {isFetching&& <p>Getting Dog pictures ...</p> }
//         {cards.map(card =><DogCard card ={card}/>}
//         {error && <p>Error loading ({error})</p>}
//   </div>
//     )
// }

// export default DogList; 

const DogList = props =>{
    useEffect(()=>{
        //call an action creator
        props.getData();
    },[]);

    return(
        <div>
            <h1>Dog Images</h1>
            <button onClick ={props.getData}>Fetch Dog Pictures</button>
            {!props.message && !props.isFetching && (
                <h3>Get your dog pictures!</h3>
            )}
            {props.isFetching && 
            (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
            {props.message && !props.isFetching &&(
                <div className ="dog-card">
                    <img className ="dog-image" src ={props.message.message} alt ="dogs"/>
                </div>
            )}
        </div>
    )
}

//connect function
//mapStateToProps
const mapStateToProps = state =>{
    console.log(state);
    return{
        isFetching: state.isFetching,
        message: state.message,
        error: state.error
    }
}

export default connect(mapStateToProps, {getData}) (DogList); 