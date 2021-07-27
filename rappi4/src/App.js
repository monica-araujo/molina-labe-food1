import { createGlobalStyle } from 'styled-components';
import { Router } from './routes/Router';



const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    font-family: 'Oxygen', sans-serif;
  }
`

const App = () => {
  return (
    <div >
      <GlobalStyle />
      <Router /> 
    </div>
  );
}

export default App;
