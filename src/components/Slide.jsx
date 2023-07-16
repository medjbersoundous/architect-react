import React from 'react'
import './Slide.css'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import logo from './architect.png'

const Slide = (props) => {
const  slides = [
    {image:'https://picsum.photos/id/237/200/300', title:"title", description:"description "},
    {image:'https://picsum.photos/200/300?grayscale', title:"title", description:"description "},
    {image:'https://picsum.photos/200/300.jpg', title:"title", description:"description "},
    {image:'https://picsum.photos/500/300', title:"title", description:"description "},
    {image:'https://picsum.photos/600/300', title:"title", description:"description "},
    {image:'https://picsum.photos/600/700', title:"title", description:"description "},
    {image:'https://picsum.photos/500/900', title:"title", description:"description "},
    {image:'https://picsum.photos/600/200', title:"title", description:"description "},
    {image:'https://picsum.photos/700/300', title:"title", description:"description "},
    {image:'https://picsum.photos/800/300', title:"title", description:"description "},
    {image:'https://picsum.photos/900/700', title:"title", description:"description "},
    {image:'https://picsum.photos/100/900', title:"title", description:"description "},
    {image:'https://picsum.photos/200/200', title:"title", description:"description "},
];
const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;

}
const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
    
}
  return (
    <div>
   <div className='projects'>
      <div className='project '>
        <span>+200</span>
        <h5>creative project</h5>
      </div>
    </div>
    <div className='slide'>
      <MdChevronLeft size={40} className='slider-icon left' onClick={slideLeft} />
        <div id='slider'>
            {

               slides.map((slide,index)=>{
                   return(
                   <div className='slider-card' key={index}>
                        <div className='slider-card-image' style={{backgroundImage:`url(${slide.image})`, backgroundSize:'cover',  backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                        <h3 className='slider-card-title'>{slide.title}</h3>
                        <h6 className='slider-card-description'>{slide.description}</h6>
                  </div>
                )
               })
            }
        </div>
      <MdChevronRight size={40}   className='slider-icon right' onClick={slideRight} />
    </div>
    </div>
  )
}

export default Slide
