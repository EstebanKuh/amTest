import React from 'react'
import Favorites from '../components/Favorites';
import CardCharacter from '../components/CardCharacter';
import ButtonsFilter from '../components/ButtonsFilter';

import { deleteCharacter, readCharacters } from '../services/hp';

import { TYPE_STAFF, TYPE_STUDENT } from '../utils/constants';

import background from '../../public/assets/images/background.svg';
import { CharacterInfo } from '../types';

const Dashboard = () => {
    const [filter, setFilter] = React.useState<string>('');
    const [dataCharacters, setDataCharacters] = React.useState<CharacterInfo[]>([])

    const getDataCharacter = async () => {
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

    const actionDeleteCharacter = async (character: CharacterInfo) => {
        try {
            await deleteCharacter(character.id);
            getDataCharacter();
        } catch (error) {
            return null;
        }
    };

    React.useEffect(() => {
        getDataCharacter();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])

    return (
        <main className="app">
            <img src={background} className="background_body" alt="background howarts" />

            <ButtonsFilter filter={filter} setFilter={setFilter} />

            {dataCharacters.map((character: CharacterInfo) =>
                <CardCharacter character={character} actionDeleteCharacter={actionDeleteCharacter} />
            )}

            <Favorites></Favorites>

        </main>
    )
}

export default Dashboard