import React, { Component } from 'react';

export default class Name extends Component {

    render (): JSX.Element {

        return (
            <div className="name">
                <h1>Name</h1>
                <span>Character name goes here...</span>
            </div>
        );
    }
}