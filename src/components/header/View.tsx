import React from 'react'
import { Wrapper, BackgroundImage } from './Styles'
import { Navigation } from 'components'
import { Container } from 'react-bootstrap'

const Component: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Navigation />
      </Container>
      <BackgroundImage />
    </Wrapper>
  )
}

export default Component
