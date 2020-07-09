import React, { Component } from 'react';
import Class from './Class';
import Race from './Race';
import Name from './Name';
import Alignment from './Alignment';
import Background from './BackGround';

export default class Heading extends Component {
    render(): JSX.Element {
        return (
            <div className="heading">
                <Name />
                <div className="subheading">
                    <Race />
                    <Class />
                    <Alignment />
                    <Background />
                </div>
            </div>
        );
    }
}