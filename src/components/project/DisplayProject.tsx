  import React from 'react'
  import { ProjectTypeProps } from './Project.type';
  import ReusableImage from '../ImageComponent/ReusableImage';


  export const DisplayProject = (props:ProjectTypeProps) => {
    const {containerStyle,img,title,description,linkFront,linkBack,List} = props;
    return (
      <div  className={containerStyle}>
          <div className=''>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
              {List}
            </ul>
          </div>
            <ReusableImage imgContainerStyle=''
                            imgStyle='' 
                            src={img} 
                            alt='' 
                            />
        <div>

        </div>

      </div>
    )
  }
