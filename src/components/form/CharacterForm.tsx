import React from 'react';
import Form from './FormLayout';
import {Field} from './FormField';

export const CharacterForm: React.SFC = () => {
    return (
        <Form 
            action="#"
            render={() => (
                <React.Fragment>
                    <div className="alert alert-info" role="alert">
                        Enter the information requested.
                    </div>
                    <Field id="player-name" />
                    <Field id="character-name" label="Character Name" />
                    <Field id="character-race" label="Race" editor="dropdown"
                     options={["", "Dragonborn", "Dwarf", "Elf", "Gnome", "Halfling", "Half-Elf", "Half-Orc", "Human", "Tiefling"]}
                     />
                    <Field id="character-class" label="Class" editor="dropdown"
                    options={["", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue",
                        "Sorcerer", "Warlock", "Wizard"]}/>
                </React.Fragment>
            )} />
    )
}