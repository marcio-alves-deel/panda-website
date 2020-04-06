import React from 'react'
import { Wrapper, Title, Subtitle } from './Styles'
import { IProps } from './Interface'

const Component: React.FC<IProps> = ({ title, color, top, left, subtitle }) => {
  return (
    <Wrapper top={top} left={left}>
      <Title color={color}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
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
