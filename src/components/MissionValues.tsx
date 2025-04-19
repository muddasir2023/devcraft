
import React from 'react';
import { Target, Code, Users, Lightbulb, Zap, Shield } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="mb-4 text-agency-accent bg-agency-accent/10 p-3 rounded-lg inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-agency-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const MissionValues = () => {
  const values = [
    {
      icon: <Target size={24} />,
      title: "Client-Focused",
      description: "We put clients first, focusing on your business needs and goals to deliver solutions that drive real results."
    },
    {
      icon: <Code size={24} />,
      title: "Technical Excellence",
      description: "We maintain high standards of code quality, security, and performance across all our projects."
    },
    {
      icon: <Users size={24} />,
      title: "Collaborative Approach",
      description: "We work closely with clients as partners, ensuring transparency and alignment throughout the development process."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation",
      description: "We stay at the forefront of technology trends to bring fresh ideas and solutions to every challenge."
    },
    {
      icon: <Zap size={24} />,
      title: "Efficiency",
      description: "We optimize our processes to deliver high-quality solutions on time and within budget."
    },
    {
      icon: <Shield size={24} />,
      title: "Reliability",
      description: "We build lasting relationships by consistently delivering dependable solutions and outstanding support."
    }
  ];

  return (
    <section className="section bg-agency-gray">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-agency-blue mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2018, DevCraft emerged from a vision to bridge the gap between business challenges and 
              technology solutions. Our mission is to empower mid-sized businesses with custom software 
              that drives growth, efficiency, and competitive advantage.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We're more than developers—we're strategic partners who understand both technology and business. 
              Our team combines deep technical expertise with business acumen to deliver solutions that 
              have tangible impact.
            </p>
            <p className="text-lg text-gray-600">
              From startups to established enterprises, we've helped businesses across diverse industries 
              transform their digital presence and operations through thoughtful, purpose-built software solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
