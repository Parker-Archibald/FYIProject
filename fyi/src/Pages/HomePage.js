import React, { Component } from "react";
import Home from "../Components/Home";
import SigServices from '../Components/HomeSigServ';
import HomeBook from '../Components/HomeBook';
import HomeAbout from '../Components/HomeAbout';

const HomePage = () => {

  return (
    <body >
      <div/>
      <div>
        <Home />
        <div id='sigServe'><SigServices/></div>
        <div id='book'><HomeBook/></div>
        <div><HomeAbout/></div>
      </div>
    </body>
  );
};
export default HomePage;
