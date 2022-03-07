import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, count}) => {
  const classes = useStyles();
  const originalPrice = parseInt(cart.subtotal.formatted)
  const discount = () => 
  {
    cart.subtotal.raw = originalPrice
    const sumDiv = parseInt(count/2)
    if(sumDiv > 0){
    cart.subtotal.raw -= sumDiv * 5
    }
  }
  const EmptyCart = () => (
    <Typography style={{ textAlign: 'center' }} variant="h2">
      העגלה ריקה
      <br />
      <Button component={Link} to="/" className={classes.link}> <br />חזור לדף הבית</Button>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid style={{position:'relative'}} direction="row-reverse" container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <CartItem cart = {cart} item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
        {discount()}
      </Grid>
      <div className={classes.cardDetails}>
        <div>
        <Button
            component={Link}
            to='/'
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="#A3A1A8"
          >
              חזור לדף הבית
          </Button>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            נקה עגלה
          </Button>
          <Button
            component={Link}
            to='/checkout'
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            בצע הזמנה
          </Button>
        </div>
        <Typography variant="h4">
          מחיר סופי: {"₪" + cart.subtotal.raw}
        </Typography>
      </div>
    </>
  );
  return (
    <Container>
      <div className={classes.toolbar}>
        <Typography className={classes.title} variant="h3" gutterBottom>
          עגלת מוצרים
        </Typography>
        {!cart.line_items.length? <EmptyCart /> : <FilledCart />}
      </div>
    </Container>
  );
};

export default Cart;
