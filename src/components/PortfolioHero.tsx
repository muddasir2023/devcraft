
import React from 'react';

const PortfolioHero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-agency-gray to-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-blue mb-6 animate-fade-in">
            Our <span className="text-agency-accent">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-agency-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-agency-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default PortfolioHero;
