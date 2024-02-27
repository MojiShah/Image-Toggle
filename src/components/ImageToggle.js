import React from 'react';
import './ImageToggle.css';
import {useRef} from 'react';

function ImageToggle({primary , secondary}) {

  const imageRef = useRef(null);

  return (
    <img
      src={secondary}
      alt="image" 
      onMouseOver={()=> imageRef.current.src=primary}
      onMouseOut={()=> imageRef.current.src=secondary}
      ref={imageRef}/>
  )  
}  

export default ImageToggle;