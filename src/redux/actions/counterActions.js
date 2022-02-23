import {DECREASE, INCREASE, RESET} from "../types"

export const increase = () => (dispatch) => {
    dispatch({type : INCREASE})
}

export const decrease = () => (dispatch) => {
    dispatch({type : DECREASE})
}

export const reset = () => (dispatch) => {
    dispatch({type : RESET})
}