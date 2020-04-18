import React from 'react'
import FirstBlock from './FirstBlock'
import SecondBlock from './SecondBlock'
import ThirdBlock from './ThirdBlock'
import FourthBlock from './FourthBlock'
import { Footer } from 'components'

const Home = () => {
  return (
    <React.Fragment>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <Footer />
    </React.Fragment>
  )
}

export default () => <Home />
