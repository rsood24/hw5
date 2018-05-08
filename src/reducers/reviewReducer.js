import constants from '../constants/actionTypes'

var initialState = {
    review: localStorage.getItem('review') ? localStorage.getItem('review') : ''
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {

        case constants.SET_REVIEW:
            updated['review'] = action.review;
            return updated;


        default:
            return state;
    }
}
