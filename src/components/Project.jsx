import React from 'react'
import './Project.css'
import pic from './design.jpg'
import blue from './chair.png'
const Project = () => {
  return (
   <div className='pics'>
    <div className='picture'>
     <img src={pic} alt="" />
    </div>
        <div className='wwds'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
         <h3>what we do</h3>
         <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium molestias, cupiditate ab autem voluptates repudiandae, obcaecati error consectetur ipsa, veritatis delectus quod laborum eius corporis eos! Suscipit pariatur natus aliquam?
         </p>
         <button><a href="">MORE</a></button>
        </div>
        <div>

        <img src={blue} alt=""  className='image'/>
        </div>
     
   
   </div>
  )
}

export default Project

