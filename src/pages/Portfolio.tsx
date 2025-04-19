
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/PortfolioHero';
import ProjectGrid from '@/components/ProjectGrid';
import CallToAction from '@/components/CallToAction';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PortfolioHero />
        <ProjectGrid />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
