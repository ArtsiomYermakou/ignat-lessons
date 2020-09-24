import {combineReducers, createStore} from "redux";
import {loadingReducer, setLoadingActionCreator} from "./loadingReducer";
import themeChangerReducer, {changerColorTheme} from "./themeChangerReducer";


const RootReducer = combineReducers({
    juniorPage: loadingReducer,
    juniorPlusPage: themeChangerReducer
})

export type ActionType = setLoadingActionCreator | changerColorTheme

export const store = createStore(RootReducer);

export type RootStateType = ReturnType<typeof RootReducer>;

