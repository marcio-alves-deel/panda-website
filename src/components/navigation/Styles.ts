import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 120,
    zIndex: 5,
    left: '50%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('md')]: {
      top: 80
    },
    [theme.breakpoints.down('sm')]: {
      top: 68,
      left: 68,
      transform: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      top: 30,
      left: 30,
      transform: 'none'
    }
  },
  menuList: {
    padding: 0,
    margin: 0
  },
  menuItem: {
    display: 'inline-flex'
  },
  linkStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 900,
    padding: '0 25px',
    position: 'relative',
    '&:after': {
      content: "' '",
      position: 'absolute',
      width: 0,
      height: 1,
      bottom: -10,
      background: 'white',
      left: '50%',
      transform: 'translateX(-50%)',
      transition: '.2s'
    },
    '&:hover': {
      color: 'white',
      textDecoration: 'none',
      '&:after': {
        width: '100%',
        transition: '.2s'
      }
    },
    [theme.breakpoints.down('md')]: {
      '@media (max-width: 1024px)': {
        fontSize: 22
      }
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      lineHeight: '35px'
    }
  },
  list: {
    width: 250,
    marginTop: 80
  }
}))
