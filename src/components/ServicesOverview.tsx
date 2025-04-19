
import React from 'react';
import { Monitor, Smartphone, Figma, Cloud, Server, Headset, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 group">
      <div className="mb-4 text-agency-accent bg-agency-accent/10 p-3 rounded-lg inline-block group-hover:bg-agency-accent group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-agency-blue">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="/services" className="text-agency-accent font-medium hover:text-agency-blue flex items-center">
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const ServicesOverview = () => {
  const services = [
    {
      icon: <Monitor size={24} />,
      title: "Web Development",
      description: "Custom websites, portals, and eCommerce solutions built with modern technologies."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description: "Native and cross-platform apps for iOS and Android that deliver exceptional user experiences."
    },
    {
      icon: <Figma size={24} />,
      title: "UI/UX Design",
      description: "User-centric design services that create intuitive, engaging digital experiences."
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Services",
      description: "Setup, migration, and management on AWS, Azure, and other cloud platforms."
    },
    {
      icon: <Server size={24} />,
      title: "DevOps & Pipelines",
      description: "CI/CD pipelines, infrastructure as code, and monitoring solutions."
    },
    {
      icon: <Headset size={24} />,
      title: "Maintenance & Support",
      description: "Ongoing support, bug fixes, updates, and performance optimization."
    }
  ];

  return (
    <section className="section bg-agency-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            We provide end-to-end digital services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="btn-primary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
