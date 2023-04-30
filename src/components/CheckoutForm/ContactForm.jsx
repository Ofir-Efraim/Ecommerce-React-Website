import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import EmailInput from "./EmailInput";
import { Link } from "react-router-dom";
import "./ContactStyles.css";

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
          <Grid
            wrap="nowrap"
            container
            spacing={3}
            justifyContent="center"
            alignItems="flex-end"
            direction="column"
          >
            <select
              className="selectMarket"
              value={market}
              onChange={(e) => setMarket(e.target.value)}
              name="market"
              id="nameMarket"
              required
            >
              <option value=""></option>
              <option value="בורלא">בורלא</option>
              <option value="נס גלים">נס גלים</option>
              <option value="אנג'לה">אנג'לה</option>
              <option value="נווה אביבים - צ'רטוק">נווה אביבים - צ'רטוק</option>
              <option value="איסוף אצל תמי- Giliz לחמי בריאות">
                {" "}
                איסוף אצל תמי- Giliz לחמי בריאות{" "}
              </option>
              <option value="איסוף עצמי">איסוף עצמי</option>
              <option value="פיינשטיין פינת בן יוסף רמת אביב ג - יום חמישי 19:00">
                פיינשטיין פינת בן יוסף רמת אביב ג - יום חמישי 19:00
              </option>
              <option value="בויאר 6 רמת אביב ג - יום חמישי 18:30">
                בויאר 6 רמת אביב ג - יום חמישי 18:30
              </option>
              {/* <option value="המתנדב 23 אפקה - יום חמישי 19:40">המתנדב 23 אפקה - יום חמישי 19:40</option> */}
              <option value="הוד השרון">הוד השרון</option>
              {/* <option value="ברנר">ברנר</option> */}
              <option value="משלוח בתיאום מראש">משלוח בתיאום מראש</option>
            </select>
            <Typography variant="h6">שם מלא</Typography>
            <FormInput label={true} name="firstName" />
            <Typography variant="h6">מספר טלפון</Typography>
            <FormInput label={true} name="phoneNumber" />
            <Typography variant="h6">מייל</Typography>
            <EmailInput name="email" />
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
