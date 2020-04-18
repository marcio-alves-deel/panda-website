import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from 'pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router, RouteComponentProps, globalHistory } from '@reach/router'
import { QueryParamProvider } from 'use-query-params'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import { Register } from 'pages/signin'

function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...options
  })
}

const HomeCoponent = (_: RouteComponentProps) => <Home />
const RegisterCoponent = (_: RouteComponentProps) => <Register />

export const theme = createMyTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '#root': {
          minWidth: '100%',
          minHeight: '100%'
        },
        body: {
          padding: 0
        },
        html: {
          position: 'relative',
          minWidth: '100%',
          minHeight: '100%',
          margin: 0,
          overflowX: 'hidden'
        }
      }
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <QueryParamProvider reachHistory={globalHistory}>
      <CssBaseline />
      <Router>
        <HomeCoponent path="/" />
        <RegisterCoponent path="/registrar" />
      </Router>
    </QueryParamProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
