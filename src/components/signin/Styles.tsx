import styled from 'styled-components'
import { Row } from 'react-bootstrap'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
  background: white;
  width: 80%;
  box-shadow: 6px 10px 0 0 rgb(51, 0, 118, 0.16);
  padding: 40px 55px;
  justify-content: start;
`
export const LoginText = styled.p({
  fontSize: 15,
  color: '#330076',
  margin: 0,
  fontWeight: 600,
  textTransform: 'uppercase'
})

export const Button = styled.button({
  borderRadius: 30,
  textTransform: 'uppercase',
  background: '#7944B7',
  color: 'white',
  padding: '5px 15px',
  display: 'block',
  fontSize: 12,
  outline: 0,
  border: 'none'
})

export const InputField = styled.input({
  borderRadius: 30,
  padding: '7px 15px',
  background: '#E5E5E5',
  width: '100%',
  border: 'none',
  marginTop: 15,
  fontSize: 12,
  outline: 'none'
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

export const EnterButton = styled.button({
  color: 'white',
  background: '#7944B7',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 11,
  width: 45,
  height: 40,
  outline: 0,
  border: 'none',
  marginTop: 15
})

export const ErrorMessage = styled.p({
  color: '#CB2D43',
  fontSize: 12,
  padding: '5px 0',
  margin: 0,
  display: 'flex',
  alignItes: 'center'
})

export const SuccessMessage = styled.p({
  color: '#04AB63',
  fontSize: 12,
  padding: '5px 0',
  margin: 0,
  display: 'flex',
  alignItes: 'center'
})

export const RegisterRow = styled(Row)({})
