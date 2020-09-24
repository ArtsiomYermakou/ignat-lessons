import {ActionType} from "./store";

export const CHANGER_THEME = "CHANGER_THEME";

type InitialStateType = {
    color: string
}

let initialState: InitialStateType = {
    color: "blue",
}

export type changerColorTheme = {
    type: "CHANGER_THEME"
    payload: string
}

const themeChangerReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "CHANGER_THEME":{
            return {...state, color: action.payload}
        }
        default:
            return state;
    }

}

export const changerColorTheme = (payload: string): changerColorTheme => {
    return {type: CHANGER_THEME, payload}
}

export default themeChangerReducer;