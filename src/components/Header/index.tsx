'use client'

import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Nav from './Nav'
import ContactUsButton from './ContactUsButton'

const drawerWidth = 240;

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const handleDrawerClose = () => {
        setIsClosing(true)
        setMobileOpen(false)
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false)
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen)
        }
    };

    const drawer = (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100%", padding: "50px 0" }}>
            <Typography variant="h6" noWrap component="div" color="#000000">
                Raylaw
            </Typography>
            <Nav sidebar />
            <ContactUsButton sidebar />
        </Box>
    )

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: "100%",
                    height: "80px",
                    backgroundColor: "#FAFAFA",
                    justifyContent: "center"
                }}
            >
                <Toolbar sx={{ justifyContent: "space-around" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon sx={{ color: "#000000" }} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" color="#000000">
                        Raylaw
                    </Typography>
                    <Nav />
                    <ContactUsButton />
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >

                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}