import React from 'react';
import './Button.scss';

const Button = (props) => (
  <button className={props.class} type={props.type}>
    {props.text}
  </button>
);

export default Button;
