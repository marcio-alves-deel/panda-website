import React from 'react'
import { Link, ListItem, NavigationList, NavigationRow } from './Styles'

const menuItems = ['ALL', 'NOTICE', 'EVENTS', 'UPDATES']

const Component: React.FC = () => {
  return (
    <NavigationRow noGutters>
      <NavigationList>
        {menuItems.map(menu => {
          return (
            <ListItem>
              <Link href={menu}>{menu}</Link>
            </ListItem>
          )
        })}
      </NavigationList>
    </NavigationRow>
  )
}

export default Component
