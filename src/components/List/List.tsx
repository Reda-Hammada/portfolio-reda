import React from 'react'
import { ListType } from './List.type';

const List = (props:ListType) => {
  return (<li className={props.className}>{props.text}</li>)
}

export default List