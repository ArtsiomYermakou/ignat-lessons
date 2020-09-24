import {ActionType} from "./store";

const SET_LOADING = "SET_LOADING"

export type StateType = {
    loading: boolean
}

const initialState: StateType = {
    loading: false
}

export type setLoadingActionCreator = {
    type: "SET_LOADING"
    loading: boolean
}



export const loadingReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                loading: action.loading
            }
        }
        default:
            return state;
    }
};

export const setLoadingAC = (loading: boolean): setLoadingActionCreator => {
    return {type: "SET_LOADING", loading};
}