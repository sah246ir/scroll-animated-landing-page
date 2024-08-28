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
        onMouseLeave={(e)=>a?.onLeave(e)}
        className={'text-inherit rounded-full bg-gray-300 relative z-20 transition duration-300 px-3 py-1 ' + className}
      >
        {children && children} 
      </button> 
  );
};

export default SpecialHoverButton;
