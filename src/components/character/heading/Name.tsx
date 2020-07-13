import React, { Component } from 'react';

export default class Name extends Component {

    render (): JSX.Element {

        return (
            <>
            <div className="player-name">
                <h1>Player's Name</h1>
                <span>Player's name goes here..</span>
            </div>
            <div className="character-name">
                <h1>Character's Name</h1>
                <span>Character name goes here...</span>
            </div>
            </>
        );
    }
}