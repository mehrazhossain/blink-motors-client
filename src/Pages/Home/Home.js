import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CompanyPromise from './CompanyPromise';
import NeedHelp from './NeedHelp';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <BusinessSummary />
      <Reviews />
      <CompanyPromise />
      <NeedHelp />
      <Footer></Footer>
    </div>
  );
};

export default Home;
