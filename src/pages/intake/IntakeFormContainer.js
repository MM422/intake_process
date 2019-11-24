import React, { Component } from 'react';
import WrappedIntakeForm from './IntakeFormComponent';

class IntakeFormContainer extends Component {
    render() {
        return (
            <WrappedIntakeForm initialValues={{
                RequestorName: 'Max Mu',
                Tier: { key: "2", label: "2" }
            }}/>
        );
    }
}

export default IntakeFormContainer;
