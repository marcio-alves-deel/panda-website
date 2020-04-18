import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useStyles } from './Styles'
import { Link } from '@reach/router'
import { Hidden } from '@material-ui/core/'

const menuItems = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Infos',
    link: '/infos'
  },
  {
    label: 'Download',
    link: '/download'
  }
]

const Component: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Fade delay={1000} triggerOnce>
          <ul className={classes.menuList}>
            {menuItems.map(item => {
              return (
                <li className={classes.menuItem}>
                  <Link to="#infos" className={classes.linkStyle}>
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </Fade>
      </Hidden>
    </div>
  )
}

export default Component
