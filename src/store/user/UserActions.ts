import {
    IUser,
    UserActions,
    IUserActionTypes,
} from './UserTypes';

export function saveUsername(user: IUser): IUserActionTypes {
    return {
        type: UserActions.SAVE_USERNAME,
        payload: user,
    };
}

export function saveUserMessage(user: IUser): IUserActionTypes {
    return {
        type: UserActions.SAVE_MESSAGE,
        payload: user,
    };
}

export function saveUserType(user: IUser): IUserActionTypes {
    return {
        type: UserActions.SAVE_USERTYPE,
        payload: user,
    };
}