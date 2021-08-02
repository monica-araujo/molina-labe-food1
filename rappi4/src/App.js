import { createGlobalStyle } from 'styled-components';
import { Router } from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';
import { GlobalStorage } from './global/GlobalContext';



const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
  }
  body {
  height: 100%;
  margin: 0;
}
  button {
    background-color: transparent;
    border: none;
  }
`

const App = () => {
  return (
    <div >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalStorage>
          <Router /> 
        </GlobalStorage>
      </ThemeProvider>
    </div>
  );
}

export default App;
