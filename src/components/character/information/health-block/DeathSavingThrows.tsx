import React, { Component } from 'react';

export default class Traits extends Component {

    render(): JSX.Element {

        return (
            <div className="death-saving-throws">
                <fieldset name="success">
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                </fieldset>
                <fieldset name="failure">
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                </fieldset>
            </div>
        );
    }
}