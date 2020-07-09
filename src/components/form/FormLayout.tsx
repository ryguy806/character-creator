import React, { Component } from 'react';

interface IFormProps {
    action: string,
    render: () => React.ReactNode;
}

export interface IValues {
    [key:string]: string,
}

export interface IErrors {
    [key: string]: string,
}

export interface IFormState {
    values: IValues,
    errors: IErrors,
    submitSuccess: boolean,
}

export default class Form extends Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        const errors: IErrors = {};
        const values: IValues = {};
        this.state = {
            errors,
            values,
            submitSuccess: true,
        };
    }

    private hasErrors(errors: IErrors): boolean {
        let haveErrors: boolean = false;
        Object.keys(errors).map((key: string) => {
            if(errors[key].length > 0) {
                haveErrors = true;
            }
        });
        return haveErrors;
    }

    private handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
      ): Promise<void> => {
        e.preventDefault();
    
        if (this.validateForm()) {
          const submitSuccess: boolean = await this.submitForm();
          this.setState({ submitSuccess });
        }
      };
    
    private validateForm(): boolean {
        // TODO Validate the form
        return true;
    }

    private async submitForm():Promise<boolean> {
        return true;
    }

    render(): JSX.Element {

        const {errors, submitSuccess} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit} noValidate={true}>
                    <div className="container">
                        { this.props.render }
                        <div className="form-group">    
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={this.hasErrors(errors)}
                            >
                                Submit
                            </button>
                        </div>
                        {submitSuccess && (
                            <div className="alert alert-info" role="alert">
                                Form successfully submitted!
                            </div>
                        )}
                        {submitSuccess ===false && !this.hasErrors(errors) && (
                            <div className="alert alert-danger" role="alert">
                                An unexpected error has occoured.
                            </div>
                        )}
                        {submitSuccess ===false && this.hasErrors(errors) && (
                            <div className="alert alert-danger" role="alert">
                                Form not filled out correctly, please review and try again!
                            </div>
                        )}
                    </div>
                </form>
            </div>
        );
    }
}