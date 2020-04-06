import styled from 'styled-components'
import { Row } from 'react-bootstrap'

export const CardRow = styled(Row)({
  display: 'flex',
  marginTop: -20
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

export const H1 = styled.h1({
  fontSize: 18,
  color: 'black',
  textTransform: 'uppercase',
  paddingTop: 35,
  paddingBottom: 15
})

export const InfoList = styled(Row)({})

export const InfoItem = styled.p({
  fontWeight: 600
})
export const InfoDescription = styled.p({
  margin: 0,
  color: '#7944B7',
  fontSize: 14,
  fontWeight: 200
})

export const SystemInfo = styled.p({
  fontWeight: 16,
  color: '#FF84A6'
})

export const SystemDescription = styled.p({
  fontSize: 14,
  fontWeight: 200,
  color: '#9D9D9D',
  display: 'block !important',
  width: '100%'
})

export const TopMessage = styled.p({
  padding: '0 150px',
  paddingTop: 150,
  fontSize: 16,
  textAlign: 'center',
  textStyle: 'italic',
  fontWeight: 200
})

export const Link = styled.a({
  fontSize: 12,
  color: '#4D4D4D',
  width: '100%',
  paddingTop: 5,
  '&:hover': {
    textTransform: 'none',
    color: '#4D4D4D'
  }
})
