import Home from './components/views/Home/Home';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/global/GlobalStyles';
import { lightMode } from './components/styles/global/GlobalThemes';
import Login from './components/views/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <ThemeProvider theme={lightMode}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
