
import React from 'react';

const AboutHero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-agency-gray to-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-blue mb-6 animate-fade-in">
            About <span className="text-agency-accent">DevCraft</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're a team of passionate digital craftsmen who build exceptional software solutions 
            that transform businesses and create meaningful digital experiences.
          </p>
          
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md max-w-3xl">
              <p className="text-lg italic text-agency-blue">
                "At DevCraft, we believe that great software isn't just about code—it's about 
                understanding business needs and crafting solutions that deliver real value."
              </p>
              <p className="mt-4 font-medium text-agency-accent">— Michael Richards, Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-agency-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-agency-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutHero;
