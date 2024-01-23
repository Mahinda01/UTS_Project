import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import SpidermanImage from "../images/menu3.jpg";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            color: "#e62429",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">The Amazing Mobile Shop</Typography>
        <img
          src={SpidermanImage}
          alt="Spider-Man"
          style={{ width: "100%", maxWidth: "400px", borderRadius: "8px", marginTop: "20px" }}
        />
        <p>
          Welcome to The Amazing Mobile Shop, your friendly neighborhood destination for cutting-edge mobile technology. Swing into action with our wide range of smartphones, accessories, and tech solutions. Our superhero staff is ready to assist you on your quest for the perfect device.
        </p>
        <p>
          Whether you're a web-slinger or a tech enthusiast, our diverse menu of products will cater to your needs. Explore the world of mobile innovation with us, where every purchase comes with a touch of superhero magic. We're here to make your mobile shopping experience truly spectacular!
        </p>
        <br />
      </Box>
    </Layout>
  );
};

export default About;