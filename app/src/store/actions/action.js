import axios from 'axios';

export const FETCH_DATA ="FETCH_DATA"
export const UPDATE_DOGS ="UPATE_DOGS"




export const getData =()=> dispatch=>{
    dispatch({type: FETCH_DATA});
    axios.get("https://dog.ceo/api/breeds/list/all")
    .then(res=>{
        console.log("data returned", response.data);
        dispatch({type: UPDATE_DOGS, payload: res.data})
    })
    .catch(err=>{
        dispatch({type: FETCH_DATA_FAILURE, payload: 'Error ${err.response.data}
        console.log("data failed to return", err)
    });
}
