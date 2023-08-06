  import React from 'react'
  import { DisplayProject } from './DisplayProject';
  import  manageme from '../../assets/images/manageme.png'
  import List from '../List/List';
  const Project = () => {
    return (
      <section>
        <div className='W-[100%] mt-5'>
          <h2>Projects</h2>
          <DisplayProject containerStyle='flex flex-wrap w-[70%] justify-between pl-4 pr-4'
                          title='Manageme' 
                          description='Manageme provides a digital solution to manage your project effortlessly using Kanban style.The application offers board creation dedicated to your project by dividing your projects to tasks and subtasks.' 
                          img={manageme} 
                          List = <List  text='' className=''/>
                          linkFront='' 
                          />

          
        </div>
      </section>
    )
  }

  export default Project;