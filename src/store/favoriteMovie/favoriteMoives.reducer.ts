

import { ADD_MOVIE } from './favoriteMoives.action';

const initialSate = {
    movieCounter: 0,
    moviesList: []
}

export function favoriteMoviesReducer(state = initialSate, action) {
    switch (action.type) {
        case ADD_MOVIE:

            if (state.moviesList.find(movie => movie.id == action.payload.moviesList.id)) {
                return {
                    ...state,
                    movieCounter: action.payload.movieCounter,
                    moviesList: [...state.moviesList]
                }
            } else {
                return {
                    ...state,
                    movieCounter: action.payload.movieCounter + 1,
                    moviesList: [...state.moviesList, action.payload.moviesList]
                }
            }

        default:
            return state;
    }
}