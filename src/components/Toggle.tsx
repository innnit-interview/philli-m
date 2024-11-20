import React, { ChangeEventHandler } from 'react'

const Toggle = (props: ToggleProps) => {

    return (
        <label className={props.classNameLabel}>
            Absender
            <input id={props.id} className={props.classNameInput} name={props.name} type='checkbox' value={props.label} onChange={() => props.onChange()} />
            <span className={props.classNameHelpText}>{props.helpText}</span>
        </label>
    )
}

type ToggleProps = {
    label: string;
    id: string;
    name: string;
    helpText?: string;
    onChange: Function;
    classNameInput?: string;
    classNameLabel?: string;
    classNameHelpText?: string;
}

export default Toggle