import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { Facebook, Instagram } from "@material-ui/icons";

const about_image = require("../../assets/for_about_page.jpg");

const About = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        width: "98%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",

        // height: "97vh",
        margin: "0 auto",
      }}
    >
      <div className={classes.image}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={about_image}
          alt="Giliz"
        />
      </div>
      <Typography className={classes.title} variant="h5">
        נעים מאוד ! אנו נרגשים להציג את ״צחם ״ - לחם בריאות מזרעי צמחים . המותג
        צחם נולד מאהבה כפולה וגדולה האחת לאישתי והשניה לבריאות . אהבה שסחפה
        אחריה רבים מהחברים ובני משפחה והמשיכה להתפתח ולגדול לכלל הלקוחות שהם
        מזמן חברים ! המוצרים של צחם פותחו ומיוצרים בדגש על 3-4 רכיבים טבעיים,
        תחת הדגש של הכי קרוב לטבע! כלל המוצרים טבעוניים, ללא גלוטן ללא סוכר או
        תחליפי סוכר . מזמינים אתכם להתמכר ולהתאהב בצחם❤️
      </Typography>
      <Button
        className={classes.toProducts}
        component={Link}
        to="/products"
        color="primary"
      >
        להזמנות אונליין
      </Button>
      <footer
        style={{
          background: "#ebecf0",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          color: "#867c74",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              direction: "rtl",
              textDecoration: "underline",
              textDecorationColor: "#deddc0",
              textDecorationThickness: "3px",
              fontWeight: "600",
              fontSize: "20px",
              margin: "5px",
              padding: "10px",
            }}
          >
            אודות
          </p>
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="tel:058-784-1711"
          >
            <p
              style={{
                fontSize: "20px",
                margin: "5px",
                direction: "rtl",
                textDecoration: "underline",
                textDecorationColor: "#deddc0",
                textDecorationThickness: "3px",
                fontWeight: "600",
                padding: "10px",
              }}
            >
              שירות לקוחות
            </p>
          </a>
          <Typography className={classes.title} variant="h3">
            צחם
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <a href={"https://www.facebook.com/gil.efraim.37?mibextid=LQQJ4d"}>
            <Facebook style={{ color: "#63564d" }} />
          </a>
          <a href={"https://instagram.com/zechem_glutenfreebread?igshid=YmMyMTA2M2Y="}>
            <Instagram style={{ color: "#63564d" }} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
