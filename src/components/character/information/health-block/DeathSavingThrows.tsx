import React, { Component } from 'react';

export default class DeathSavingThrows extends Component {

    render(): JSX.Element {

        return (
            <div className="death-saving-throws">
                <p>Death Saving Throws</p>
                <label htmlFor="success">Success</label>
                <fieldset name="success" id="success">
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                </fieldset>
                <label htmlFor="failure">Failure</label>
                <fieldset name="failure" id="failure">
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                </fieldset>
            </div>
        );
    }
}