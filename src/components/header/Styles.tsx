import styled from 'styled-components'
import { headerBackground } from 'assets/images'

export const Wrapper = styled.div`
  height: 455px;
  background: #320076;
`

export const BackgroundImage = styled.div({
  backgroundImage: `url(${headerBackground})`,
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: 585,
  top: 0,
  position: 'absolute',
  zIndex: 0
})
