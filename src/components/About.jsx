import React from 'react'
import './About.css'
import house from './house.avif'

const About = () => {
  return (
    <div className='about'>
     <div className='services'>
       <div className='service' >
        <span>1</span>
        <h1>architecture</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique officiis perferendis vel delectus. Fugit, laudantium? Totam possimus dicta deleniti ad quisquam iure, velit illo maxime et corrupti similique. Qui, quisquam.

        </p>
       <hr />
       </div>
       <div className='service'>
       <span>2</span>
        <h1>interior design</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo eos minus a! Nemo veritatis corporis minus consectetur eos repudiandae nesciunt cum dolore aut. Vitae alias a dolores dolorem laudantium!

        </p>
       <hr />
       </div>
       <div className='service'>
       <span>3</span>
        <h1>art planning</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a fuga, quae dolor tempora nobis doloribus ea. Recusandae ducimus odio et molestias, esse natus, inventore, tempore accusamus deleniti voluptas eligendi!
        </p>
       <hr />
       </div>
     </div>
     <div>
      <div className='pic'>
        <div className='wwd'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
         <h3>what we do</h3>
         <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium molestias, cupiditate ab autem voluptates repudiandae, obcaecati error consectetur ipsa, veritatis delectus quod laborum eius corporis eos! Suscipit pariatur natus aliquam?
         </p>
         <button><a href="">MORE</a></button>
        </div>
        <img src={house} alt=""  className='img'/>
      </div>
     </div>
    </div>
  )
}

export default About
