import styled from 'styled-components'
import { IStyled } from './Interface'
import { Col } from 'react-bootstrap'

export const Wrapper = styled(Col)<IStyled>`
  display: flex;
  flex-direction: column;
  border-radius: 28px;
  width: 100%;
  height: 150px;
  box-shadow: 0 0 6px 3px rgb(51, 0, 118, 0.16);
  justify-content: center;
  align-items: center;
  background: white;
  margin: 0 15px !important;
`

export const Title = styled.p<IStyled>`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: black;
  text-align: center;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0;
  line-height: 1.2;
`

export const Subtitle = styled.p<IStyled>`
  font-size: 13px;
  font-weight: 200;
  color: ${({ color }) => color};
  text-align: center;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  line-height: 1.2;
`
