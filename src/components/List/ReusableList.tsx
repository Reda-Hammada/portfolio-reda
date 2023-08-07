import React from 'react'
import { ListType } from './List.type';

export const ReusableList = (props:ListType) => {
  return (<li className={props.className}>{props.text}</li>)
}
