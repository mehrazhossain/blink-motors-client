import React from 'react';
import gear from '../../assets/images/gear.png';
import tier from '../../assets/images/tier.png';
import helmet from '../../assets/images/helmet.png';

const CompanyPromise = () => {
  const promises = [
    {
      id: 1,
      promiseTitle: 'DURABLE',
      img: `${gear}`,
    },
    {
      id: 2,
      promiseTitle: 'LONG-LASTING',
      img: `${tier}`,
    },
    {
      id: 2,
      promiseTitle: 'HIGH QUALITY',
      img: `${helmet}`,
    },
  ];
  return (
    <div className="mx-12 mb-16">
      <div className="mb-8  text-center">
        <h1 className="text-3xl text-primary font-semibold m-4 uppercase">
          Why Choose Us?
        </h1>
        <p>Top reasons why you should choose Blink Motors parts</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {promises.map((promise) => (
          <div key={promise.id} class="card w-96 bg-base-1 shadow-xl">
            <div
              class="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
              style={{ backgroundImage: `url(${promise.img})` }}
            >
              <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
                <div class="card-body flex h-98">
                  <div class="m-auto">
                    <h3 className="card-title text-3xl text-white text-semibold">
                      {promise.promiseTitle}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPromise;
