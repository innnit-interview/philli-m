import React from 'react'

const Button = (props: ButtonProps) => {
  return (
    <button type='button' className={props.className} onClick={() => props.onClick()}>{props.label}</button>
  )
}

type ButtonProps = {
  label: string;
  id: string;
  className: string;
  onClick: Function;
}

export default Button
