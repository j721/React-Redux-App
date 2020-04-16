import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../actions';


const  initialState ={
 message: '',
 isFetching: false,
 error: ''
}

export const reducer =(state= initialState, action)=>{
    switch(action.type){
        case FETCH_DATA: 
        return{
            ...state, isFetching: true
        };

        case FETCH_DATA_SUCCESS: 
            return{
                ...state,
                message: action.payload,
                isFetching: false
            }
        case FETCH_DATA_FAILURE: 
        return{
            ...state, 
            isFetching: false,
            message: '',
            error: action.payload
        }
       default: 
        return state; 
    }
}