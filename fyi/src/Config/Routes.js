import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutMePage from "../Pages/AboutMePage";
import ServicesPage from "../Pages/ServicesPages";
import PortfolioPage from "../Pages/PortfolioPage";
import ContactMePage from "../Pages/ContactMePage";
import LeadsPage from '../Pages/LeadsPage';
import BookPage from '../Pages/BookPage';
import ClientsPage from '../Pages/ClientsPage';

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={() => <HomePage />} />
      <Route path="/about" component={() => <AboutMePage />} />
      <Route path="/services" component={() => <ServicesPage />} />
      <Route path="/portfolio" component={() => <PortfolioPage />} />
      <Route path="/contact" component={() => <ContactMePage />} />
      <Route path='/leads' component={() => <LeadsPage/>}/>
      <Route path='/book' component={() => <BookPage/>}/>
      <Route path='/clients' component={() => <ClientsPage/>}/>
    </>
  );
};

export default Routes;
