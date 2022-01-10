import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globals';

const Theme = ({ children, theme }) => {
 
return (
  <ThemeProvider theme={theme}> 
    <GlobalStyles/>
    {children}
  </ThemeProvider>
)};

export default Theme;