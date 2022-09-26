import React from 'react';
import { CardCharacterProp } from '../../types';

const CardCharacter = ({ character, actionDeleteCharacter }: CardCharacterProp) => {

    return (
        <div key={character.id} className='container_character'>
            <div className={`__image ${character.house}`}>
                <img src={character.image} alt="IMG_CHARACTER" />
            </div>

            <div className='__info'>
                <div className='--occuppy'>
                    <span className='-data'>
                        <span>{`${character.alive ? 'vivo' : 'finado'} / `}</span>
                        <span>{`${character.hogwartsStaff ? 'staff' : 'estudiante'}`}</span>
                    </span>
                    <span className='bookmark'>
                        M
                    </span>
                </div>
                <div className='--name'>
                    {character.name}
                </div>
                <div className='--general'>
                    <span>Cumpleaños: </span>
                    {character.dateOfBirth}
                </div>
                <div className='--general'>
                    <span>Género: </span>
                    {character.gender}
                </div>
                <div className='--general'>
                    <span>Color de ojos: </span>
                    {character.eyeColour}
                </div>
                <div className='--general'>
                    <span>Color de pelo: </span>
                    {character.hairColour}
                </div>
            </div>
            <button onClick={() => actionDeleteCharacter(character)}>Eliminar Personaje</button>
        </div>
    )
}

export default CardCharacter