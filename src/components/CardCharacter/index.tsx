import React from 'react';
import { CardCharacterProp } from '../../types';
import bookmarkIcon from '../../../public/assets/icons/bookmark.svg';

const CardCharacter = ({ character, actionDeleteCharacter }: CardCharacterProp) => {

    return (
        <div key={character.id} className='--container-info'>
            <div className={`__image ${character.house}`}>
                <img src={character.image} alt="IMG_CHARACTER" />
            </div>

            <div className={`__card ${!character.alive ? '-dead' : ''}`}>
                <div className='--head'>
                    <div className='--occuppy'>
                        <span className='-data'>
                            <span>{`${character.alive ? 'vivo' : 'finado'} / `}</span>
                            <span>{`${character.hogwartsStaff ? 'staff' : 'estudiante'}`}</span>
                        </span>
                    </div>
                    <div className='-bookmark'>
                        <img src={bookmarkIcon} alt="bookmark icon" />
                    </div>
                </div>
                <div className='--body'>
                    <p className='--name'>
                        {`${character.alive ? '' : '+ '}${character.name}`}
                    </p>
                    <div className='--general'>
                        <span className='-text'>Cumpleaños: </span>
                        {character.dateOfBirth}
                    </div>
                    <div className='--general'>
                        <span className='-text'>Género: </span>
                        {character.gender}
                    </div>
                    <div className='--general'>
                        <span className='-text'>Color de ojos: </span>
                        {character.eyeColour}
                    </div>
                    <div className='--general'>
                        <span className='-text'>Color de pelo: </span>
                        {character.hairColour}
                    </div>
                </div>
                <div className='--actions'>
                    <button className='btn-delete' onClick={() => actionDeleteCharacter(character)}>Eliminar Personaje</button>
                </div>
            </div>
        </div>
    )
}

export default CardCharacter