import {
    ICharacter,
    CharacterActions,
    ICharacterActionTypes
} from './CharacterTypes';

export function saveCharacterName(character: ICharacter): ICharacterActionTypes {
    return {
        type: CharacterActions.SET_NAME,
        payload: character,
    }
}

export function saveCharacterRace(character: ICharacter): ICharacterActionTypes {
    return {
        type: CharacterActions.SET_RACE,
        payload: character,
    }
}

export function saveCharacterClass(character: ICharacter): ICharacterActionTypes {
    return {
        type: CharacterActions.SET_CLASS,
        payload: character,
    }
}

export function saveCharacterBackground(character: ICharacter): ICharacterActionTypes {
    return {
        type: CharacterActions.SET_BACKGROUND,
        payload: character,
    }
}
