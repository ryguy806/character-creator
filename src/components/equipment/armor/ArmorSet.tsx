import React, { Component } from 'react';
import {Armor} from './Armor';
import {Shield} from './Shield';

export default class ArmorSet extends Component {

    render() {

        return (
            <div className="armor-set">
                <label>Armor</label>
                <Armor />
                <Shield />
            </div>
        );
    }
}