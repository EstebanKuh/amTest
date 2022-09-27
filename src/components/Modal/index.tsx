import React, { useState } from "react";
import { createCharacter } from "../../services/hp";

import hatSortingImg from '../../../public/assets/icons/hatSelector.png';

const Modal = ({ setOpenModal, updateCharacters }: any) => {
    const [house, setHouse] = useState<string>('');

    const [dataCharacter, setDataCharacter] = useState({
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

        setDataCharacter({ ...dataCharacter, [e.target.name]: value });

        if (value === "estudiante") {
            setDataCharacter({
                ...dataCharacter,
                hogwartsStudent: e.target.checked,
                hogwartsStaff: false
            });
        } else if (value === "staff") {
            setDataCharacter({
                ...dataCharacter,
                hogwartsStaff: e.target.checked,
                hogwartsStudent: false
            });
        }
    };

    const validCharacter = () => {
        let valid = true;
        if(
            !dataCharacter.name ||
            !dataCharacter.dateOfBirth ||
            !dataCharacter.eyeColour ||
            !dataCharacter.hairColour ||
            !dataCharacter.gender ||
            (!dataCharacter.hogwartsStudent && !dataCharacter.hogwartsStaff)
        ) {
            valid = false;
        }

        console.log('VALIDO :::::', valid);

        return valid;
    }

    const saveData = async () => {
        try {
            console.log('data character :::::', dataCharacter);
            if(!validCharacter()) return;
            await createCharacter(dataCharacter);
            updateCharacters();
        } catch (error) {
            return null;
        }
    };

    const sortingHat = () => {
        const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
        const randomHouse = Math.floor(Math.random() * houses.length);
        setHouse(houses[randomHouse]);
        setDataCharacter({ ...dataCharacter, house: houses[randomHouse] })
    }

    return (
        <div className={`container_modal ${house}`}>
            <div className="__title">
                <span className="--text">Agrega un personaje</span>
                <button className="--icon" onClick={() => setOpenModal(false)}>
                    X
                </button>
            </div>

            <div className="__container__body">
                <div className="__body">
                    <div className="--row">
                        <div className="container_input">
                            <label htmlFor="name" className="--label">
                                NOMBRE
                            </label>
                            <input
                                className="--input"
                                id="name"
                                name="name"
                                type="text"
                                onChange={handleUpdataDataCharacter}
                            />
                        </div>
                        <div className="container_input">
                            <label htmlFor="dateOfBirth" className="--label">
                                CUMPLEAÑOS
                            </label>
                            <input
                                className="--input"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="date"
                                onChange={handleUpdataDataCharacter}
                            />
                        </div>
                    </div>

                    <div className="--row">
                        <div className="container_input">
                            <label htmlFor="eyeColour" className="--label">
                                COLOR DE OJOS
                            </label>
                            <input
                                className="--input"
                                id="eyeColour"
                                name="eyeColour"
                                type="text"
                                onChange={handleUpdataDataCharacter}
                            />
                        </div>
                        <div className="container_input">
                            <label htmlFor="hairColour" className="--label">
                                COLOR DE PELO
                            </label>
                            <input
                                className="--input"
                                id="hairColour"
                                name="hairColour"
                                type="text"
                                onChange={handleUpdataDataCharacter}
                            />
                        </div>
                    </div>

                    <div className="--row">
                        <div className="container_input">
                            <label className="--label">
                                GÉNERO
                            </label>
                            <div className="--input-check">
                                <span>
                                    <input
                                        type="radio"
                                        id="gender_f"
                                        name="gender"
                                        value="Female"
                                        onChange={handleUpdataDataCharacter}
                                    />
                                    <label htmlFor="gender_f">Mujer</label>
                                </span>
                                <span>
                                    <input
                                        type="radio"
                                        id="gender_m"
                                        name="gender"
                                        value="Male"
                                        onChange={handleUpdataDataCharacter}
                                    />
                                    <label htmlFor="gender_m">Hombre</label>
                                </span>
                            </div>
                        </div>

                        <div className="container_input">
                            <label className="--label">
                                POSICIÓN
                            </label>
                            <div className="--input-check">
                                <span>
                                    <input
                                        id="hogwartsStudent"
                                        type="radio"
                                        name="hogwartsStudent"
                                        value="estudiante"
                                        checked={dataCharacter.hogwartsStudent}
                                        onChange={handleUpdataDataCharacter}
                                    />
                                    <label htmlFor="hogwartsStudent">Estudiante</label>
                                </span>
                                <span>
                                    <input
                                        id="hogwartsStaff"
                                        type="radio"
                                        name="hogwartsStaff"
                                        value="staff"
                                        checked={dataCharacter.hogwartsStaff}
                                        onChange={handleUpdataDataCharacter}
                                    />
                                    <label htmlFor="hogwartsStaff">Staff</label>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="--row -start">
                        <label htmlFor="file">FOTOGRAFÍA</label>
                        <input type="file" name="file" id="file" />
                    </div>
                </div>

                <div className="__body-house">
                    <span>¡Pulsa para saber la casa!</span>
                    <img src={hatSortingImg} alt="HAT_SORTING" onClick={() => sortingHat()} />

                    {house}
                </div>
            </div>

            <div className="__actions">
                <button onClick={() => saveData()}>GUARDAR</button>
            </div>
        </div>
    );
}

export default Modal;