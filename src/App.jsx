import { useEffect } from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return <AppRoutes />;
}

export default App;
