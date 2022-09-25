import React, { useState } from "react";
import { createCharacter } from "../../services/hp";

import hatSortingImg from '../../../public/assets/icons/hatSelector.png';

const Modal = ({ setOpenModal }: any) => {
    const [house, setHouse] = useState<string>('');

    const [dataCharacter, setDataCharacter] = useState({
        id: 0,
        image: "https://i.pinimg.com/564x/be/19/ff/be19ff0cdedebf65411f92affbe9e6eb.jpg",
        name: "",
        dateOfBirth: "",
        eyeColour: "",
        hairColour: "",
        gender: "",
        hogwartsStaff: false,
        hogwartsStudent: false,
        alive: true,
        house: ''
    });

    const handleUpdataDataCharacter = (e: any) => {
        const value = e.target.value;

        setDataCharacter({ ...dataCharacter, [e.target.name]: value, hogwartsStaff: false, hogwartsStudent: false });

        if (value === "estudiante") {
            setDataCharacter({
                ...dataCharacter,
                hogwartsStudent: e.target.checked
            });
        } else if (value === "staff") {
            setDataCharacter({
                ...dataCharacter,
                hogwartsStaff: e.target.checked
            });
        }
    };

    const saveData = async () => {
        try {
            await createCharacter(dataCharacter);
        } catch (error) {
            return null;
        }
    };

    const sortingHat = () => {
        const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
        const randomHouse = Math.floor(Math.random() * houses.length);
        setHouse(houses[randomHouse]);
        setDataCharacter({...dataCharacter, house: houses[randomHouse]})
    }

    return (
        <div className="container_modal">
            <div className="__title">
                <h3>Agrega un personaje</h3>
                <button onClick={() => setOpenModal(false)}>
                    X
                </button>
            </div>

            <div className="__body">
                <div className="">
                    <div className="container__input">
                        <div className="--row">
                            <label>
                                NOMBRE
                            </label>
                            <input
                                name="name"
                                type="text"
                                onChange={handleUpdataDataCharacter}
                            />
                        </div>
                        <div className="--row">
                            <label>
                                CUMPLEAÑOS
                            </label>
                            <input
                                name="dateOfBirth"
                                type="date"
                                onChange={handleUpdataDataCharacter}
                            />
                        </div>
                    </div>

                    <div className="container__input">
                        <div className="--row">
                            <label>
                                COLOR DE OJOS
                            </label>
                            <input
                                name="eyeColour"
                                type="text"
                                onChange={handleUpdataDataCharacter}
                            />
                        </div>
                        <div className="--row">
                            <label>
                                COLOR DE PELO
                            </label>
                            <input
                                name="hairColour"
                                type="text"
                                onChange={handleUpdataDataCharacter}
                            />
                        </div>
                    </div>
                </div>

                <div className="container__input">
                    <div className="--row">
                        <label>
                            GÉNERO
                        </label>
                        <div>
                            <span> <input
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={handleUpdataDataCharacter}
                            /> Mujer</span>
                            <span>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    onChange={handleUpdataDataCharacter}
                                /> Hombre</span>
                        </div>
                    </div>

                    <div className="--row">
                        <label>
                            POSICIÓN
                        </label>
                        <div>
                            <input

                                type="radio"
                                name="hogwartsStudent"
                                value="estudiante"
                                onChange={handleUpdataDataCharacter}
                            />

                            Estudiante

                            <input

                                type="radio"
                                name="hogwartsStaff"
                                value="staff"
                                onChange={handleUpdataDataCharacter}
                            />

                            Staff

                        </div>
                    </div>
                </div>

                <div>
                    Fotografía
                    <input type="file" name="file" id="file" />
                </div>

                <div>
                    clickMe!
                    <img src={hatSortingImg} alt="HAT_SORTING" onClick={() => sortingHat()} />
                </div>
                <div>
                    Casa: {house}
                </div>

                <button onClick={() => saveData()}>GUARDAR</button>
            </div>
        </div>
    );
}

export default Modal;