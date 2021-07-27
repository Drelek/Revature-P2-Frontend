import { ICanvas } from '../models/Canvas'
import { IUser } from "../models/user";

export enum UserAction {
    LOGIN = 'Login',
    LOGOUT = 'Logout',
}

export enum CanvasAction {
    CANVAS = 'CANVAS'
}

export interface ICanvasAction {
    type: CanvasAction,
    payload: {canvas: ICanvas}
}
export interface IUserActions {
    type: UserAction,
    payload: {user?: IUser}
}