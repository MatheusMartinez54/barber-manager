import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'barbearia-theme';

export function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setTheme(stored || 'dark');
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  const classes = useMemo(() => ({
    root: theme === 'dark' ? 'bg-brand-900 text-white' : 'bg-white text-brand-900'
  }), [theme]);

  return { theme, toggleTheme, classes };
}
