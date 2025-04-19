
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-agency-gray to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-blue mb-6">
              We Build <span className="text-agency-accent">Digital Solutions</span> That Transform Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              End-to-end software development services tailored for mid-sized businesses looking to innovate and grow in the digital landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary flex items-center">
                Book a Discovery Call
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80"
                alt="Digital solutions for businesses"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-agency-accent/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-agency-blue/10 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-agency-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-agency-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
