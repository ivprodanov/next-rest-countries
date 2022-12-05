import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext';

export default function ThemeContextWrapper(props) {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    if(theme) {
      setTheme(themes.light);
    }else{
      setTheme(themes.dark)
    }
  }

  console.log(theme)

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme, setIsDark: setIsDark }}>
      <style jsx global>{`
        body {
          background: ${theme.background};
          color: ${theme.text}
        }
      `}</style>
      {props.children}
    </ThemeContext.Provider>
  );
}