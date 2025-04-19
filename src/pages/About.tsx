
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import MissionValues from '@/components/MissionValues';
import TeamSection from '@/components/TeamSection';
import ProcessSection from '@/components/ProcessSection';
import CallToAction from '@/components/CallToAction';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutHero />
        <MissionValues />
        <TeamSection />
        <ProcessSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default About;
