import { IUser } from "../models/User";

export enum AppAction {
    LOGIN = 'Login',
    LOGOUT = 'Logout',
    UPDATE_USER = 'Update User',
    TOGGLE_CANVAS = 'Toggle Background Animation',
    TOGGLE_FEED = 'Toggle Global/Follower Feed'
}

export interface IAppActions {
    type: AppAction,
    payload?: {
        user?: IUser,
        auth?: any
    }
}