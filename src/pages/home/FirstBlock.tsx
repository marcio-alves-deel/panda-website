import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles, Typography } from './Styles'
import { Header } from 'components'
import { Fade } from 'react-awesome-reveal'
import { Link } from '@reach/router'
import Div100vh from 'react-div-100vh'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { logo } from 'assets/images'

const Component: React.FC = () => {
  const classes = useStyles()
  return (
    <Div100vh>
      <Grid container className={classes.root}>
        <Header />
        <div className={classes.signInSection}>
          <Fade delay={1000} direction={'right'} triggerOnce>
            <Typography variant={'body1'}>
              <Link to="/registrar">Registre-se</Link> ou faça o <Link to="/registrar">Sign in</Link> para continuar.
            </Typography>
          </Fade>
        </div>
        {/* <Navigation /> */}
        <img src={logo} alt="Panda Ragnarok" className={classes.logo} />
        <div className={classes.floatingArrow}>
          <ArrowDownwardIcon className={classes.floatingArrowAnimation} style={{ color: 'white' }} />
        </div>
      </Grid>
    </Div100vh>
  )
}

export default Component
