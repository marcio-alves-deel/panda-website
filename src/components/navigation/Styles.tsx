import styled from 'styled-components'
import { Row } from 'react-bootstrap'

export const Link = styled.a({
  fontSize: 18,
  color: 'white',
  fontWeight: 200,
  position: 'relative',
  '&:hover': {
    textDecoration: 'none',
    color: 'white',
    '&:before': {
      width: '100%',
      transition: '.2s'
    }
  },
  '&:before': {
    content: "''",
    width: '0',
    height: 1,
    background: 'white',
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
