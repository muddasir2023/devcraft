
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-agency-blue">:}DevCraft Solution<span className="text-agency-accent">.</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-agency-blue hover:text-agency-accent font-medium transition-colors">Home</Link>
          <Link to="/about" className="text-agency-blue hover:text-agency-accent font-medium transition-colors">About</Link>
          <Link to="/services" className="text-agency-blue hover:text-agency-accent font-medium transition-colors">Services</Link>
          <Link to="/portfolio" className="text-agency-blue hover:text-agency-accent font-medium transition-colors">Portfolio</Link>
          <Link to="/blog" className="text-agency-blue hover:text-agency-accent font-medium transition-colors">Blog</Link>
          <Link to="/contact" className="text-agency-blue hover:text-agency-accent font-medium transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-agency-blue p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg animate-slide-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-agency-blue hover:text-agency-accent font-medium py-2 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-agency-blue hover:text-agency-accent font-medium py-2 transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="text-agency-blue hover:text-agency-accent font-medium py-2 transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/portfolio" className="text-agency-blue hover:text-agency-accent font-medium py-2 transition-colors" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/blog" className="text-agency-blue hover:text-agency-accent font-medium py-2 transition-colors" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" className="text-agency-blue hover:text-agency-accent font-medium py-2 transition-colors" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
