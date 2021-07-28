import { UserAction, IUserActions } from "./actions";
import { IAppState, initialState } from "./store";


export const reducers = (state: IAppState = initialState,action: IUserActions): IAppState => {
    const newState = {...state};
    switch(action.type) {
        case UserAction.LOGIN:
            return {...newState, ...action.payload};
        case UserAction.LOGOUT:
            return {...state, user: undefined};
        default:
            return newState;
    }
}