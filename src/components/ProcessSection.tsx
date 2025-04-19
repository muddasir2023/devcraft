
import React from 'react';
import { MessageSquare, Lightbulb, Code, CheckCircle, Settings, BarChart } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-agency-accent text-white font-bold text-xl">
          {number}
        </div>
      </div>
      <div>
        <div className="mb-3 text-agency-blue bg-agency-blue/10 p-3 rounded-lg inline-block">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-agency-blue">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      icon: <MessageSquare size={24} />,
      title: "Discovery & Planning",
      description: "We start by understanding your business, goals, and requirements through in-depth consultation to define the project scope."
    },
    {
      number: 2,
      icon: <Lightbulb size={24} />,
      title: "Strategy & Design",
      description: "Our team creates a comprehensive strategy and designs an intuitive user experience tailored to your audience and objectives."
    },
    {
      number: 3,
      icon: <Code size={24} />,
      title: "Development",
      description: "We build your solution using modern technologies and best practices, with regular demos and feedback sessions throughout."
    },
    {
      number: 4,
      icon: <CheckCircle size={24} />,
      title: "Testing & QA",
      description: "Rigorous testing across devices and scenarios ensures a polished, bug-free product that meets all requirements."
    },
    {
      number: 5,
      icon: <Settings size={24} />,
      title: "Deployment & Launch",
      description: "We handle the deployment process and provide training to ensure a smooth transition and successful launch."
    },
    {
      number: 6,
      icon: <BarChart size={24} />,
      title: "Ongoing Support",
      description: "Our relationship continues with maintenance, optimization, and strategic updates to keep your solution performing at its best."
    }
  ];

  return (
    <section className="section bg-agency-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-subtitle mx-auto">
            We follow a structured, transparent approach to turn your ideas into reality,
            ensuring quality and alignment at every stage.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
