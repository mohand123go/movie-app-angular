import { Action } from "@ngrx/store";

export const INCREASE_COUNTER = "INCREASE_COUNTER"

export class CounterIncrease implements Action {
    readonly type = INCREASE_COUNTER
    constructor(public payload: Number) {

    }

}