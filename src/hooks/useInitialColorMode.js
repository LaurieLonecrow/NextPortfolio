import { useState, useEffect } from "react";

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('color-mode');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }
  return 'dark';
}

export const useDarkMode = () => {
  const [theme, setTheme]=useState('dark');
  const toggleTheme = () => {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  };

  useEffect(() => {
    // const localTheme = getInitialColorMode();
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  },[]);
  return [theme, toggleTheme]
};