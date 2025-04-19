
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container-custom py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-agency-blue mb-8 text-center">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-agency-blue">Name</label>
              <Input 
                type="text" 
                id="name" 
                placeholder="Your Name" 
                required 
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-agency-blue">Email</label>
              <Input 
                type="email" 
                id="email" 
                placeholder="your.email@example.com" 
                required 
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-agency-blue">Message</label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your project..." 
                required 
                className="w-full min-h-[150px]"
              />
            </div>
            <Button type="submit" className="btn-primary w-full">
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

