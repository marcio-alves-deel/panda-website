import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Typography as TypographyBase } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core'
const theme = createMuiTheme()

export const useStyles = makeStyles(() => ({
  floatingHeader: {
    position: 'absolute',
    bottom: -25,
    left: -25,
    zIndex: 2
  },
  floatingHeaderImg: {
    maxHeight: 'calc(80vh)',
    [theme.breakpoints.down('md')]: {
      height: 900,
      maxHeight: '85vh'
    }
  },
  floatingHeaderMobile: {
    position: 'absolute',
    bottom: -25,
    left: -25,
    zIndex: 0
  },
  floatingHeaderImgMobile: {
    maxHeight: 'calc(80vh)',
    height: 900,
    transform: 'scaleX(-1)'
  },
  title: {
    position: 'absolute',
    zIndex: 2,
    left: '50%',
    top: '45%',
    width: 600,
    color: 'white',
    transform: 'translateX(-50%) translateY(-50%)',
    [theme.breakpoints.down('md')]: {
      width: 400,
      '@media (max-width: 1024px)': {
        width: 500
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      bottom: 150,
      top: 'unset',
      left: 0,
      padding: '0 80px',
      transform: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      bottom: 150,
      top: 'unset',
      left: 0,
      padding: '0 30px',
      transform: 'none'
    }
  }
}))

export const Typography = withStyles({
  h1: {
    fontSize: 80,
    letterSpacing: '-0px',
    lineHeight: '85px',
    fontWeight: 800,
    [theme.breakpoints.down('md')]: {
      fontSize: 50,
      lineHeight: '55px',
      '@media (max-width: 1024px)': {
        fontSize: 60,
        lineHeight: '55px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 60,
      lineHeight: '55px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '11.5vw',
      lineHeight: '14vw'
    }
  },
  subtitle1: {
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      '@media (max-width: 1024px)': {
        fontSize: '2vw',
        lineHeight: '2vw'
      }
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '35px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '3.5vw',
      lineHeight: '3.5vw'
    }
  }
})(TypographyBase)
