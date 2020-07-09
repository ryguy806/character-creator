import React from 'react';
import {IErrors} from './CharacterForm';

type Editor = "textbox" | "dropdown";

export interface IFieldProps {
    id: string;
    label?: string;
    editor?: Editor;
    options?: string[];
    value?: any;
}

export const Field: React.SFC<IFieldProps> = ({
    id,
    label,
    editor,
    options,
    value,
}) => {
    return (
        <div className="form-group">
            {label && <label htmlFor={id}>{label}</label>}

            {editor!.toLowerCase() === "textbox" && (
                <input 
                    type="text"
                    id={id}
                    value={value}
                    onChange={
                        (e: React.FormEvent<HTMLInputElement>) => 
                            console.log(e) //TODO push changes to form values.
                    }
                    onBlur={
                        (e: React.FormEvent<HTMLInputElement>) => 
                            console.log(e) //TODO validate field value.
                    }
                    className="form-control"
                />
            )}

            {editor!.toLowerCase() === "dropdown" && (
                <select
                id={id}
                name={id}
                value={value}
                onChange={
                    (e: React.FormEvent<HTMLSelectElement>) =>
                    console.log(e) /* TODO: push change to form values */
                }
                onBlur={
                    (e: React.FormEvent<HTMLSelectElement>) =>
                    console.log(e) /* TODO: validate field value */
                }
                className="form-control"
                >
                {options &&
                    options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
            )}

            {/* TODO - display validation error */}
        </div>
    );
};

Field.defaultProps = {
    editor: "textbox"
}