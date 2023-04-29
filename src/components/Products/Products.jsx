import React from "react";
import {Button, Grid} from '@material-ui/core';
import {Navbar} from '../../components';

import Product from "./Product/Product";

import useStyles  from "./styles";
import {Link} from 'react-router-dom'

const Products = ({ products, onAddToCart, cart}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <Navbar totalItems={cart.total_items}/>
            <div className={classes.toolbar}/>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key = {product.id} xs={6} sm={4} md={3} lg={2}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))
                }
            </Grid>
            <Button className={classes.toCartButton} component={Link} to='/cart' color="secondary">לעגלה</Button>
        </main>
    );

}

export default Products;