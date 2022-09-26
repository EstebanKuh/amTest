import React from 'react'
import Favorites from '../components/Favorites';
import CardCharacters from '../components/CardCharacter';
import ButtonsFilter from '../components/ButtonsFilter';

import background from '../../public/assets/images/background.svg';

const Dashboard = () => {
    const [filter, setFilter] = React.useState<string>('');

    return (
        <main className="app">
            <img src={background} className="background_body" alt="background howarts" />

            <ButtonsFilter filter={filter} setFilter={setFilter} />

            <CardCharacters filter={filter} />

            <div>
                <Favorites></Favorites>
            </div>
        </main>
    )
}

export default Dashboard