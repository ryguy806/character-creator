export interface ICharacter {
    id: number;
    name: string;
    race: IRace;
    class: IClass;
    background: IBackground;
}

interface IRace {
    raceId: number;
    subRace?: number;
    bonuses: number[];
    speed: number;
    extraLanguages: number;
    languages: number[];
    raceFeatures: IRaceFeature[];
    bonusWeaponProfs?: number[]; 
}

interface IClass {
    classId: number
    name: string;
    subClass: ISubClass;
    classFeatures: IClassFeatures[];
    armorProfs: number[];
    weaponProfs: IClassWeaponProfs;
    ClassProfs: IClassProf;
    savingThrows: number[];
    hitDice: number;
    hpIncreasePerLevel: number;
    equipChoices: IEquipmentChoice[];
    fixedEquipment?: IEquipment[];
    spellCasting?: ISpellCasting;
}


interface IRaceFeature {
    name: string;
}

interface ISubClass {
    levelAchieved: number;
    name: string;
    archetypeFeatures: IArchetypeFeat[];
}

interface IArchetypeFeat {
    id: number;
    name: string;
}

interface IClassFeatures {
    id: number;
    level: number;
    name: string;
    replaces?: number;
    archetypeId: number;
    
}

interface IClassWeaponProfs {
    categories: number[];
    weapons: number[];
}

interface IClassProf {
    number: number;
    profs: number[];
}

interface IEquipmentChoice {
    id: number;
    choices: IEquipmentChoiceBlock[];
}

interface IEquipment {
    id: number;
    name: string;
    weapon:boolean;
    weaponCategory?: number;
    damage?: number;
    dice?: string;
    melee?: boolean;
    thrown?: boolean;
    light?: boolean;
    twoHanded?: boolean
    ac?: number;
    armorCategory?: number;
}

interface IEquipmentChoiceBlock {
    id: number;
    number: number;
    items: number[];
    extras?: IFixedEquipmentBlock[];
}

interface IFixedEquipmentBlock {
    id: number;
    number?: number;
}

interface ISpellCasting {
    levelAchieved: number;
    requiresSubClass?: number;
    modifier?: number;
    saveDC: number;
    spellTable: ISpellCasterLevel[];
}

interface ISpellCasterLevel{
    level: number;
    SpellSlotsAtLevel: number[];
    spellsKnown?: number;
}

interface IBackground {
    id: number;
    name: string;
    equipment: number[];
    backgroundFeat: string;
    currency: number[];
    languages: number;
    toolProf: number[];
    profs: number[];
    specialty?: IBackgroundSpecialty;
    traits: IPersonalityTrait[];
    ideals: IPersonalityTrait[];
    bonds: IPersonalityTrait[];
    flaws: IPersonalityTrait[];
    toolSelection?: IBackgroundTool;
}

interface IBackgroundSpecialty {
    name: string;
    rolls: IBackgroundSpecialtyRoll[];
}

interface IBackgroundSpecialtyRoll {
    id: number;
    name: string;
}

interface IBackgroundTool {
    id: number;
    name: string;
    itemId: number;
}

interface IPersonalityTrait {
    id: number;
    text: string;
}

export interface IFeat {
    id: number;
    name: string;
    requiredAttribute?: number[];
    minAttriute?: number;
    boostedAttribute?: number[];
    spellCasting?: boolean;
    armorProf?: boolean;  
}

export interface IArmorCategory {
    id: number;
    name: string;
}

export interface IEquipmentCategory {
    id: number;
    name: string;
}

export interface IWeaponCategory {
    id: number;
    name: string;
}

export interface IDamageType {
    id: number;
    name: string;
}

export interface IBackpack {
    id: number;
    contents: IBackpackContent[];
}

interface IBackpackContent {
    id: number;
    name: string;
}

export interface IToolProf {
    id: number;
    name: string;
}

export interface ILanguage {
    id: number;
    name: string;
}

export interface IProciencyLevel {
    level: number;
    bonus: number;
}

export interface IAlignment {
    id: number;
    lawfulChaotic: string;
    goodEvil: string;
}

export interface ISkills {
    id: number;
    attribute: number;
    name: string;
}

export interface IStatBlock {
    id: number;
    name: string;
}

export interface IModifier {
    value: number;
    modifier: number;
}

export interface IExperienceLevel {
    experience: number;
    level: number;
}

export interface ISelectionBlock {
    races: IRace[];
    classes: IClass[];
    backgrounds: IBackground[];
}


export const CharacterActions = {
    SET_NAME: 'SET_NAME',
    SET_RACE: 'SET_RACE',
    SET_CLASS: 'SET_CLASS',
    SET_BACKGROUND: 'SET_BACKGROUND',
}

interface ISetCharacterName { 
    type: typeof CharacterActions.SET_NAME,
    payload: ICharacter,
}

interface ISetCharacterRace { 
    type: typeof CharacterActions.SET_RACE,
    payload: ICharacter,
}

interface ISetCharacterClass { 
    type: typeof CharacterActions.SET_CLASS,
    payload: ICharacter,
}

interface ISetCharacterBackground { 
    type: typeof CharacterActions.SET_BACKGROUND,
    payload: ICharacter,
}

export type IUserActionTypes = 
    ISetCharacterName | 
    ISetCharacterRace |
    ISetCharacterClass |
    ISetCharacterBackground;
