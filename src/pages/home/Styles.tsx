import styled from 'styled-components'
import { Col } from 'react-bootstrap'

export const Column = styled(Col)({
  position: 'relative',
  display: 'flex',
  height: '100%',
  marginTop: -10
})

export const Divider = styled.div({
  width: '100%',
  borderBottom: '1px solid #CC9FFF',
  position: 'relative',
  paddingTop: 60
})

export const LeftDots = styled.div({
  position: 'absolute',
  left: 0,
  bottom: -10.8
})

export const RightDots = styled.div({
  position: 'absolute',
  right: 0,
  bottom: -10.8
})

export const Center = styled.div({
  position: 'absolute',
  right: '50%',
  bottom: -12,
  transform: 'translateX(50%)'
})

export const PlaceholderText = styled.p({
  fontSize: 14,
  textAlign: 'center',
  paddingTop: 30
})
