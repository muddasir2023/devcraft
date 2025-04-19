
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember = ({ name, role, bio, image, linkedin, twitter, email }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-agency-blue">{name}</h3>
        <p className="text-agency-accent font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4 text-sm">{bio}</p>
        
        <div className="flex space-x-3">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-agency-blue transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin size={18} />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-agency-blue transition-colors"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter size={18} />
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="text-gray-500 hover:text-agency-blue transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  // In a real project, you would fetch this data from an API or CMS
  const teamMembers = [
    {
      name: "Michael Richards",
      role: "Founder & CEO",
      bio: "With 15+ years in software development, Michael leads our strategic vision and ensures we deliver exceptional solutions for every client.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      linkedin: "#",
      twitter: "#",
      email: "michael@devcraft.com"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Sarah brings 12+ years of experience in cloud architecture and enterprise software. She oversees our technical direction and innovation.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedin: "#",
      twitter: "#",
      email: "sarah@devcraft.com"
    },
    {
      name: "David Chen",
      role: "Lead Developer",
      bio: "David specializes in full-stack development with expertise in React, Node.js, and cloud services. He leads our development team.",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      linkedin: "#",
      email: "david@devcraft.com"
    },
    {
      name: "Emily Wilson",
      role: "Design Director",
      bio: "Emily has a passion for creating intuitive, beautiful interfaces. She ensures all our solutions deliver outstanding user experiences.",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      linkedin: "#",
      twitter: "#",
      email: "emily@devcraft.com"
    },
    {
      name: "James Thompson",
      role: "DevOps Lead",
      bio: "James excels at building efficient CI/CD pipelines and cloud infrastructure. He ensures our deployments are smooth and reliable.",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      linkedin: "#",
      email: "james@devcraft.com"
    },
    {
      name: "Lisa Rodriguez",
      role: "Project Manager",
      bio: "Lisa keeps our projects on track and clients happy. She has a talent for translating business needs into technical requirements.",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      linkedin: "#",
      twitter: "#",
      email: "lisa@devcraft.com"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle mx-auto">
            Our diverse team of experts combines technical knowledge, creative thinking, and business acumen 
            to deliver exceptional digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              linkedin={member.linkedin}
              twitter={member.twitter}
              email={member.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
