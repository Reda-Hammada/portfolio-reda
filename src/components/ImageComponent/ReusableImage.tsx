import React from 'react'
import { ImageTypeProps } from './Image.type'

const ReusableImage = (props:ImageTypeProps) => {
  return (
    <div className={`${props.imgContainerStyle}`}>
      <img className={`${props.imgStyle}`}
           src={props.src}
           alt={props.alt}

           />
    </div>
  )
}

export default ReusableImage