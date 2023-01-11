import React from 'react'
import NavBarContainer from './NavBarContainer'
import Logo from './Logo'
import MenuToggle from './MenuToggle'
import MenuLinks from './MenuLinks'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["black", "black", "primary.500", "primary.500"]}
      />
      <h1>hola</h1>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

export default NavBar