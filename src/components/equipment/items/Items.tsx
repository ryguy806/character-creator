import React, { Component } from 'react';

export default class Items extends Component {

    render(): JSX.Element {

        return (
            <div className="items">
                <label>Item List</label>
                <ul>
                    <li>Items go here...</li>
                </ul>
            </div>
        );
    }
}