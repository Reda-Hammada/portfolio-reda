import React from 'react'
import { ButtonPropsType } from './Button.type';
const ReusableButton = (props:ButtonPropsType) => {

 const {text,className} = props;
 
  return (
    <div>
        <button className={`${className}`}>
            {text}
        </button>
    </div>
  )
}




export default ReusableButton