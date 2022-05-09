import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position='fixed' className= {classes.appBar} color='inherit'>
                <Toolbar>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div> )}
                    <Typography component={Link} to='/' variant='h5' className={classes.title} color='inherit'>
                        <img src={logo} alt="Giliz" height="25px" className={classes.image}/>
                        טופס הזמנה גילי'ז
                    </Typography>
                </Toolbar>
            </AppBar> 
        </>
    )
}

export default Navbar
