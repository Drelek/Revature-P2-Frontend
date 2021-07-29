import { IUser } from "../models/User";
import { ICanvas } from "../models/Canvas"

export interface IAppState {
    auth?: any;
    user?: IUser;
    canvas: boolean;
}

export const initialState: IAppState = {
    auth: undefined,
    user: undefined,
    canvas: true
}