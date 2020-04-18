import React from 'react'
import { useStyles } from './Styles'
import { Typography } from '@material-ui/core/'

const Component: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography>Copyright 2020</Typography>
      <Typography>Todos os direitos reservados a Panda Ragnarok Online</Typography>
    </div>
  )
}

export default Component
