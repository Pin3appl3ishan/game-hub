import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.svg'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='48px'/>
        <h4>Navbar</h4>
    </HStack>
  )
}

export default NavBar