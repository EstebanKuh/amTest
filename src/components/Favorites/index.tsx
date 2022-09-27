import React, { useState } from 'react';
import Modal from '../Modal';
import { CharacterInfo } from '../../types';

import bookmarkFill from '../../../public/assets/icons/bookmark_fill.svg';
import userAddFill from '../../../public/assets/icons/user_add_fill.svg'

interface FavoritosProps {
  listFavs?: CharacterInfo[];
  addCharacter?: (character: CharacterInfo) => void;
}

const Favorites = ({ listFavs, addCharacter }: FavoritosProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [openFavs, setOpenFavs] = useState(false);

  return (
    <>
      <div className='actions_favs'>
        <button className='__btn -left' onClick={() => setOpenFavs}>
          <span className='--text'>Favoritos</span>
          <img className='--img-icon' src={bookmarkFill} alt="icon bookmarkFill" />
        </button>
        <button className='__btn -rigth' onClick={() => setOpenModal(true)}>
          <span className='--text'>Agregar</span>
          <img className='--img-icon' src={userAddFill} alt="icon userAddFill" />
        </button>
      </div>
      {openModal && <Modal
        setOpenModal={setOpenModal}
      />}

      {openFavs && <>Favoritos abierto</>}
    </>
  )
}

export default Favorites