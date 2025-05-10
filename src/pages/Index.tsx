import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import ClientsSection from '@/components/ClientsSection';
import FeaturedCase from '@/components/FeaturedCase';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesOverview />
        <FeaturedCase />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
