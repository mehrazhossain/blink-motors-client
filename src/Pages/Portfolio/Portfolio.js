import React from 'react';

const Portfolio = () => {
  return (
    <div class="hero w-full my-12">
      <div class="hero-content flex-col lg:flex-row">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Personal Information</h2>
            <p>Name: Mehraz Hossain</p>
            <p>Email: mehrazhossain54@gmail.com</p>
            <p>Phone: +88 01706-536039</p>
            <p>
              Studies: BBA(Hons) at Government Bangla College under of
              University of Dhaka
            </p>
            <p>Lives in: Dhaka, Bangladesh.</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100">
          <div class="card-body">
            <h2 class="card-title">Developmental Skills</h2>
            <p>Full stack web developer.</p>
            <h2 class="text-xl">
              Technologies
              <span class="badge badge-lg">skills</span>
            </h2>
            <div>
              <h3 class="text-lg">HTML,</h3>
              <h3 class="text-lg">CSS,</h3>
              <h3 class="text-lg">Bootstrap,</h3>
              <h3 class="text-lg">Tailwind CSS,</h3>
              <h3 class="text-lg">JavaScript,</h3>
              <h3 class="text-lg">ES6,</h3>
              <h3 class="text-lg">ReactJS,</h3>
              <h3 class="text-lg">NodeJS,</h3>
              <h3 class="text-lg">ExpressJs,</h3>
              <h3 class="text-lg">MongoDB etc.</h3>
            </div>
            <div>
              <h2 class="text-xl">
                Recent work
                <span class="badge badge-lg">projects</span>
              </h2>
              <p>
                <a
                  target={'_blank'}
                  rel="noreferrer"
                  href="https://tryinventory-4d242.web.app/"
                  className="text-indigo-600"
                >
                  1. Inventory Management Application
                </a>
              </p>
              <p>
                <a
                  target={'_blank'}
                  rel="noreferrer"
                  href="https://blink-motors.web.app/"
                  className="text-indigo-600"
                >
                  2. Manufacturer website
                </a>
              </p>
              <p>
                <a
                  target={'_blank'}
                  rel="noreferrer"
                  href="https://rekindle-16ebd.web.app/"
                  className="text-indigo-600"
                >
                  3. Independent Service Provider website
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
