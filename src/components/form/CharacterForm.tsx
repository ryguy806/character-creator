import React from 'react';
import {Form, IFields, required } from './FormLayout';
import {Field} from './FormField';

export const CharacterForm: React.SFC = () => {

    const fields: IFields = {
        player: {
            id: "player-name",
            label: "Player Name",
            validation: {rule: required},
        },
        character: {
            id: "character-name",
            label: "Character Name",
            validation: {rule: required},
        },
        class: {
            id: "character-class",
            label: "Character Class",
            editor: "dropdown",
            options: ["", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue",
            "Sorcerer", "Warlock", "Wizard"],
            validation: {rule: required},
        },
        race: {
            id: "character-race",
            label: "Character Race",
            editor: "dropdown",
            options: ["", "Dragonborn", "Dwarf", "Elf", "Gnome", "Halfling", "Half-Elf", "Half-Orc", "Human", "Tiefling"],
            validation: {rule: required},
        }
    }
    return (
        <Form 
            action="http://localhost:3000/form/CharacterForm.tsx"
            fields={fields}
            render={() => (
                <React.Fragment>
                    <div className="alert alert-info" role="alert">
                        Enter the information requested.
                    </div>
                    <Field {...fields.player} />
                    <Field {...fields.character} />
                    <Field {...fields.race} />
                    <Field {...fields.class} />
                </React.Fragment>
            )} 
        />
    );
};