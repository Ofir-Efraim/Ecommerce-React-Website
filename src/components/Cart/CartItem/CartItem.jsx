import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart}) => {
    const classes = useStyles();   
    const originalPrice = parseInt(item.line_total.formatted)
    const sumDiv = parseInt(item.quantity/2)
    if(item.name.includes("spread") && sumDiv > 0){
    item.line_total.raw = originalPrice
    item.line_total.raw -= sumDiv * 5
    }     
  return <div>
      <Card style={{ position:'relative'}}>
          <CardMedia style={{ marginLeft: 'auto', marginRight: 'auto' }} image={item.image.url} alt={item.name} className={classes.media} />
          <CardContent className={classes.cardContent}>
                <Typography style={{ textAlign:'right' }} variant='h5'>{item.name.replace(/[a-z]/g, "")}</Typography>
                <Typography style={{ textAlign:'right',paddingTop: '20px'}} variant='h6'>{"₪" + item.line_total.raw}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
          <Button variant="contained" type='button' color='secondary' onClick={ () => handleRemoveFromCart(item)}>הסר פריט</Button>
                <div className={classes.buttons}>
                    <Button type="button" size='small' onClick={ () => handleUpdateCartQty(item, item.quantity -1,0)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size='small' onClick={ () => handleUpdateCartQty(item, item.quantity + 1,1)}>+</Button>
                </div>
          </CardActions>    
      </Card>
  </div>;
};

export default CartItem;
