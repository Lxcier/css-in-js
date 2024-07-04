import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle, { Container } from './styles'
import temaPadrao from './theme/styles'

function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
