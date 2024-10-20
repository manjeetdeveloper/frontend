import React from 'react';

const Logo = ({ w, h }) => {
  return (
    <div>
      <img 
        src="https://i.ibb.co/Nm4h5DC/logo1.png" 
        alt="logo1" 
        style={{ width: `${w}px`, height: `${h}px` }} 
      />
    </div>
  );
}

export default Logo;
