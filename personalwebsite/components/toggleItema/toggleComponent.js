import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { linkData } from '../../data/linkData';
import { Link } from 'react-router-dom';



const ToggleComponent = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  const handleScreenTouch = () => {
    setToggled(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!document.getElementById('toggleContainer').contains(event.target)) {
        setToggled(false);
      } 
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleClickOutside);
    };
  }, []);

  return (
    <div id='toggleContainer'>
      <ToggleButton isToggled={isToggled} onClick={handleToggle} />
      {isToggled && <ToggleBar />}
    </div>
  );
};

const ToggleButton = ({ isToggled, onClick }) => {
  return (
   
      <div
      
      className={`pb-16 bg-blue-500 pl-10 w-20   text-white  rounded cursor-pointer  transition-transform z-20${
        isToggled ? ' transform' : ''
      } duration-300 ease-in-out`}
    >
      <FontAwesomeIcon
        onClick={onClick}
        icon={faBarsStaggered}
        flip={isToggled ? 'horizontal' : 'vertical'}
        style={{ color: '#ba1168' }}
        size='2xl'
      />
    </div>
   
  );
};

const ToggleBar = () => {
  return (
    <div className='  absolute top-16   w-24 shadow-2xl'>
      <ul className='  font-primaryFont  flex-col' >
         {linkData.map((link) => (
          <li key={link.id} className=' border-spacing-0  hover:text-opacity-95
            p-5 text-sm shadow-xl   '><Link className=' hover:text-secondery  transition-colors duration-100' to={link.dist} >{link.text}</Link></li>
         ))}
       </ul>
    </div>
  );
};

export default ToggleComponent;
