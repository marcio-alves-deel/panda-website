import React from 'react'
import { Wrapper, Copyright } from './Styles'
import { Container } from 'react-bootstrap'

const Component: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Copyright>Copyright 2020!</Copyright>
        <Copyright>All Registered Trademarks belong to their Respective Owners and Gravity Co.LTD.</Copyright>
      </Container>
    </Wrapper>
  )
}

export default Component
