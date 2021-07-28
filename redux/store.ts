import { IUser } from "../models/User";
import { ICanvas } from "../models/Canvas"
export interface IAppState {
    user?: IUser,
    canvas: ICanvas;
}

export const initialState: IAppState = {
    user: undefined,
    canvas: true,
}