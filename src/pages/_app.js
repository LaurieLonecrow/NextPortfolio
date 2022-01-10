import { darkMode, lightMode } from "../themes/default";
import { useDarkMode } from '../hooks/useInitialColorMode';
import Theme from '../styles/theme';
import Toggle from '../components/Toggle/Toggle';


export default function App({ Component, pageProps }) {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'dark' ? darkMode : lightMode;

  return (
    <>
      <Theme theme={themeMode}>
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 