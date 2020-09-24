import React from "react";
import {combineReducers, createStore} from "redux";
import {RootStateType} from "../state/store";
import { Provider } from "react-redux";
import {loadingReducer} from "../state/loadingReducer";
import themeChangerReducer from "../state/themeChangerReducer";


const RootReducer = combineReducers({
    juniorPage: loadingReducer,
    juniorPlusPage: themeChangerReducer
})

export const store = createStore(RootReducer)

const initialGlobalState = {
    juniorPage: {
        loading: false
    },
    juniorPlusPage: {
        color: 'jet',
    }
}

export const storyBookStore = createStore(RootReducer, initialGlobalState as RootStateType);

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>)