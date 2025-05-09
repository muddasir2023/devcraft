import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-agency-blue text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DevCraft<span className="text-agency-accent">.</span></h3>
            <p className="mb-4 text-gray-300">
              We build digital solutions that transform businesses and drive growth for our clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-agency-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-agency-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-agency-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-agency-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-agency-accent transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-agency-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-agency-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-agency-accent transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-agency-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-agency-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-agency-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-agency-accent transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-agency-accent transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-agency-accent transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-agency-accent transition-colors">Cloud Services</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-agency-accent transition-colors">DevOps & Pipelines</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-agency-accent transition-colors">Maintenance & Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-agency-accent" />
                <span className="text-gray-300">123 Tech Street, Digital City, PC 1234</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-agency-accent" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-agency-accent transition-colors">+92 3490842023</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-agency-accent" />
                <a href="mailto:info@devcraft.com" className="text-gray-300 hover:text-agency-accent transition-colors">info@devcraftsolution.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-400">© 2025 DevCraft Solutions. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-agency-accent mr-4 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-agency-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;