import React from 'react';
import { connect } from 'react-redux';

import { CardCharacterProp, CharacterInfo } from '../../types';
import { ADD_FAVORITE } from '../../redux/constants';

import bookmarkIcon from '../../../public/assets/icons/bookmark.svg';
import bookmarkIconB from '../../../public/assets/icons/bookmark_fill_black.svg';

const CardCharacter = ({ listFavs, character, actionDeleteCharacter, addFavorite }: CardCharacterProp) => {
    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

    React.useEffect(() => {
        const isFav = !!listFavs.find((characterFav: CharacterInfo) => characterFav.id === character.id);
        setIsFavorite(isFav);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listFavs]);


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
                        {!isFavorite && <img onClick={() => addFavorite(character)} src={bookmarkIcon} alt="bookmark icon" />}
                        {isFavorite && <img onClick={() => addFavorite(character)} src={bookmarkIconB} alt="bookmark icon mark" />}
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

const mapStateToProps = (state: any) => {
    return {
        listFavs: state.bookmarks
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addFavorite: (character: CharacterInfo) => {
            dispatch({
                type: ADD_FAVORITE,
                character
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardCharacter)