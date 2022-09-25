import React from 'react'
import Favorites from '../components/Favorites';
import CardCharacters from '../components/CardCharacter';
import { TYPE_STAFF, TYPE_STUDENT } from '../utils/constants';

const Dashboard = () => {
    const [filter, setFilter] = React.useState<string>('');

    return (
        <div className="App">
            Selecciona tu filtro
            <div>
                <button onClick={() => setFilter(TYPE_STUDENT)}>Estudiantes</button>
                <button onClick={() => setFilter(TYPE_STAFF)}>Staff</button>
            </div>

            <div>
                <CardCharacters filter={filter} />
            </div>

            <Favorites></Favorites>
        </div>
    )
}

export default Dashboard