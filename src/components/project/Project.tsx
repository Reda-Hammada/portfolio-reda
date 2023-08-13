  import React from 'react'
  import { DisplayProject } from './DisplayProject';
  import  manageme from '../../assets/images/manageme.png'
  import newsly from '../../assets/images/newsly.png'
  import EnviScope from '../../assets/images/envi.png'
  import SnapApp from '../../assets/images/snapApp.png'
  import todoApp from '../../assets/images/light.png'
  import library from '../../assets/images/librarymanagerapp.png'
  import EasyBank from '../../assets/images/easybanklandingpage.png'
  import weatherApp  from '../../assets/images/weatherapp.png'

  const Project = () => {
    return (
      <section id='projects-section'
               className=' w-[100%] bg-gray-100  pb-28   max-[800px]:pl-0 pl-32 pt-6 '>
      <div className='W-[100%] mt-5'>
        <div className=' max-[800px]:w-[95%] max-[800px]:mr-auto  max-[800px]:ml-auto w-[100%]   mt-10 mr-4 font-[900] text-[2rem]   '>
          <h2 className='max-[800px]:text-center'>Projects</h2>
        </div>          
          <DisplayProject   containerStyle='flex flex-wrap  mt-7 mb-12  w-[90%] rounded-md justify-between pl-4 pr-4  p-6  '
                            title='Manageme' 
                            description='Manageme provides a digital solution to manage your project effortlessly using Kanban style.The application offers board creation dedicated to your project by dividing your projects to tasks and subtasks.' 
                            img={manageme} 
                            linkFront='https://github.com/Reda-Hammada/manageme'
                            linkBack='https://github.com/Reda-Hammada/task-management-app-api-.git'
                            List={['HTML','CSS','Tailwind CSS','JavaScript','Vue.js','Vee-Validate','Pinia','PHP','Laravel','Sanctum Auth','SQL/MySQL']}
                            
                            />
          <DisplayProject containerStyle='flex   flex-wrap  mt-7  w-[90%] rounded-md justify-between  p-6  '
                            title='Newsly App' 
                            description='Newsly app provides a digital solution to read worldwide news from one place with a personalized feed and search and filter feature'
                            img={newsly} 
                            List={['HTML','CSS','Tailwind CSS','JavaScript','React.js','use-form-hook','Redux','Openews and New York times API','PHP','Laravel','Sanctum Auth','SQL/MySQL']}
                            linkFront='https://github.com/Reda-Hammada/newsly-app' 
                            linkBack='https://github.com/Reda-Hammada/newsly-app-API'
                            />

            <DisplayProject containerStyle='flex   flex-wrap  mt-7  w-[90%] rounded-md justify-between pl-4 pr-4 p-6  '
                            title='EnviScope' 
                            description='EnviScope is a website I built using ReactJs and PHP MVC framework to build a content management dashboad for a design office based in Tangier,Morocco'
                            img={EnviScope} 
                            List={['HTML','CSS','JavaScript','React.js','PHP(MVC Framework)','SQL/MySQL']}
                            linkFront='https://github.com/Reda-Hammada/enviscope' 
                            linkBack='https://github.com/Reda-Hammada/enviscope-dashboard'
                            />

            <DisplayProject containerStyle='flex  flex-wrap   mt-7  w-[90%] rounded-md justify-between pl-4 pr-4 p-6  '
                            title='Snap App' 
                            description='Snap app is a challenge I took on Frontend mentor to test my Reactjs knowledge and skills.'
                            img={SnapApp} 
                            List={['HTML','CSS','JavaScript','React.js']}
                            linkFront='https://github.com/Reda-Hammada/snap-app' 
                            />


              <DisplayProject containerStyle='flex  flex-wrap   mt-7  w-[90%] rounded-md justify-between pl-4 pr-4 p-6  '
                            title='TODO App' 
                            description='TODO-list is an application to manage your daily small tasks with simple CRUD, authentication and dark light theme mode .'
                            img={todoApp} 
                            List={['Laravel','PHP','SQL/MySQL','javascript','CSS','HTML']}
                            sourceCode='https://github.com/Reda-Hammada/todo-app' 
                            />

              <DisplayProject containerStyle='flex  flex-wrap   mt-7  w-[90%] rounded-md justify-between pl-4 pr-4 p-6  '
                            title='Library Manager Application(CRUD)' 
                            description='A library manager application that helps librarians keep record on books(title,author,price, date of publish,type)'
                            img={library} 
                            List={['HTML','CSS','JavaScript']}
                            linkFront='https://github.com/Reda-Hammada/Project-7-Management-of-books-in-a-library-v1' 
                            />

              <DisplayProject containerStyle='flex  flex-wrap   mt-7  w-[90%] rounded-md justify-between pl-4 pr-4 p-6  '
                            title='Easy Bank Landing page' 
                            description='Easy Bank is a landing page for digital banking application                          '
                            img={EasyBank} 
                            List={['HTML','CSS3 (flexbox 12 columns library)','JavaScript']}
                            linkFront='https://github.com/Reda-Hammada/Easy-Bank-Landingpage' 
                            />
              <DisplayProject containerStyle='flex  flex-wrap   mt-7  w-[90%] rounded-md justify-between pl-4 pr-4 p-6  '
                            title='Weather App' 
                            description='Weather App is an application that provides details about the weathers based on the searched city'
                            img={weatherApp} 
                            List={['HTML','CSS','JavaScript','Ajax','fetch API']}
                            linkFront='https://github.com/Reda-Hammada/Weather-API-Project.git' 
                            />
        </div>
      </section>
    )
  }

  export default Project;