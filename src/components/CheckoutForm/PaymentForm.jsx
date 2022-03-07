import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import Review from "./Review";

const PaymentForm = ({
  checkoutToken,
  userData,
  nextStep,
  backStep,
  handleCaptureCheckout,
  cart
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const orderData = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: userData.firstName,
        lastname: userData.lastName,
        email: userData.email,
        phone: userData.phoneNumber,
        market: userData.market,
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: "4242 4242 4242 4242",
          expiry_month: "01",
          expiry_year: "2023",
          cvc: "123",
          postal_zip_code: "94103",
        },
      },
    };
    handleCaptureCheckout(checkoutToken, orderData);
    nextStep();
  };

  return (
    <>
      <Review cart = {cart} checkoutToken={checkoutToken} />
      <Divider />
      {/* <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>Submit Order</Typography> */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <br /> <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type="submit" variant="contained" color="primary">
            בצע הזמנה
          </Button>
          <Button variant="outlined" onClick={backStep}>
            חזור
          </Button>
        </div>
      </form>
    </>
  );
};

export default PaymentForm;
