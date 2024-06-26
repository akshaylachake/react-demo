import React, { createContext, useEffect, useState } from 'react'
import Child from '../../UseContextFile';

// Create a context with 'dark' as the default value
export const ThemeContext = createContext('dark');

function UseContextHook() {
  const [theme, setTheme] = useState('dark');

  const lightStyles = `
      background-color: #000; 
      color: #fff;
    `;
  
  const darkStyles = `
      background-color: #fff; 
      color: #000;
    `;
  
  useEffect(() => {
    const body = document.getElementsByTagName('body');

    theme === 'light' ? 
      body[0].style.cssText = lightStyles
    : 
      body[0].style.cssText = darkStyles;

  }, [theme,lightStyles,darkStyles])
  

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Child/>
    </ThemeContext.Provider>
  );
}

export default UseContextHook