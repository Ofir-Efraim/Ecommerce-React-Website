import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import EmailInput from "./EmailInput";
import { Link } from "react-router-dom";

const ContactForm = ({ next }) => {
  const methods = useForm();
  const [market, setMarket] = useState("");

  return (
    <>
      <Typography style={{ textAlign: "right" }} variant="h6" gutterBottom>
        בחר נקודת איסוף
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(() => next(market))}>
          <Grid container spacing={3} justifyContent="flex-end" direction="row-reverse" >
            <select
            style={{padding: '20px 10px 6px 10px',
            textAlign:'center',
            fontSize: '17px',
            color: '#62717a',
            border:'0',
            }}
             value={market}
              onChange={(e) => setMarket(e.target.value)}
              name="market"
              id="nameMarket"
              required
            >
              <option value=""></option>
              <option value="רכישה ישירה נס ציונה">רכישה ישירה נס ציונה</option>
              <option value="נס גלים">נס גלים</option>
              <option value="אנג'לה">אנג'לה</option>
              <option value="נווה אביבים - צ'רטוק">נווה אביבים - צ'רטוק</option>
              <option value="איסוף אצל תמי- Giliz לחמי בריאות">
                {" "}
                איסוף אצל תמי- Giliz לחמי בריאות{" "}
              </option>
              <option value="איסוף עצמי">איסוף עצמי</option>
            </select>
            <FormInput name="firstName" label="שם מלא" />
            <FormInput name="phoneNumber" label="מספר טלפון" />
            <EmailInput name="email" label="מייל" />
          </Grid>

          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button type="submit" variant="contained" color="primary">
              הבא
            </Button>
            <Button component={Link} variant="outlined" to="/cart">
              חזרה לעגלה
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default ContactForm;
