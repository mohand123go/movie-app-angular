
import { Action } from 'rxjs/internal/scheduler/Action';
import { ADD_MOVIE } from './favoriteMoives.action';

const initialSate = {
    movieCounter: 0,
    moviesList: {}
}

export function favoriteMoviesReducer(state = initialSate, action) {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state
                , movieCounter: action.payload.movieCounter,
                moviesList: action.payload.moviesList
            }
        default:
            return state;
    }
}