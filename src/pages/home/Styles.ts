import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Typography as TypographyBase, Button as ButtonBase } from '@material-ui/core'
import { background } from 'assets/images'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center-bottom',
    background: 'black',
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
      content: "' '",
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      backgroundImage: 'linear-gradient(to right, black, rgb(0,0,0,0))'
    },
    '&:after': {
      content: "' '",
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1,
      background: 'rgba(0,0,0,.54)',
      clipPath: 'polygon(70% 0, 100% 0%, 100% 100%, 0% 100%)',
      width: '50%',
      height: '100vh',
      '@media (max-width: 959px)': {
        display: 'none'
      }
    }
  },
  secondBlockRoot: {
    width: '100%',
    minHeight: '100%',
    background: '#151312',
    position: 'relative',
    padding: '70px 230px',
    zIndex: 1,
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      padding: '30px 130px',
      '@media (max-width: 1024px)': {
        justifyContent: 'space-around',
        alignItems: 'space-around'
      }
    },
    [theme.breakpoints.down('sm')]: {
      padding: '50px 30px'
    }
  },
  thirdBlockRoot: {
    width: '100%',
    minHeight: '100%',
    background: 'black',
    position: 'relative',
    padding: '70px 230px',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      padding: '30px 130px',
      '@media (max-width: 1024px)': {
        justifyContent: 'space-around',
        alignItems: 'space-around'
      }
    },
    [theme.breakpoints.down('sm')]: {
      padding: '50px 30px'
    }
  },
  signInSection: {
    position: 'absolute',
    width: 130,
    right: '7%',
    top: 120,
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      top: 80,
      right: '5%',
      '@media (max-width: 1024px)': {
        bottom: 80,
        top: 'unset',
        width: '100%',
        left: 0,
        rigth: 'unset',
        transform: 'none'
      }
    },
    [theme.breakpoints.down('sm')]: {
      bottom: 110,
      top: 'unset',
      width: '100%',
      left: 0,
      rigth: 'unset',
      transform: 'none'
    }
  },
  floatingArrow: {
    position: 'absolute',
    left: '50%',
    bottom: 50,
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      bottom: 20
    }
  },
  floatingArrowAnimation: {
    animation: '$myEffectExit 1.5s ease-in-out infinite',
    border: '1px solid white',
    borderRadius: '50%',
    padding: 5
  },
  '@keyframes myEffectExit': {
    '0%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translateY(-100%)'
    },
    '100%': {
      transform: 'translateY(0)'
    }
  },
  outerTitle: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 70
  },
  infosLeft: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  infosRight: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      fontSize: 10
    }
  },
  infosItem: {
    display: 'table',
    color: 'white',
    fontSize: 12,
    background: 'rgb(0,0,0)',
    padding: '10px 15px',
    borderRadius: 12,
    margin: '4px 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: 10
    }
  },
  infoValue: {
    fontWeight: 200
  },
  infosIcon: {
    borderRadius: '50%',
    background: 'white',
    color: 'black',
    display: 'inline-table',
    margin: 0,
    width: 15,
    height: 15,
    textAlign: 'center'
  },
  infoCard: {
    background: 'rgba(0,0,0,.77)',
    padding: 30,
    display: 'flex',
    flex: 1,
    boxShadow: '0 3px 10px 5px rgba(0,0,0,.30)',
    flexDirection: 'column'
  },
  infoCardTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 700
  },
  infoCardDescription: {
    color: 'white',
    fontSize: 10,
    fontWeight: 200,
    paddingTop: 10
  },
  floatingInfoThumb: {
    position: 'absolute',
    zIndex: -1,
    height: '70%',
    bottom: '00%'
  },
  downloadCard: {
    padding: 30,
    borderRadius: 30,
    border: '1px solid white',
    display: 'flex',
    flex: 1,
    boxShadow: '0 3px 10px 5px rgba(0,0,0,.30)',
    flexDirection: 'column'
  },
  downloadCardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center'
  },
  downloadCardDescription: {
    color: 'white',
    fontSize: 12,
    fontWeight: 200,
    paddingTop: 10
  },
  cardGrid: {
    display: 'flex',
    flex: 1,
    '@media (max-width:959px)': {
      display: 'block',
      flex: 'unset',
      flexGrow: 0
    }
  },
  donationRule: {
    background: 'black',
    padding: '15px 30px',
    color: 'white',
    borderRadius: 8,
    fontWeight: 300
  },
  vipContainer: {
    margin: 0,
    padding: 0,
    marginTop: 20
  },
  vipItem: {
    padding: '10px 15px',
    background: '#6E6E6E',
    borderRadius: 30,
    display: 'table',
    margin: '5px 0',
    color: 'white',
    fontSize: 12,
    fontWeight: 500,
    '@media (max-width: 959px)': {
      fontSize: 11
    }
  },
  vipIcon: {
    borderRadius: '50%',
    background: 'white',
    color: 'black',
    display: 'inline-table',
    margin: 0,
    padding: '5',
    width: 20,
    height: 20,
    textAlign: 'center'
  },
  donateThumb: {
    position: 'absolute',
    top: '65%',
    height: 700,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: -1
  },
  logo: {
    position: 'absolute',
    zIndex: 5,
    left: '50%',
    transform: 'translateX(-50%)',
    top: 120,
    [theme.breakpoints.down('lg')]: {
      height: 70
    },
    [theme.breakpoints.down('md')]: {
      height: 100
    },
    [theme.breakpoints.down('sm')]: {
      height: 130
    },
    [theme.breakpoints.down('xs')]: {
      height: 80
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
  h2: {
    fontSize: 28,
    lineHeight: '35px',
    fontWeight: 600,
    color: 'white',
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
      lineHeight: '55px',
      '@media (max-width: 1024px)': {
        fontSize: 60,
        lineHeight: '55px'
      }
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 22,
      width: '100%'
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
  },
  subtitle2: {
    color: '#656565',
    fontSize: 16,
    fontWeight: 100,
    [theme.breakpoints.down('md')]: {
      fontSize: 20
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    }
  },
  caption: {
    fontSize: 12,
    fontWeight: 200,
    lineHeight: '13px',
    margin: 0,
    marginTop: 30,
    padding: '0 12%',
    minWidth: 500,
    color: 'white',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '0',
      padding: 0,
      fontSize: 12
    }
  },
  body1: {
    fontSize: 12,
    color: 'white',
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3vw',
      textAlign: 'center'
    }
  },
  body2: {
    fontSize: 12,
    color: 'white',
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      textAlign: 'center'
    }
  },
  h3: {
    fontSize: 18,
    lineHeight: '35px',
    fontWeight: 600,
    color: 'white',
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
      lineHeight: '55px',
      '@media (max-width: 1024px)': {
        fontSize: 30,
        lineHeight: '55px'
      }
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      width: '100%'
    }
  }
})(TypographyBase)

export const Button = withStyles({
  root: {
    color: 'black',
    background: 'white',
    borderRadius: 50,
    fontSize: 12,
    padding: '10px 50px'
  }
})(ButtonBase)
