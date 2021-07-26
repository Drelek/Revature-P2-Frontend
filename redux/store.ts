import { IUser } from "../models/User";

export interface IAppState {
    user?: IUser;
}

export const initialState: IAppState = {
    user: undefined,
}