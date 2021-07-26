import { IUser } from "../models/user";

export enum UserAction {
    LOGIN = 'Login',
    LOGOUT = 'logout'
}

export interface IUserActions {
    type: UserAction,
    payload: {user?: IUser}
}