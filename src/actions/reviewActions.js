import actionTypes from '../constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';


function reviewSet(transaction){
    return {
        type: actionTypes.SET_REVIEW,
        transactions: transaction
    }
}


export function setReview(Transaction) {
    return dispatch => {
        dispatch(reviewSet(Transaction));
    }
}


export function submitReview(data){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/review/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(data),
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {

                dispatch(reviewSet(data));
            })
            .catch( (e) => console.log(e) );
    }
}
