import React from 'react'
import { Col } from 'react-bootstrap'
import { Link, ListItem, NavigationList, NavigationRow } from './Styles'

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
  },
  {
    label: 'Doações',
    link: '/'
  },
  {
    label: 'Rankings',
    link: '/'
  },
  {
    label: 'Comércio',
    link: '/'
  }
]

const Component: React.FC = () => {
  return (
    <NavigationRow noGutters>
      <Col>Logo</Col>
      <NavigationList>
        {menuItems.map(menu => {
          return (
            <ListItem>
              <Link href={menu.link}>{menu.label}</Link>
            </ListItem>
          )
        })}
      </NavigationList>
    </NavigationRow>
  )
}

export default Component
