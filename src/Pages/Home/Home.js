import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CompanyPromise from './CompanyPromise';
import Products from './Products';

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <BusinessSummary />
      <CompanyPromise />
      <Footer></Footer>
    </div>
  );
};

export default Home;
