import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import Page from "./UI/Page";

const Home = () => {
  return (
    <Page className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <Button>Create your pizza </Button>
      </Link>
    </Page>
  );
};

export default Home;
