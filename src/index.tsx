import React from 'react'
import ReactDOM from 'react-dom'
import { Home, Infos, Downloads } from 'pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router, RouteComponentProps, globalHistory } from '@reach/router'
import { QueryParamProvider } from 'use-query-params'
import { Header } from 'components'
import { Footer } from 'components/footer'

const HomeCoponent = (_: RouteComponentProps) => <Home />
const InfosCoponent = (_: RouteComponentProps) => <Infos />
const DownloadsCoponent = (_: RouteComponentProps) => <Downloads />

ReactDOM.render(
  <QueryParamProvider reachHistory={globalHistory}>
    <Header />
    <Router>
      <HomeCoponent path="/" />
      <InfosCoponent path="/infos" />
      <DownloadsCoponent path="/download" />
    </Router>
    <Footer />
  </QueryParamProvider>,
  document.getElementById('root')
)
