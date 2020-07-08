import React, { Component } from 'react';

export default class Speed extends Component {

    render(): JSX.Element {
        return (
            <div className="speed">
                <h3>Walking Speed: </h3>
                <p>Walking speed here...</p>
                <h3>Swimming Speed: </h3>
                <p>Swimming speed here...</p>
                <h3>Climbing Speed:</h3>
                <p>Climbing speed here...</p>
            </div>
        )
    }
}