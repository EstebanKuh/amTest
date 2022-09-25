import React, { useState } from 'react';
import Modal from '../Modal';

const Favorites = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Agregar</button>
      {openModal && <Modal
        setOpenModal={setOpenModal}
      />}
    </>
  )
}

export default Favorites