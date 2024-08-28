import React, { createContext, ReactNode, useState } from 'react';

// Define the type for the context value
interface HoverContextType {
    updateWrapperPosition: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onLeave: () => void;
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
    const x = (target.left - 11) + window.scrollX;
    const y = (target.top - 6) + window.scrollY;
    const width = target.width + 22;
    const height = target.height + 12;

    // Update the style state
    setStyle({
      opacity: 1,
      transform: `translate(${x}px, ${y}px)`,
      width: `${width}px`,
      height: `${height}px`,
    });
  };

  const onLeave = ()=>{
    setStyle({
      ...style,
      opacity:0
    })
  }
  return (
    <HoverWrapperContext.Provider value={{ updateWrapperPosition,onLeave }}>
      <div
        style={style}
        className="absolute rounded-full bg-lime-300 z-0 pointer-events-none transition-all duration-300"
      />
      <div className="z-40">{children}</div>
    </HoverWrapperContext.Provider>
  );
};
