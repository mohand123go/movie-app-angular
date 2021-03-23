import { Action } from '@ngrx/store';

export const ADD_MOVIE = "ADD_MOVIE"
export class FavoriteMoivesAction implements Action {
    readonly type = ADD_MOVIE
    constructor(public payload: {}) { }

}