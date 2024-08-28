import React, { createContext, ReactNode, useRef } from 'react';

// Define the type for the context value
interface HoverContextType {
    updateWrapperPosition: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

// Create the context with a default value
export const HoverWrapperContext = createContext<HoverContextType | undefined>(undefined);

// Provider component
export const HoverProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const buttonWrapperRef = useRef<HTMLDivElement>(null);

  const updateWrapperPosition = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (buttonWrapperRef.current) {
      const target = e.currentTarget.getBoundingClientRect();

      // Calculate the mouse position relative to the page
      const x = (target.left-11) + window.scrollX;
      const y = (target.top-6) + window.scrollY;

      // Set the background div's position and size to match the button relative to the page
      buttonWrapperRef.current.style.transform = `translate(${x}px, ${y}px)`;
      buttonWrapperRef.current.style.width = `${target.width+22}px`;
      buttonWrapperRef.current.style.height = `${target.height+12}px`;
    }
  };

  return (
    <HoverWrapperContext.Provider value={{ updateWrapperPosition }}>
      <div ref={buttonWrapperRef} className="bg-lime-200 absolute rounded-full z-0 pointer-events-none transition-all duration-300 left-0 top-0"></div>
      <div className="z-40">{children}</div>
    </HoverWrapperContext.Provider>
  );
};

 