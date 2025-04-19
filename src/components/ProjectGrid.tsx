
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce solution built with React and Node.js",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Mobile Development"
  },
  {
    id: 3,
    title: "Cloud Migration",
    description: "Enterprise-scale cloud migration and infrastructure setup",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Cloud Services"
  }
];

const ProjectGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Project</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
