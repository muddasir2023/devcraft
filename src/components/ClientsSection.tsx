
import React from 'react';

const ClientsSection = () => {
  const clients = [
    { name: "Tech Corp", logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
    { name: "Innovate Inc", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
    { name: "Digital Solutions", logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334" },
    { name: "Web Systems", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
    { name: "App Factory", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
    { name: "Cloud Tech", logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
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
                className="h-12 max-w-[150px] object-cover opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
