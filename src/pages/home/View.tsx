import React from 'react'
import FirstBlock from './FirstBlock'
import SecondBlock from './SecondBlock'
import ThirdBlock from './ThirdBlock'
import FourthBlock from './FourthBlock'
import Scrollable from 'hide-scrollbar-react'
import { Footer } from 'components'

const Home = () => {
  return (
    <Scrollable>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <Footer />
    </Scrollable>
  )
}

export default () => <Home />
