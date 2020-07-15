import {
    ICharacter,
    CharacterActions,
    ICharacterActionTypes
} from './CharacterTypes';
import Background from '../../components/character/heading/BackGround';

const INITIAL_STATE: ICharacter = {
    
    id: 0,
    name: '',
    race: {
        raceId: 0,
        bonuses: [],
        speed: 0,
        languages: [],
        extraLanguages: 0,
        raceFeatures: [],

    },
    class: {
        classId: 0,
        name: '',
        subClass: {
            levelAchieved: 0,
            name: '',
            archetypeFeatures: [],
        },
        classFeatures: [],
        armorProfs: [],
        weaponProfs: {
            categories: [],
            weapons: [],
        },
        classProfs: {
            number: 0,
            profs: [],
        },
        savingThrows: [],
        hitDice: 0,
        hpIncreasePerLevel: 0,
        equipChoices: [],

    },
    background: {
        id: 0,
        name: '',
        equipment: [],
        backgroundFeat: '',
        currency: [],
        toolProf: [],
        languages: 0,
        profs: [],
    },
}

export function characterReducer(
    prevState: ICharacter=INITIAL_STATE,
    action: ICharacterActionTypes
    ) {
        switch(action.type) {

            case CharacterActions.SET_NAME:
                return {
                    ...prevState,
                    name: (action.payload as ICharacter).name,
                };
            
            case CharacterActions.SET_RACE:
                return {
                    ...prevState,
                    name: (action.payload as ICharacter).race,
                };
            
            case CharacterActions.SET_CLASS:
                return {
                    ...prevState,
                    name: (action.payload as ICharacter).class,
                };
    
            case CharacterActions.SET_BACKGROUND:
                return {
                    ...prevState,
                    name: (action.payload as ICharacter).background,
                };
    
            default:
                return prevState;
        }
}
