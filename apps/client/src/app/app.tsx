import Home from './components/views/Home/Home';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/global/GlobalStyles';
import { lightMode } from './components/styles/global/GlobalThemes';

export const App = () => {
  return (
    <ThemeProvider theme={lightMode}>
      <GlobalStyles/>
      <Home />
    </ThemeProvider>
  )
};

export default App;
