  import React, { ReactNode } from 'react'
  import { ProjectTypeProps } from './Project.type';
  import ReusableImage from '../ImageComponent/ReusableImage';
  import {ReusableList} from '../List/ReusableList';
  import ReusableButton from '../Button/ReusableButton';

  export const DisplayProject = (props:ProjectTypeProps) => {
    const {containerStyle,img,title,description,linkFront,linkBack,linkLive,List,sourceCode} = props;
    return (
      <div  className={containerStyle}>
          <div className='w-[60%] max-[800px]:w-[100%] '>
              <h3 className='font-[900] text-[1.4rem]'>{title}</h3>

          </div>
          <div className=' w-[100%] flex mt-3 '>
            <div className='w-[100%] flex-col'>
              <p className='mt-2 ml-3 text-[1.2rem] w-[60%] max-[800px]:w-[100%]'>{description}</p>
              <ul className='list-disc mt-7 '>
              {List.map((listItem,index)=>(
                <ReusableList key={index} text={listItem} className='ml-8  text-[1.1rem]  ' />
                ))}
              </ul>
              <div className='flex ml-2'>
              {linkFront !== undefined ? <div>
                <a href={linkFront} target='_blank'>
                  <ReusableButton  text='Front-end'  className={'bg-black ml-3 text-white rounded hover:shadow-2xl mt-5 w-[100px] h-[40px]'} />

                  </a>
              </div>: null}
              {linkBack !== undefined ? <div>
                <a href={linkBack} target='_blank'>
                  <ReusableButton  text='Back-end'  className={'bg-black ml-3 text-white rounded hover:shadow-2xl mt-5 w-[100px] h-[40px]'} />

                  </a>
              </div>: null}
              {sourceCode !== undefined ? <div>
                <a href={sourceCode} target='_blank'>
                  <ReusableButton  text='source code'  className={'bg-black ml-3 text-white rounded hover:shadow-2xl mt-5 w-[110px] h-[40px]'} />

                  </a>
              </div>: null}
              </div>
            </div>
            <ReusableImage imgContainerStyle='w-[100%] '
                            imgStyle='w-[80%] ml-12 mt-26   rounded-lg' 
                            src={img} 
                            alt='project image' 
                            
                            />

            
          </div>
          <div className='w-[100%]'>
          
          </div>
            
        <div>

        </div>

      </div>
    )
  }
