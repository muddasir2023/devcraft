
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Palette, Cloud, Database, Search } from 'lucide-react';

const services = [
  {
    icon: <Code size={24} />,
    title: "Web Development",
    description: "Custom websites, web applications, and e-commerce solutions built with modern technologies.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    icon: <Palette size={24} />,
    title: "UI/UX Design",
    description: "User-centric design services creating intuitive digital experiences.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Services",
    description: "Cloud infrastructure setup, migration, and management on AWS and Azure.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  },
  {
    icon: <Database size={24} />,
    title: "DevOps & CI/CD",
    description: "Automated pipelines, infrastructure as code, and monitoring solutions.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  },
  {
    icon: <Search size={24} />,
    title: "SEO & Digital Growth",
    description: "Technical SEO, performance optimization, and digital marketing strategies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  }
];

const ServicesList = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-agency-accent/10 text-agency-accent">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
