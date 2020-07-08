import React, { Component } from 'react';
import Name from './information/Name';
import Race from './information/Race';
import Class from './information/Class';
import Stats from './information/stat-block/Stats';

export default class Character extends Component {
    render(): JSX.Element {
        return (
            <div>
                <Name />
                <Race />
                <Class />
                <Stats />
            </div>
        );
    }
}