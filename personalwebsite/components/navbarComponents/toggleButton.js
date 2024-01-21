import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { linkData } from '../../data/linkData';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const ToggleButton = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };
   
  
 


  return (
 
    <>
      <div
      onClick={handleToggle}
      className={`pb-16  text-white p-4  w-1/4 items-center transition-transform  z-20${
        isToggled ? 'transform' : ''
      } duration-300 ease-in-out `}
     >
        <FontAwesomeIcon icon={ faBarsStaggered } flip={isToggled ? 'horizontal' : 'vertical'} style={{color: "#ba1168",}} size='2xl'/>

     </div>
    <div>
    <div className=  {`${isToggled ? 'hidden' : 'block' } bg-primary absolute` } >
       <ul>
         {linkData.map((link) => (
          <li><Link to={link.dist} >{link.text}</ Link></li>
         ))}
       </ul>
     </div>
    </div>
     
    </>
    
  );
};



export default ToggleButton;
