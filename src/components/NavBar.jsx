import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from "@chakra-ui/react"

const NavBar = () => {
    return(
        <>
         <Flex>
            <Box p='8'>
                Caffe de Ale
            </Box>
            <Spacer />
            <Box p='8'>
                <Menu>
                <MenuButton >
                Categorias
                </MenuButton>
            <MenuList>
                <MenuItem>Cafe latte</MenuItem>
                <MenuItem>Expresso</MenuItem>
            </MenuList>
        </Menu>
            </Box>
            <Spacer />
            <Box p='8'>
               <CartWidget/>
            </Box>
        </Flex>
       
        
        </>
        
    )
}
export default NavBar