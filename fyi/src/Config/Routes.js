import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutMePage from "../Pages/AboutMePage";
import ServicesPage from "../Pages/ServicesPages";
import PortfolioPage from "../Pages/PortfolioPage";
import ContactMePage from "../Pages/ContactMePage";
import LoginPage from '../Pages/LoginPage';

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={() => <HomePage />} />
      <Route path="/about" component={() => <AboutMePage />} />
      <Route path="/services" component={() => <ServicesPage />} />
      <Route path="/portfolio" component={() => <PortfolioPage />} />
      <Route path="/contact" component={() => <ContactMePage />} />
      <Route path='/login' component={() => <LoginPage/>}/>
    </>
  );
};

export default Routes;
