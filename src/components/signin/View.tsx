import React, { useContext, useState, useEffect } from 'react'
import {
  Wrapper,
  LoginText,
  RegisterRow,
  Button,
  InputField,
  EnterButton,
  ErrorMessage,
  SuccessMessage
} from './Styles'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { AuthProvider, AuthContext, AuthContextProvider } from 'smart-components'
import IUser from 'common/types/IUser'

const initialState = {
  userid: '',
  user_pass: '',
  user_pass_confirmation: '',
  email: ''
}

const Component: React.FC = () => {
  const [user, setUser] = useState<IUser>(initialState)
  const authContext = useContext<AuthContext>(AuthContextProvider)

  const handleSubmit = () => {
    authContext.handlers.onRegister(user)
  }

  const handleChangeValue = (label: string, value: any) => {
    setUser({
      ...user,
      [label]: value
    })
  }

  useEffect(() => {
    if (authContext.state.response) setUser(initialState)
  }, [authContext.state.response])

  return (
    <Wrapper>
      {/* <RegisterRow noGutters className={'justify-content-between align-items-center w-100'}>
        <Col>
          <LoginText>Login</LoginText>
        </Col>
        <Col className={'d-flex justify-content-end'}>
          <Button>Register</Button>
        </Col>
      </RegisterRow>
      <InputField placeholder={'username'} />
      <InputField placeholder={'password'} type={'password'} />
      <Link href={'#'}>Esqueceu sua senha?</Link>
      <Row className={'justify-content-end w-100'}>
        <EnterButton>
          <FontAwesomeIcon icon={faChevronRight} style={{ color: 'white', fontSize: 12 }} />
        </EnterButton>
      </Row> */}
      <RegisterRow noGutters className={'justify-content-between align-items-center w-100'}>
        <Col>
          <LoginText>Register</LoginText>
        </Col>
        <Col className={'d-flex justify-content-end'}>
          <Button>Entrar</Button>
        </Col>
      </RegisterRow>
      <form onSubmit={e => e.preventDefault()}>
        <InputField
          placeholder={'nome de usuário'}
          value={user.userid}
          onChange={e => handleChangeValue('userid', e.target.value)}
        />
        <InputField
          placeholder={'senha'}
          type={'password'}
          value={user.user_pass}
          onChange={e => handleChangeValue('user_pass', e.target.value)}
        />
        <InputField
          placeholder={'confirmação de senha'}
          type={'password'}
          value={user.user_pass_confirmation}
          onChange={e => handleChangeValue('user_pass_confirmation', e.target.value)}
        />
        <InputField
          placeholder={'email'}
          type={'email'}
          value={user.email}
          onChange={e => handleChangeValue('email', e.target.value)}
        />
        {authContext.state.error && <ErrorMessage>{authContext.state.error}</ErrorMessage>}
        {authContext.state.response && <SuccessMessage>Usuário registrado com sucesso!</SuccessMessage>}
        <Row className={'justify-content-end w-100'}>
          <EnterButton onClick={handleSubmit} type={'submit'}>
            <FontAwesomeIcon icon={faChevronRight} style={{ color: 'white', fontSize: 12 }} />
          </EnterButton>
        </Row>
      </form>
    </Wrapper>
  )
}

Component.defaultProps = {
  color: 'white',
  title: '',
  top: 0,
  left: 0
}

export default () => (
  <AuthProvider>
    <Component />
  </AuthProvider>
)
