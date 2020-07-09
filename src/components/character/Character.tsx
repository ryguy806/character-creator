import React, { Component } from 'react';
import Stats from './information/stat-block/Stats';
import Skills from './information/skill-block/Skills';
import HealthBlock from './information/health-block/HealthBlock';
import RolePlayBlock from './information/role-play-block/RolePlayBlock';
import ArmorSet from '../equipment/armor/ArmorSet';
import Items from '../equipment/items/Items';
import Weapons from '../equipment/weapons/Weapons';
import Heading from './heading/Heading';

export default class Character extends Component {
    render(): JSX.Element {
        return (
            <div className="character">
                <Heading />
                <Stats />
                <Skills />
                <HealthBlock />
                <RolePlayBlock />
                <ArmorSet />
                <Weapons />
                <Items />
            </div>
        );
    }
}