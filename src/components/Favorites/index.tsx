import React, { useState } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';

import { CharacterInfo } from '../../types';
import { REMOVE_FAVORITE } from '../../redux/constants';

import bookmarkFill from '../../../public/assets/icons/bookmark_fill.svg';
import userAddFill from '../../../public/assets/icons/user_add_fill.svg'
import removeIcon from '../../../public/assets/icons/trash.svg';

interface FavoritosProps {
  listFavs: CharacterInfo[];
  updateCharacters: () => void;
  removeFavorite: (character: CharacterInfo) => void;
}

const Favorites = ({ listFavs, updateCharacters, removeFavorite }: FavoritosProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [openFavs, setOpenFavs] = useState(false);

  const actionUpdate = () => {
    updateCharacters();
    setOpenModal(false);
  }

  return (
    <>
      <div className='actions_favs'>
        <button className='__btn -left' onClick={() => setOpenFavs(!openFavs)}>
          <span className='--text'>Favoritos</span>
          <img className='--img-icon' src={bookmarkFill} alt="icon bookmarkFill" />
        </button>
        <button className='__btn -rigth' onClick={() => setOpenModal(!openModal)}>
          <span className='--text'>Agregar</span>
          <img className='--img-icon' src={userAddFill} alt="icon userAddFill" />
        </button>
      </div>
      {openModal && <Modal
        setOpenModal={setOpenModal}
        updateCharacters={actionUpdate}
      />}

      {openFavs &&
        <div className='container_favs'>
          <div className='__list -first'></div>
          {listFavs.map((character: CharacterInfo) => (
            <div key={character.id} className='__list'>
              <img className='--img' src={character.image} alt="img characer" />
              <span className='--text'>{character.name}</span>
              <img className='--icon' src={removeIcon} alt="remove icon" onClick={() => removeFavorite(character)} />
            </div>
          ))}
          {listFavs.length === 0 &&
            <div className='container_favs'>
              <div className='__list -first'></div>
              <div className='__list'>
                <span className='--text'>Sin favoritos</span>
              </div>
            </div>
          }
        </div>
      }
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    listFavs: state.bookmarks
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeFavorite: (character: CharacterInfo) => {
      dispatch({
        type: REMOVE_FAVORITE,
        character
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);