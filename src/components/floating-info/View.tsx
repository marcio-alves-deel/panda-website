import React from 'react'
import { Wrapper, Title } from './Styles'
import { IProps } from './Interface'

const Component: React.FC<IProps> = ({ icon, title, color, top, left }) => {
  return (
    <Wrapper top={top} left={left}>
      <img src={icon} alt={title} />
      <Title color={color}>{title}</Title>
    </Wrapper>
  )
}

Component.defaultProps = {
  color: 'white',
  title: '',
  top: 0,
  left: 0
}

export default Component
