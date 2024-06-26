import React, { useContext } from 'react';
import { ThemeContext } from './Pages/UseContextHook';

function UseContextFile() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#000',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      Toggle Theme
    </button>
  );
}

export default UseContextFile;