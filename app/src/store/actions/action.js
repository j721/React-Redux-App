import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"

// export const UPDATE_DOGS = "UPDATE_DOGS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA })
    axios.get("https://dog.ceo/api/breeds/image/random")
        .then(res => {
            console.log("data returned", res.data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log("data failed to return", err)
            dispatch({
                type: ({
                    FETCH_DATA_FAILURE,
                    payload: `Error ${err.res.status}: ${err.res.data}`
                })
            })
        })
}