import React,{ useEffect, useRef, useState } from 'react'
import '../pagCss/PagUno.css'
import canada from'../img/canada.jpg';
import zelanda from'../img/nueva-zelanda.jpg';
import malta from '../img/malta.jpeg';
import video from '../img/video1.mp4';
import ReactPlayer from 'react-player';
const PagunoCapa = () => {
    const slideshow=useRef(null);

  const siguiente=()=>{
    
    if (slideshow.current.children.length > 0){
 
      const primerElemento = slideshow.current.children[0];

      slideshow.current.style.transition='200ms ease-out all';
      const tamañoSlide=slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform=`translateX(-${tamañoSlide}px)`;
      const trancision=()=>{
        slideshow.current.style.transition='none';
      slideshow.current.style.transform=`translateX(0)`;

      slideshow.current.appendChild(primerElemento)
      slideshow.current.removeEventListener('transitionend',trancision);

      }
      slideshow.current.addEventListener('transitionend',trancision)
    }
  }
  const anterior=()=>{
   
    if (slideshow.current.children.length > 0){
 
      const index=slideshow.current.children.length-1;
      const ultimoElement=slideshow.current.children[index];
      slideshow.current.insertBefore(ultimoElement,slideshow.current.firstChild);
     
      slideshow.current.style.transition='none';
      const tamañoSlide=slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform=`translateX(-${tamañoSlide}px)`;
      
      setTimeout(()=>{
        slideshow.current.style.transition='200ms ease-out all';
        slideshow.current.style.transform='translateX(0)';
      },30)
    }
  }
    return (
        <div className="contenedorPrincipal">
            <div className="contenedorSlideshow" ref={slideshow}>
          <div className="slice">
          
            <ReactPlayer id='slicev' className="slice" height={'100vh'}  
               url={video}
               playing={true}
               muted={true}
               loop={true}
               controls={false}
            />

          <div className='textSlide'>
            <p >
              paisajes de canada
            </p>
          </div>
        </div>
        <div className="slice">
          
            <img src={malta} alt="" />
         
          <div className='textSlide'>
            <p >
              paisajes de canada
            </p>
          </div>
        </div>
        <div className="slice">
          
            <img src={zelanda} alt="" />
          
          <div className='textSlide'>
            <p >
              paisajes de canada
            </p>
          </div>
        </div>
        <div className="slice">
          
            <img src={canada} alt="" />
         
          <div className='textSlide'>
            <p >
              paisajes de canada
            </p>
          </div>
        </div>
        <div className="slice">
          
            <img src={malta} alt="" />
          
          <div className='textSlide'>
            <p >
              paisajes de canada
            </p>
          </div>
        </div>
        <div className="slice">
          
            <img src={zelanda} alt="" />
          
          <div className='textSlide'>
            <p >
              paisajes de canada
            </p>
          </div>
        </div>
      </div>
      <div className="controles">
         <button onClick={anterior} className='izquierdo'>
      <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button onClick={siguiente} className='derecho'>
      <i className="fa-solid fa-chevron-right"></i>
      </button>
      </div>
          <div class="custom-shape-divider-bottom-1676118424">
    <svg data-name="Layer 1" xmlns={malta} viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        </div>
    );
};

export default PagunoCapa;