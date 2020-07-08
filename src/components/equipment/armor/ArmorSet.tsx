import React, { Component } from 'react';
import Armor from './Armor';
import Shield from './Shield';

export default class ArmorSet extends Component {

    render(): JSX.Element {

        return (
            <div className="armor-set">
                <Armor>Armor goes here...</Armor>
                <Shield>Shield goes here if it exists.</Shield>
            </div>
        );
    }
}