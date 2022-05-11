import React from 'react';
import './Button.scss';
import Link from 'next/link';

const ButtonLink = (props) => (
  <Link href={props.href} className={props.class}>
    {props.text}
  </Link>
);

export default ButtonLink;
