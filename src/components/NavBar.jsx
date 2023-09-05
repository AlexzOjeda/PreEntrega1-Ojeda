import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Button} from "@chakra-ui/react"

const NavBar = () => {
    return(
        <>
         <Flex  display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            py={12}
            bgImage="url('https://img.freepik.com/premium-photo/light-grunge-coffee-background-with-stone-texture-copy-space-top-view_124507-10657.jpg?w=2000')"
            bgPosition='bottom'
            bgRepeat='no-repeat'
            mb={2}>
            <Box as='button' borderRadius='md' bg='white' color='Black' px={10} h={10} fontSize='20px'>
                Caffe de Ale
            </Box>
            <Spacer />
            <Box p='8'>
                <Menu>
                        <MenuButton as={Button} borderRadius='md' bg='white' color='Black' px={10} h={10} fontSize='20px'>
                        Categorias
                        </MenuButton>
                         <MenuList>
                        <MenuItem>Cafe latte</MenuItem>
                        <MenuItem>Expresso</MenuItem>
                    </MenuList>
                 </Menu>
            </Box>
            <Spacer />
            <Box as='button' borderRadius='md' bg='white' color='Black' px={10} h={20} fontSize='20px'>
               <CartWidget/>
            </Box>
        </Flex>
       
        
        </>
        
    )
}
export default NavBar