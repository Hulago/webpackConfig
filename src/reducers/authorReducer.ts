import * as types from '../actions/actionsTypes';
import initialState from './initalState';
const authorReducer = (state = initialState.authors, action) => {

    switch(action.type) {
        case types.LOAD_AUTHORS_SUCCESS: 
            return action.authors;
        default:
            return state;
    }
};

export default authorReducer;