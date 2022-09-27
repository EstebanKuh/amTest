import React from 'react';
import { TYPE_STAFF, TYPE_STUDENT } from '../../utils/constants';
import hpTitle from '../../../public/assets/images/hp_title.svg';

interface ButtonFilterProps {
    filter: string,
    setFilter: (filter: string) => void
}

const ButtonsFilter = ({ filter, setFilter }: ButtonFilterProps) => {
    return (
        <div className='container__filter'>
            <img src={hpTitle} alt="title img" />
            <span className='filter__subtitle'>Selecciona tu filtro</span>
            <div className='container_actions'>
                <button className={`btn ${filter === TYPE_STUDENT ? '--active' : '--normal'}`} onClick={() => setFilter(TYPE_STUDENT)}>Estudiantes</button>
                <button className={`btn ${filter === TYPE_STAFF ? '--active' : '--normal'}`} onClick={() => setFilter(TYPE_STAFF)}>Staff</button>
            </div>
        </div>
    )
}

export default ButtonsFilter