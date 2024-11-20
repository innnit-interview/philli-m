import React from 'react'

const TextInput = (props: TextInputProps) => {
  return (
    <label className={props.classNameLabel}>
      {props.label}
      <input id={props.id} className={props.classNameInput} name={props.name} type='text' disabled={props.disabled} placeholder={props.placeholder} onChange={(e) => props.onChange(e)} maxLength={props.maxLength} />
    </label>
  )
}

type TextInputProps = {
  label: string;
  id: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  onChange: Function;
  maxLength?: number;
  classNameInput?: string;
  classNameLabel?: string;
}

export default TextInput
