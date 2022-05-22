import React from 'react';
import banner from '../../assets/images/banner-bg.png';

const Banner = () => {
  return (
    <section className="relative bg-neural">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-4/5 opacity-25 sm:opacity-100"
        src={banner}
        alt="Couple on a bed with a dog"
      />

      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl uppercase">
            Motorcycle Parts
            <strong className="font-extrabold text-primary sm:block">
              AND ACCESSORIES
            </strong>
          </h1>

          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            With the increasing demand in the motorcycle industry in the
            Bangladesh, we make sure to keep the quality of all our items. They
            are tested and durable to support the safety of our customers.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-neutral rounded shadow bg-primary sm:w-auto active:bg-rose-500 hover:bg-secondary focus:outline-none focus:ring"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-accent sm:w-auto hover:text-primary active:text-secondary focus:outline-none focus:ring"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
