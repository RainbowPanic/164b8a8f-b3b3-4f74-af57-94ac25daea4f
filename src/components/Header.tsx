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
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@material-ui/core/styles';

type HeaderProps = {
    handleOnChange: (query: string) => void; // funktion zum filtern der Events
}

const useStyles = makeStyles({
    stickyHeader: {
        position: 'sticky',
        zIndex: 7
    },
});
export const Header = (props: HeaderProps) => {
    const navigate = useNavigate()

    const handleNav = () => {
        navigate('/ShoppingCart');
    };
    const handleNavHome = () => {
        navigate('/');
    };

    const [query, setQuery] = React.useState('');
    const handleChange = () => {

        const searchInput = document.getElementById('search') as HTMLInputElement;
        const searchText = searchInput.value;

        setQuery(searchText);
        props.handleOnChange(searchText);
    };

    const classes = useStyles();
    return (
        <div className={classes.stickyHeader}>
        <AppBar>
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
                    <HomeIcon onClick={handleNavHome}/>
                </IconButton>
                    <TextField
                        id="search"
                        type="search"
                        label="Search"
                        value={query}
                        onChange={handleChange}
                        sx={{width: 300 }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                {/* The Typography component applies
		default font weights and sizes */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

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
