import React, { Component } from 'react';
import ArmorClass from './ArmorClass';
import HitPoints from './HitPoints';
import HitDice from './HitDice';
import ProficiencyBonus from './ProficiencyBonus';
import DeathSavingThows from './DeathSavingThrows';

export default class HealthBlock extends Component {

    render():JSX.Element {
        return (
            <div className="health-block">
                <HitPoints/>
                <ArmorClass />
                <HitDice />
                <ProficiencyBonus />
                <DeathSavingThows />
            </div>
        )
    }
}