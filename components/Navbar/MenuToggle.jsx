import React from "react"
import { Box, CloseIcon, HamburgerIcon } from "@chakra-ui/react"

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon/> : <HamburgerIcon />}
    </Box>
  )
}
export default MenuToggle
