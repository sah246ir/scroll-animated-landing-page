import React, { createContext, ReactNode, useState } from 'react';

// Define the type for the context value
interface HoverContextType {
    updateWrapperPosition: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onLeave: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

// Create the context with a default value
export const HoverWrapperContext = createContext<HoverContextType | undefined>(undefined);

// Provider component
export const HoverProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // State for managing the position and size of the background div
  const [style, setStyle] = useState<React.CSSProperties>({});

  const updateWrapperPosition = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.currentTarget.getBoundingClientRect();

    // Calculate the position and size
    const x = (target.left) + window.scrollX;
    const y = (target.top) + window.scrollY;
    const width = target.width ;
    const height = target.height;

    // Update the style state
    e.currentTarget.classList.add("bg-opacity-0")
    setStyle({
      ...style,
      opacity: 1,
      transform: `translate(${x}px, ${y}px)`,
      width: `${width}px`,
      height: `${height}px`,
    });
  };

  const onLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>)=>{
    e.currentTarget.classList.remove("transition")
    e.currentTarget.classList.remove("bg-opacity-0")
    e.currentTarget.classList.add("transition")
    setStyle({
      ...style,
      opacity:0
    })
  }
  return (
    <HoverWrapperContext.Provider value={{ updateWrapperPosition,onLeave }}>
      <div
        style={style}
        className="absolute rounded-full bg-orange-400 z-0 bg-opacity-80 pointer-events-none transition-all duration-300"
      />
      <div className="z-40">{children}</div>
    </HoverWrapperContext.Provider>
  );
};
