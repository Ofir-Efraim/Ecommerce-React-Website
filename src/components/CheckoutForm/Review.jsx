import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';


const Review = ({ checkoutToken, cart }) => (
  <>
    <Typography style={{textAlign:'right'}}variant="h6" gutterBottom>סיכום הזמנה</Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0', textAlign:'right' }} key={product.name}>
          <Typography variant="body2">{"₪"}</Typography>
          {product.name.includes("spread") ? (
            product.line_total.raw = parseInt(product.line_total.formatted),
            product.line_total.raw -= parseInt(product.quantity/2) * 5  
        ) : (
          product.line_total.raw = parseInt(product.line_total.formatted)
        )}
          <ListItemText primary={product.name.replace(/[a-z]/g, "")} secondary={`כמות: ${product.quantity}`} />
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {"₪" + cart.subtotal.raw}
        </Typography>
        <ListItemText style={{textAlign:'right'}} primary="מחיר כולל" />
      </ListItem>
    </List>
  </>
);

export default Review;