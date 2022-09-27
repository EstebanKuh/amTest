import { CharacterInfo } from './models';

export interface FilterProp {
    filter: string
}

export interface CardCharacterProp {
    listFavs: CharacterInfo[],
    character: CharacterInfo,
    actionDeleteCharacter: (character: CharacterInfo) => void
    addFavorite: (character: CharacterInfo) => void
}