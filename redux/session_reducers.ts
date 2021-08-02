import { combineReducers, createStore } from "redux";
import { AppAction, IAppActions } from "./actions";
import { IAppState, initialState } from "./store";


export const reducers = (state: IAppState = initialState, action: IAppActions): IAppState => {
    const newState = { ...state };
    switch (action.type) {
        case AppAction.LOGIN:
            return { ...newState, ...action.payload };
        case AppAction.LOGOUT:
            return { ...state, user: undefined, auth: undefined };
        case AppAction.UPDATE_USER:
            return { ...state, user: action.payload?.user };
        case AppAction.TOGGLE_CANVAS:
            return { ...state, canvas: !state.canvas };
        case AppAction.TOGGLE_FEED:
            return { ...state, feed: !state.feed };
        default:
            return newState;
    }
}

