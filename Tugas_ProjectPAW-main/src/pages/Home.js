// Home.js
import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/modern-workspace-top-view-flat-lay-style_61343-1054.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Mobile Shop</h1>
          <p>Discover the Latest Mobile Devices</p>
          <Link to="/menu">
            <button>EXPLORE NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;