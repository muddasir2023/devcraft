
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedCase = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Case Study</h2>
          <p className="section-subtitle mx-auto">
            See how we helped our clients achieve extraordinary results with our custom solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-agency-gray p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-agency-blue mb-2">FinTech Transformation</h3>
              <p className="text-lg font-medium text-agency-accent mb-6">Global Financial Services Company</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
                <p className="text-gray-600 mb-4">
                  The client needed to modernize their legacy financial management platform to improve user experience, 
                  reduce operational costs, and enable rapid scaling to meet growing demand.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
                <p className="text-gray-600 mb-4">
                  We developed a cloud-native financial management platform with a modern microservices architecture, 
                  intuitive UX design, and robust security measures to ensure compliance with financial regulations.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full text-sm">AWS</span>
                  <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-agency-blue/10 text-agency-blue px-3 py-1 rounded-full text-sm">Docker</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2">Results</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>40% decrease in operational costs</li>
                  <li>68% improvement in user satisfaction</li>
                  <li>99.99% uptime with seamless scaling</li>
                  <li>3.5x increase in processing capacity</li>
                </ul>
              </div>
              
              <Button className="btn-primary flex items-center">
                View Full Case Study
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
                alt="FinTech Application Dashboard"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-agency-accent/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-agency-blue/10 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCase;
