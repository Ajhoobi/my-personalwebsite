import React, { useState, useEffect } from 'react';
//import ToggleButton from './toggleButton';
import NavComponents from './navComponents';
import ToggleComponent from '../toggleItema/toggleComponent';
const ResponsiveComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    // Update the isSmallScreen state when the window is resized
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <ToggleComponent />
      ) : (
        <NavComponents />
      )}
    </div>
  );
};



export default ResponsiveComponent;