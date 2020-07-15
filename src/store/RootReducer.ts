import { combineReducers, Reducer } from 'redux';
import { IUser } from "./user/UserTypes";
import { userReducer } from './user/UserReducer';
import { ICharacter } from './character/CharacterTypes';
import { characterReducer } from './character/CharacterReducers';

export interface IAppState {
    user: IUser,
    friendsList: string[],
    character: ICharacter,
}

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
    user: userReducer,
    character: characterReducer,
} as any);