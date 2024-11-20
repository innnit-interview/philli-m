import React from 'react'
import PropTypes from 'prop-types'

const TextArea = (props: TextAreaProps) => {
  return (
    <label className={props.classNameLabel}>
      {props.label}
      <textarea className={props.classNameInput} id={props.id} name={props.name} placeholder={props.placeholder} onChange={(e) => props.onChange(e)} rows={4} />
    </label>
  )
}

type TextAreaProps = {
  label: string;
  placeholder?: string;
  id: string;
  name: string;
  onChange: Function;
  classNameInput?: string;
  classNameLabel?: string;
}

export default TextArea
