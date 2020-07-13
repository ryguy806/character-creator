export interface IUser {
    username: string | undefined;
    userMessage: string | undefined;
    userType: string | undefined
}

export const UserActions = {
    SAVE_USERNAME: 'SAVE_USERNAME',
    SAVE_MESSAGE: 'SAVE_MESSAGE',
    SAVE_USERTYPE: 'SAVE_USERTYPE',
}

interface ISaveUserNameAction {
    type: typeof UserActions.SAVE_USERNAME,
    payload: IUser,
}

interface ISaveUserMessageAction {
    type: typeof UserActions.SAVE_MESSAGE,
    payload: IUser,
}

interface ISaveUserTypeAction {
    type: typeof UserActions.SAVE_USERTYPE,
    payload: IUser,
}

export type IUserActionTypes = ISaveUserNameAction | ISaveUserMessageAction | ISaveUserTypeAction;
