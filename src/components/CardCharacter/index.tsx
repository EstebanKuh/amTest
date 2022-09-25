import React, { useEffect, useState } from 'react';
import { deleteCharacter, readCharacters } from '../../services/hp';
import { CharacterInfo, FilterProp } from '../../types';
import { TYPE_STAFF, TYPE_STUDENT } from '../../utils/constants';

const CardCharacter = ({ filter }: FilterProp) => {
    const [dataCharacters, setDataCharacters] = useState<CharacterInfo[]>([])

    const getInitialData = async () => {
        try {
            let params: any = {};
            if (filter === TYPE_STAFF) params.hogwartsStaff = true;
            if (filter === TYPE_STUDENT) params.hogwartsStudent = true;
            const dataReq = await readCharacters(params);
            setDataCharacters(dataReq);
        } catch (error) {
            setDataCharacters([]);
            return null;
        }
    };

    const actionDeleteCharacter = async (item: CharacterInfo) => {
        try {
            await deleteCharacter(item.id);
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        getInitialData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])

    return (
        <div className='container'>
            {dataCharacters.map((item: CharacterInfo) => (
                <div key={item.name} className='container_character'>
                    <div className={`__image ${item.house}`}>
                        <img src={item.image} alt="IMG_CHARACTER" />
                    </div>
                    <div className='__info'>
                        <div className='--occuppy'>
                            <span className='-data'>
                                <span>{`${item.alive ? 'vivo' : 'finado'} / `}</span>
                                <span>{`${item.hogwartsStaff ? 'staff' : 'estudiante'}`}</span>
                            </span>
                            <span className='bookmark'>
                                M
                            </span>
                        </div>
                        <div className='--name'>
                            {item.name}
                            </div>
                        <div className='--general'>
                            <span>Cumpleaños: </span>
                            {item.dateOfBirth}
                            </div>
                        <div className='--general'>
                            <span>Género: </span>
                            {item.gender}
                            </div>
                        <div className='--general'>
                            <span>Color de ojos: </span>
                            {item.eyeColour}
                            </div>
                        <div className='--general'>
                            <span>Color de pelo: </span>
                            {item.hairColour}
                            </div>
                    </div>
                    <button onClick={() => actionDeleteCharacter(item)}>Eliminar Personaje</button>
                </div>
            ))}
        </div>
    )
}

export default CardCharacter