import React, { useState } from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    const [select, setSelect] = useState(0);
    return (
        <div>
            <Card style={{ height : '650px', position: 'relative'}} className={classes.root}>
                <CardMedia className={classes.media} image={product.image.url} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent, classes.text}>
                        <Typography variant='h5'>
                            {/*This gets rid of all english characters a-z from the title */}
                            {product.name.replace(/[a-z]/g, "")} 
                        </Typography>
                    </div>
                    <Typography className={classes.text} dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' />
                </CardContent>
                    <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton style= {{ position: 'absolute', left:'0', bottom:'0', right:'0'}} aria-label='Add to Cart' onClick={ () => onAddToCart(product, select)
                     }>
                        <AddShoppingCart />
                        <Typography variant='h6'>הוסף לעגלה</Typography>
                    </IconButton>
                    <select style= {{ border:'1px solid black', borderRadius:'30%',fontSize:'1.1rem',height:'2rem',position: 'absolute', right:'100px', bottom:'83px'}} className={classes.menu} value={select} onChange={(e =>setSelect(e.target.value))} name="numOfItems" id="quantity">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <Typography style= {{ fontSize:'1.4rem', position: 'absolute', right:'0px', bottom:'80px'}} variant='subtitle1'>
                            בחר כמות 
                        </Typography>
                    <Typography style= {{ display: 'inline-block', position:'absolute', bottom:'150px'}} variant='h6' gutterBottom>
                           {product.price.formatted_with_symbol} 
                    </Typography>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
