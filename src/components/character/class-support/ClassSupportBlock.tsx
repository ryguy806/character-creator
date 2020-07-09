import React, { Component } from 'react';
import ClassFeatureList from './features/ClassFeatureList';
import { Language } from './languages/Language';
import ProficiencyList from './proficiencies/ProficiencyList';
import SavingThrows from './saving-throws/SavingThrows';

export default class ClassSupport extends Component {
    render(): JSX.Element {

        return (
            <div className="class-support-block">
                <SavingThrows />
                <ClassFeatureList />
                <ProficiencyList />
                <Language />
            </div>
        );
    }
}