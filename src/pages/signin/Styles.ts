import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Button as ButtonBase } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: 'calc(100% - 130px)',
    background: 'black',
    padding: '0 180px',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 3,
    '& .MuiTextField-root': {
      color: 'white',
      width: 300,
      fontSize: 12,
      borderColor: 'white'
    },
    '& .MuiInputLabel-outlined': {
      color: 'white',
      transform: 'translate(20px, 12px) scale(1)'
    },
    '& .MuiInputLabel-shrink': {
      color: 'white',
      transform: 'translate(20px, -6px) scale(0.85)'
    },
    '& .MuiInputBase-root': {
      color: 'white'
    },
    '& .MuiFormLabel-root': {
      fontSize: 12
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      borderRadius: 10
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white !important',
      borderRadius: 10
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      borderRadius: 10
    },
    '& .MuiInputBase-input': {
      fontSize: 12,
      padding: '10px 20px',
      height: 'auto'
    },
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: '#f44336'
    },
    '&:before': {
      content: "' '",
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 0,
      backgroundImage: 'linear-gradient(to right, black, rgb(0,0,0,0))'
    }
  },
  title: {
    textAlign: 'right',
    color: 'white',
    fontSize: 32,
    fontWeight: 800,
    margin: 0,
    zIndex: 4
  },
  subtitle: {
    textAlign: 'right',
    color: '#B2B2B2',
    fontSize: 14,
    zIndex: 4
  },
  form: {
    padding: '0 50px'
  },
  bordered: {
    borderLeft: '1px solid white'
  },
  backButton: {
    position: 'absolute',
    left: 30,
    top: 30,
    zIndex: 5
  },
  backButtonStyle: {
    color: 'white',
    fontSize: 12
  },
  registerThumb: {
    position: 'absolute',
    left: 0,
    bottom: -100,
    height: '90%',
    zIndex: -1
  },
  errorMessage: {
    color: '#f44336',
    fontSize: 12,
    zIndex: 2
  },
  validationError: {
    position: 'absolute',
    color: '#f44336',
    fontSize: 12
  },
  titleMessage: {
    fontWeight: 700,
    fontSize: 40,
    color: 'white',
    margin: 0,
    zIndex: 4
  },
  descMessage: {
    fontWeight: 300,
    fontSize: 20,
    color: 'white',
    margin: 0,
    zIndex: 4
  }
}))

export const Button = withStyles({
  root: {
    color: 'white',
    marginTop: 20,
    background: '#318AF0',
    borderRadius: 10,
    fontSize: 12,
    wiidth: 40,
    height: 40,
    '&:hover': {
      background: '#3A4F76'
    }
  }
})(ButtonBase)
