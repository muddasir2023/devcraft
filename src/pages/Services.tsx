
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import ServicesList from '@/components/ServicesList';
import CallToAction from '@/components/CallToAction';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesList />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
