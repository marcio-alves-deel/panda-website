import styled from 'styled-components'
import { IStyled } from './Interface'

export const Wrapper = styled.div<IStyled>`
  display: flex;
  flex-direction: column;
  border-radius: 28px;
  width: 192px;
  height: 165px;
  box-shadow: 0 0 6px 3px rgb(51, 0, 118, 0.16);
  justify-content: center;
  align-items: center;
  background: white;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  position: absolute;
  transform: translateX(-${({ left }) => left});
`

export const Title = styled.p<IStyled>`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ color }) => color};
  text-align: center;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0;
  line-height: 1.2;
`
