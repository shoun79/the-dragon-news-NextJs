"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '@/assets/logo.png'
import Image from 'next/image';

import Link from 'next/link';
import SocialIcons from '../SocialIcons/SocialIcons';
import NavMenu from '../NavMenu/NavMenu';
import Header from './Header';



function Navbar() {


    return (
        <>
            <Header />
            <AppBar position="static" className='bg-black'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image width={100} height={100} src={logo} alt='logo' />

                        <NavMenu></NavMenu>
                        <SocialIcons></SocialIcons>


                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;
