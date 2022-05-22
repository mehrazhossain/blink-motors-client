import React from 'react';
import { CountUp } from 'use-count-up';

const BusinessSummary = () => {
  const statistics = [
    {
      id: 1,
      statTitle: 'Countries',
      statValue: 51,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          className="m-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </svg>
      ),
    },
    {
      id: 2,
      statTitle: 'Received Orders',
      statValue: 37352,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          className="m-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
    },
    {
      id: 3,
      statTitle: 'Happy Clients',
      statValue: 587,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          className="m-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      id: 4,
      statTitle: 'Feedbacks',
      statValue: 1033,
      icon: (
        <svg
          width="38"
          height="38"
          className="m-2"
          viewBox="0 0 48 48"
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 48 48"
        >
          <path
            fill="#01a3a4"
            d="M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"
          />
          <rect x="12" y="11" fill="#00d2d3" width="24" height="22" />
          <polygon fill="#E3FFFF" points="24,13.6 18,21.4 30,21.4" />
          <path
            fill="#00d2d3"
            d="M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"
          />
          <polygon fill="#E3FFFF" points="24,28 26,26.7 26,20 22,20 22,26.7" />
        </svg>
      ),
    },
  ];

  const onComplete = () => {
    return { shouldRepeat: true, delay: 2 };
  };

  return (
    <section className="mb-16 mx-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary">
          MILLIONS BUSINESS TRUST US
        </h1>
        <p className="my-8 text-2xl">TRY TO UNDERSTAND USERS EXPECTATION</p>
        <div className="mx-auto w-24 bg-primary p-0.5 bg-gradient-to-r from-primary to-purple-600"></div>
      </div>

      <div className="card grid grid-cols-1 lg:grid-cols-4 gap-5 place-content-center">
        {statistics.map((info) => (
          <div key={info.id} className="card-body">
            <span className="text-primary">{info.icon}</span>
            <div className="stat-value">
              <CountUp
                isCounting
                end={info.statValue}
                duration={2}
                onComplete={onComplete}
              />
              +
            </div>
            <div className="stat-title text-primary font-bold">
              {info.statTitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSummary;
