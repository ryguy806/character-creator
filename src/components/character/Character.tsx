import React, { Component } from 'react';
import Name from './heading/Name';
import Race from './heading/Race';
import Class from './heading/Class';
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