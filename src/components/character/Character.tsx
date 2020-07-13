import React from 'react';
import Stats from './information/stat-block/Stats';
import Skills from './information/skill-block/Skills';
import HealthBlock from './information/health-block/HealthBlock';
import RolePlayBlock from './information/role-play-block/RolePlayBlock';
import ArmorSet from '../equipment/armor/ArmorSet';
import Items from '../equipment/items/Items';
import Weapons from '../equipment/weapons/Weapons';
import Heading from './heading/Heading';
import ClassSupport from './class-support/ClassSupportBlock';
import RaceSupportBlock from './race-support/RacialSupportBlock'
import { Link } from 'react-router-dom';

interface ICharacterOwnProps {

}

export const Character: React.FC<ICharacterOwnProps> = ():JSX.Element => {
    return (
        <>
            <p></p>
            <Link to='/'>
                Home
            </Link>
            <div>
                <Heading />
                <Stats />
                <Skills />
                <HealthBlock />
                <ClassSupport />
                <RaceSupportBlock />
                <RolePlayBlock />
                <ArmorSet />
                <Weapons />
                <Items />
            </div>
        </>
    );
}
