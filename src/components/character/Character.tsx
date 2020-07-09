import React, { Component } from 'react';
import Name from './heading/Name';
import Race from './heading/Race';
import Class from './heading/Class';
import Stats from './information/stat-block/Stats';
import Alignment from './heading/Alignment'
import Backgorund from './heading/BackGround'
import Skills from './information/skill-block/Skills';
import HealthBlock from './information/health-block/HealthBlock';
import RolePlayBlock from './information/role-play-block/RolePlayBlock';
import ArmorSet from '../equipment/armor/ArmorSet';
import Items from '../equipment/items/Items';
import Weapons from '../equipment/weapons/Weapons';

export default class Character extends Component {
    render(): JSX.Element {
        return (
            <div className="character">
                <Name />
                <Race />
                <Class />
                <Alignment />
                <Backgorund />
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