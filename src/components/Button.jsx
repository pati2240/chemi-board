import React from 'react';
import { Shield } from "iconsax-react";
const Button = ({ bg, btnText, textColor }) => {
  return (
    <>
     
      <button
        className={`bg-${bg} w-"111px" h-"50px" py-2 m-4 px-2 font-bold hover:bg-orange-600 hover:text-black rounded text-${textColor}`}
      >
        <Shield className='inline py-2' size="32" color="#FF8A65"/>{btnText}<Shield className='inline py-2' size="32" color="#FF8A65"/>
      </button>
    </>
  );
};

export default Button;
