import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import { GlobalStyles, PagesWrapper } from './styles/global'
import { MemoryRouter as Router } from "react-router-dom";
import { RoutesComponent } from './routes';
import { LoadingProvider } from './Context/LoadingContext';
import Loading from './Components/Loading';
import { AuthProvider } from './Context/AuthContext';
import { ListProvider } from './Context/ListContext';

function App() {
  return (
    <Router>
      <LoadingProvider>

     <AuthProvider>
     <ListProvider>
     <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PagesWrapper >
          <Loading/>
            <RoutesComponent />

            </PagesWrapper>
        </ThemeProvider>

     </ListProvider>
     </AuthProvider>
      </LoadingProvider>
    </Router>
  )
}

export default App
