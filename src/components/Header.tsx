import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate}  from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
    const navigate = useNavigate()

    const handleNav = () => {
        navigate('/ShoppingCart');
    };
    const handleNavHome = () => {
        navigate('/');
    };


    return (
        <div>
        <AppBar position="static">
            <Toolbar>
                {/*Inside the IconButton, we
		can render various icons*/}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/*This is a simple Menu
			Icon wrapped in Icon */}
                    <MenuIcon />
                </IconButton>

                <IconButton color="inherit"
                            aria-label="menu"><SearchIcon /></IconButton>

                {/* The Typography component applies
		default font weights and sizes */}

                <Typography variant="h6"
                            component="div" sx={{ flexGrow: 1 }}
                            onClick={handleNavHome}>
                    Events App
                </Typography>
                <IconButton color="inherit"
                            aria-label="menu">
                    <ShoppingCartIcon onClick={handleNav}/>
                </IconButton>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    );



}
