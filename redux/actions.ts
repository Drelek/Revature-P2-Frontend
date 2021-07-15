import { IUser } from "../models/User";
import axios from 'axios';

export enum ReducerActions {
    FETCH_TOKEN = 'FETCH_TOKEN',
    FETCH_USER = 'FETCH_USER'
}

export interface UserActions {
    type: ReducerActions,
    payload: {
        user?: IUser
    }
}

export  function fetchUser() {
    axios.get('https://26p194s376.execute-api.us-west-2.amazonaws.com/test/user')
        .then(resp => {
            const user = resp.data.user;
            return ({
                type: 'FETCH_USER',
                payload: {
                    user : {user},
                    loginToken: undefined
                }            
            })
        }).catch(error => console.log(error));
        
        return {};
    }