import React, { useState, useEffect, useRef } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { commerce } from "../../../lib/commerce";
import useStyles from "./styles";
import { Link } from "react-router-dom";

import ContactForm from "../ContactForm";
import PaymentForm from "../PaymentForm";

const steps = ["Contact Information", "Confirmation"];
const Checkout = ({ cart, handleCaptureCheckout, order}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({});
  const classes = useStyles();
  const [checkoutToken, setCheckoutToken] = useState(null);
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const next = (market) => {
    const data = document.querySelectorAll("Input");
    let emailAdd = 'testmail@gmail.com'
    if(data[2].value.includes('@')){
      emailAdd = data[2].value
    }
    const finalData = {
      lastName: String(market),
      firstName: data[0].value,
      phoneNumber: data[1].value,
      email: emailAdd,
    };
    setUserData(finalData);
    nextStep();
  };
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        }
        );
        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);
  let Confirmation = () => (
    <>
      <div style={{ textAlign: "right" }}>
        <Typography variant="h5">
          ! {userData.firstName} תודה רבה על ההזמנה
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="h5">
          אסוף את ההזמנה בשוק {userData.lastName}
        </Typography>
        <a
          href="https://payboxapp.page.link/BCFJipPAWaTuWBFo7"
          className={classes.link}
        >
          מעבר לתשלום בפייבוקס{" "}
        </a>
        <Typography variant="h6">ניתן לשלם גם בביט 058-7841713 </Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">
        חזור לעמוד הבית
      </Button>
    </>
  );

  const Form = () =>
    activeStep === 0 ? (
      <ContactForm next={next} checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        userData={userData}
        nextStep={nextStep}
        backStep={backStep}
        handleCaptureCheckout={handleCaptureCheckout}
        cart={cart}
      />
    );
  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            אישור הזמנה
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
