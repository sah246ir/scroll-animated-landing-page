import React, { useContext } from 'react';
import { HoverWrapperContext } from '../ContextProviders/HoverWrapperProvider';

interface PropTypes {
  children?: React.ReactNode;
  className?: string;
}

const SpecialHoverButton = ({ children, className }: PropTypes) => {
  const a = useContext(HoverWrapperContext) 

  return (
      <button
        onMouseEnter={(e) => a?.updateWrapperPosition(e)}
        className={'text-inherit rounded-full  bg-gray-300 bg-opacity-0 relative z-20 ' + className}
      >
        {children && children} 
      </button> 
  );
};

export default SpecialHoverButton;
