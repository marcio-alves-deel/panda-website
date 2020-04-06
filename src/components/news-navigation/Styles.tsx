import styled from 'styled-components'
import { Row } from 'react-bootstrap'

export const Link = styled.a({
  fontSize: 20,
  color: '#9D9D9D',
  fontWeight: 600,
  position: 'relative',
  '&:hover': {
    textDecoration: 'none',
    color: '#340076',
    '&:before': {
      width: '100%',
      transition: '.2s'
    }
  },
  '&:before': {
    content: "''",
    width: '0',
    height: 2,
    background: '#340076',
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    transition: '.2s'
  }
})

export const ListItem = styled.li({
  display: 'inline-flex',
  margin: '0 10px'
})

export const NavigationList = styled.ul({
  padding: 0,
  margin: 0,
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)'
})

export const NavigationRow = styled(Row)({
  height: 40,
  alignItems: 'center',
  paddingTop: 50,
  position: 'relative',
  zIndex: 1
})