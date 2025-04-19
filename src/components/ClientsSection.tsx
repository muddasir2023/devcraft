
import React from 'react';

const ClientsSection = () => {
  // In a real project, you would use actual client logos
  const clients = [
    { name: "Tech Corp", logo: "https://via.placeholder.com/150x60?text=TechCorp" },
    { name: "Innovate Inc", logo: "https://via.placeholder.com/150x60?text=InnovateInc" },
    { name: "Digital Solutions", logo: "https://via.placeholder.com/150x60?text=DigitalSolutions" },
    { name: "Web Systems", logo: "https://via.placeholder.com/150x60?text=WebSystems" },
    { name: "App Factory", logo: "https://via.placeholder.com/150x60?text=AppFactory" },
    { name: "Cloud Tech", logo: "https://via.placeholder.com/150x60?text=CloudTech" },
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
              className="grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-12 max-w-[150px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
