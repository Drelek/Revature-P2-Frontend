import { ICanvas } from '../models/Canvas'
import { IUser } from "../models/User";

export enum AppAction {
    LOGIN = 'Login',
    LOGOUT = 'Logout',
    UPDATE_USER = 'Update User',
    TOGGLE_CANVAS = 'Toggle Background Animation'
}

export interface IAppActions {
    type: AppAction,
    payload?: {
        user?: IUser,
        auth?: any
    }
}