import React, { useState, useContext } from 'react'
import { Grid, TextField, Box, Button as ButtonBase } from '@material-ui/core'
import { useStyles, Button } from './Styles'
import { Footer } from 'components'
import Div100vh from 'react-div-100vh'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { navigate } from '@reach/router'
import { registerThumb } from 'assets/images'
import { AuthContext, AuthContextProvider, AuthProvider } from 'smart-components'

const today = new Date()
const initialRegister = {
  name: '',
  userid: '',
  email: '',
  phone: '',
  birthdate: `${today.getDate() >= 10 ? today.getDate() : `0${today.getDate()}`}/${
    today.getMonth() >= 10 ? today.getMonth() : `0${today.getMonth()}`
  }/${(today.getFullYear() - 6).toString()}`,
  pincode: '',
  userPass: '',
  userPassConfirmation: ''
}

const Register: React.FC = () => {
  const [register, setRegister] = useState(initialRegister)
  const { handlers, state } = useContext<AuthContext>(AuthContextProvider)

  const handleChangeRegister = (label: string, value: string) => {
    setRegister({
      ...register,
      [label]: value
    })
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleRegister = async () => {
    await handlers.onRegister(
      Object.assign({}, register, {
        birthdate: register.birthdate.replace('\n', '').split('/').reverse().join('-')
      })
    )
  }

  const classes = useStyles()
  console.log(register.birthdate.split('/').reverse().join('-'))
  return (
    <Div100vh>
      {!state.response && (
        <Grid container className={classes.root} alignItems={'center'} justify={'flex-end'}>
          <Grid item lg={4} xs={12}>
            <form
              onSubmit={onSubmit}
              className={[classes.form, 'd-flex flex-column justify-content-end align-items-end'].join(' ')}
            >
              <p className={classes.title}>Entrar</p>
              <p className={classes.subtitle}>Entre usando suas credenciais ou cair uma conta ao lado!</p>

              <TextField id="outlined-read-only-input" label="Nome de usuário" defaultValue="" variant="outlined" />
              <Box mb={4} />
              <TextField id="outlined-read-only-input" label="Senha" defaultValue="" variant="outlined" />
              <Button disabled>
                <ChevronRightIcon />
              </Button>
            </form>
          </Grid>
          <Grid item xl={5} lg={6} md={12}>
            <form
              className={[
                classes.form,
                classes.bordered,
                'd-flex flex-column justify-content-end align-items-start'
              ].join(' ')}
              onSubmit={(e) => e.preventDefault()}
            >
              <p className={classes.title}>Crie uma conta!</p>
              <p className={classes.subtitle} style={{ textAlign: 'left' }}>
                É necessário criar uma conta para ter acesso a nossos sistemas!
              </p>
              <p className={classes.errorMessage}>{state.error}</p>
              <Grid container spacing={4}>
                <Grid item md={6}>
                  <TextField
                    className={'w-100'}
                    type={'string'}
                    label="Nome de usuário"
                    value={register.userid}
                    onChange={(e) => handleChangeRegister('userid', e.target.value)}
                    variant="outlined"
                    autoComplete={'false'}
                    autoCorrect={'false'}
                    error={state.validationError.hasOwnProperty('userid')}
                    inputProps={{
                      maxLength: 24,
                      minLength: 4
                    }}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <p className={classes.validationError}>{state.validationError['userid']}</p>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    className={'w-100'}
                    value={register.name}
                    onChange={(e) => handleChangeRegister('name', e.target.value)}
                    label="Nome"
                    variant="outlined"
                    autoComplete={'false'}
                    autoCorrect={'false'}
                    error={state.validationError.hasOwnProperty('name')}
                    inputProps={{
                      maxLength: 24,
                      minLength: 8
                    }}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <p className={classes.validationError}>{state.validationError['name']}</p>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    className={'w-100'}
                    value={register.email}
                    onChange={(e) => handleChangeRegister('email', e.target.value)}
                    error={state.validationError.hasOwnProperty('email')}
                    label="Email"
                    variant="outlined"
                    autoComplete={'false'}
                    autoCorrect={'false'}
                    type={'email'}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <p className={classes.validationError}>{state.validationError['email']}</p>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    className={'w-100'}
                    value={register.phone}
                    onChange={(e) => handleChangeRegister('phone', e.target.value)}
                    error={state.validationError.hasOwnProperty('phone')}
                    label="Telefone"
                    variant="outlined"
                    autoComplete={'false'}
                    autoCorrect={'false'}
                    type={'tel'}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <p className={classes.validationError}>{state.validationError['phone']}</p>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    className={'w-100'}
                    value={register.birthdate}
                    onChange={(e) => handleChangeRegister('birthdate', e.target.value)}
                    error={state.validationError.hasOwnProperty('birthdate')}
                    label="Data de nascimento"
                    variant="outlined"
                    autoComplete={'false'}
                    autoCorrect={'false'}
                    inputProps={{
                      min: '1920-01-01',
                      max: '2015-01-01',
                      defaultValue: register.birthdate
                    }}
                    InputLabelProps={{
                      shrink: true
                    }}
                    type={'date'}
                  />
                  <p className={classes.validationError}>{state.validationError['birthdate']}</p>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    className={'w-100'}
                    value={register.pincode}
                    onChange={(e) => handleChangeRegister('pincode', e.target.value)}
                    label="Pin Code (4 dígitos)"
                    variant="outlined"
                    autoComplete={'false'}
                    autoCorrect={'false'}
                    error={state.validationError.hasOwnProperty('pincode')}
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      maxLength: 4,
                      minLength: 4
                    }}
                  />
                  <p className={classes.validationError}>{state.validationError['pincode']}</p>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    className={'w-100'}
                    value={register.userPass}
                    onChange={(e) => handleChangeRegister('userPass', e.target.value)}
                    error={state.validationError.hasOwnProperty('userPass')}
                    label="Senha"
                    variant="outlined"
                    autoComplete={'false'}
                    autoCorrect={'false'}
                    type={'password'}
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      maxLength: 24,
                      minLength: 6
                    }}
                  />
                  <p className={classes.validationError}>{state.validationError['userPass']}</p>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    className={'w-100'}
                    value={register.userPassConfirmation}
                    onChange={(e) => handleChangeRegister('userPassConfirmation', e.target.value)}
                    error={state.validationError.hasOwnProperty('userPassConfirmation')}
                    label="Confirmação de senha"
                    variant="outlined"
                    autoComplete={'false'}
                    autoCorrect={'false'}
                    type={'password'}
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      maxLength: 24,
                      minLength: 6
                    }}
                  />
                  <p className={classes.validationError}>{state.validationError['userPassConfirmation']}</p>
                </Grid>
              </Grid>
              <Button type={'submit'} onClick={() => handleRegister()}>
                <ChevronRightIcon />
              </Button>
            </form>

            <img src={registerThumb} alt="Registrar" className={classes.registerThumb} />
          </Grid>
        </Grid>
      )}
      {state.response && (
        <Grid container className={classes.root} alignItems={'center'} justify={'center'} direction={'column'}>
          <p className={classes.titleMessage}>Parabéns! Sua conta foi criada!</p>
          <p className={classes.descMessage}>Você já pode usar suas credenciais para se logar em nosso servidor!</p>
          <img src={registerThumb} alt="Registrar" className={classes.registerThumb} />
        </Grid>
      )}
      <div className={classes.backButton}>
        <ButtonBase
          aria-label="Voltar"
          component="span"
          className={classes.backButtonStyle}
          onClick={() => navigate(`/`)}
        >
          <ArrowBackIcon /> Voltar
        </ButtonBase>
      </div>
      <Footer />
    </Div100vh>
  )
}

export default () => (
  <AuthProvider>
    <Register />
  </AuthProvider>
)
