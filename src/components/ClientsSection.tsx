
import React from 'react';

const ClientsSection = () => {
  const clients = [
    { name: "TechVision Labs", logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" }, // Colorful code display
    { name: "Digital Innovate", logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81" }, // Modern tech displays
    { name: "CreativeTech", logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" }, // Modern workspace
    { name: "SmartSolutions", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" }, // Laptop with vibrant display
    { name: "NextGen Systems", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" }, // Modern tech setup
    { name: "CloudForge", logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1" }, // Modern laptop display
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-agency-blue mb-2">Trusted by Companies Worldwide</h2>
          <div className="w-20 h-1 bg-agency-accent mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-2"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-16 w-24 object-cover rounded-lg"
              />
              <span className="text-sm font-medium text-gray-700">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

