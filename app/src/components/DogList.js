import React, {useEffect} from 'react';
//import action
import {getData} from "../actions/action";

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const DogList = props =>{
    useEffect(()=>{
        //call an action creator
        props.getData();
    },[]);

    return(
        <div>
            <h1>Dog Image Generator</h1>
            {props.isFetching && 
            (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}

            <button onClick ={props.getData}>Fetch Dog Pictures</button>

          
                <h3>Get your dog pictures!</h3>
            
                <div className ="dog-card">
                    <img src ={props.message.message} alt ="random dog breed"/>
                </div>

                {/* {props.message && !props.isFetching && (
                )}     */}
        </div>
    )
}

//connect function
//mapStateToProps
const mapStateToProps = state =>{
    console.log(state);
    return{
        isFetching: state.reducer.isFetching,
        message: state.reducer.message,
        error: state.reducer.error
    }
}

export default connect(mapStateToProps, {getData}) (DogList); 