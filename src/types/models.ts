
interface WandInfo {
    wood: string,
    core: string,
    length: number
}

export interface CharacterInfo {
    id: number,
    name: string,
    species: string,
    gender: string,
    house: string,
    dateOfBirth: string,
    yearOfBirth: number,
    ancestry: string,
    eyeColour: string,
    hairColour: string,
    wand: WandInfo,
    patronus: string,
    hogwartsStudent: boolean,
    hogwartsStaff: boolean,
    actor: string,
    alive: boolean,
    image: string
}