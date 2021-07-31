import { createGlobalStyle } from 'styled-components';
import { Router } from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';



const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
  }
  body {
  height: 100%;
  margin: 0;
  width: 100vw;
}
`

const App = () => {
  return (
    <div >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router /> 
      </ThemeProvider>
    </div>
  );
}

export default App;
