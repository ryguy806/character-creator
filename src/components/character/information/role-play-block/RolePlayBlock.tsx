import React, { Component } from 'react';
import Traits from './Traits';
import Bonds from './Bonds';
import Ideals from './Ideals';
import Flaws from './Flaws';

export default class RolePlayBlock extends Component {

    render(): JSX.Element {
        return (
            <div className="role-play-block">
                <Traits />
                <Bonds />
                <Ideals />
                <Flaws />
            </div>
        )
    }
}