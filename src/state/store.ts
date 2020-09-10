import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loadingReducer";


const RootReducer = combineReducers({
    juniorPage: loadingReducer
})

export const store = createStore(RootReducer);

export type RootStateType = ReturnType<typeof RootReducer>;

