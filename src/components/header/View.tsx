import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useStyles, Typography } from './Styles'
import { Hidden } from '@material-ui/core/'
import { headerImage, headerImageMobile } from 'assets/images'

const Component: React.FC = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Hidden smDown>
        <div className={classes.floatingHeader}>
          <img className={classes.floatingHeaderImg} src={headerImage} alt="Header" />
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.floatingHeaderMobile}>
          <img className={classes.floatingHeaderImgMobile} src={headerImageMobile} alt="Header" />
        </div>
      </Hidden>
      <div className={classes.title}>
        <Fade delay={500} direction={'bottom'} triggerOnce>
          <Typography variant={'subtitle1'}>Você ainda não descobriu a verdadeira diversão!</Typography>
        </Fade>
        <Fade direction={'top'} triggerOnce>
          <Typography variant={'h1'}>Crie uma conta e divirta-se!</Typography>
        </Fade>
      </div>
    </React.Fragment>
  )
}

export default Component
