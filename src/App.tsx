import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GithubContextProvider } from './contexts/GithubContext'
import { Router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GithubContextProvider>
          <Router />
        </GithubContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
