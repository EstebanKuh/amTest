import { CharacterInfo } from './models';

export interface FilterProp {
    filter: string
}

export interface CardCharacterProp {
    character: CharacterInfo,
    actionDeleteCharacter: (character: CharacterInfo) => void
}