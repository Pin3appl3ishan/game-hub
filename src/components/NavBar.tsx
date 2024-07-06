import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.svg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding='20px'>
        <Image src={logo} boxSize='48px'/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar