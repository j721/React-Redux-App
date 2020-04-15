import {FETCH_DATA, UPDATE_DOGS} from '../actions';


const  initialState ={
 dogData: [],
 isFetching: false,
 error: ''
}

export const reducer =(state= initialState, action)=>{
    switch(action.type){
        case FETCH_DATA: 
        return{
            ...state, isFetching: true,
            dogData: []
        };

        case UPDATE_DOGS: 
            return{
                ...state,
                dogData: action.payload,
                isFetching: false
            }
        case FETCH_DATA_FAILURE: 
        return{
            ...state, 
            isFetching: false,
            error: action.payload
        }
       default: 
        return state 
    }
}