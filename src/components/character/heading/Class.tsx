import React, { Component } from 'react';

export default class Class extends Component {

    render (): JSX.Element {

        return (
            <div className="class">
                <h2>Class</h2>
                <span>Character class goes here...</span>
                <h2>Level</h2>
                <span>Add Character Level here...</span>
            </div>
        );
    }
}