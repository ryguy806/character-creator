import React, { Component } from 'react';
import RacialFeatureList from './features/RacialFeatureList'
import { Speed } from './Speed';

export default class ClassSupport extends Component {
    render(): JSX.Element {

        return (
            <div className="racial-support-block">
                <RacialFeatureList />
                <Speed />
            </div>
        );
    }
}