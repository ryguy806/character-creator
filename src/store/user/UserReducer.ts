import {
    IUser,
    UserActions,
    IUserActionTypes
} from './UserTypes';

const INITIAL_STATE: IUser = {
    username: undefined,
    userMessage: undefined,
    userType: undefined,
}

export function userReducer(prevState: IUser = INITIAL_STATE, action: IUserActionTypes) {
    switch (action.type) {
        case UserActions.SAVE_USERNAME:
            return {
                ...prevState,
                username: action.payload.username
            }

        case UserActions.SAVE_USER_MESSAGE  :
            return {
                ...prevState,
                userMessage: action.payload.userMessage
            }
        
        case UserActions.SAVE_USER_TYPE  :
            return {
                ...prevState,
                userMessage: action.payload.userType
            }

        default:
            return prevState;
    }
}