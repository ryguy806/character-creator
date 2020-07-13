export interface IUser {
    username: string | undefined;
    userMessage: string | undefined;
    userType: string | undefined;
}

export const UserActions = {
    SAVE_USERNAME: 'SAVE_USERNAME',
    SAVE_USER_MESSAGE: 'SAVE_USER_MESSAGE',
    SAVE_USER_TYPE: 'SAVE_USER_TYPE'
}

interface ISaveUsernameAction {
    type: typeof UserActions.SAVE_USERNAME,
    payload: IUser
}

interface ISaveUserMessageAction {
    type: typeof UserActions.SAVE_USER_MESSAGE,
    payload: IUser
}

interface ISaveUserTypeAction {
    type: typeof UserActions.SAVE_USER_TYPE,
    payload: IUser
}

export type IUserActionTypes = ISaveUsernameAction | ISaveUserMessageAction | ISaveUserTypeAction;