
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="section bg-gradient-to-br from-agency-blue to-agency-blue/90 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-white/80 mb-8">
            Let's build something amazing together. Our team is ready to turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-agency-accent hover:bg-agency-accent/90 text-white px-8 py-6 text-lg flex items-center">
              Get a Free Quote
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-6 text-lg">
              Schedule a Call
            </Button>
          </div>
          
          <p className="mt-6 text-white/70">
            No obligation, just a conversation about how we can help your business grow.
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-agency-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CallToAction;
