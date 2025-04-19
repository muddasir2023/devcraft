
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechInnovate Inc.",
      testimonial: "DevCraft delivered beyond our expectations. Their team's expertise in cloud services and web development helped us launch our platform 2 months ahead of schedule, with better performance than we had anticipated.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Mark Thompson",
      position: "Product Director",
      company: "Global Solutions",
      testimonial: "Working with DevCraft on our mobile app was a game-changer. Their UI/UX design approach led to a 40% increase in user engagement, and the development team efficiently implemented all our feature requests.",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "CEO",
      company: "NextGen Retail",
      testimonial: "The DevCraft team transformed our e-commerce platform, implementing DevOps practices that reduced our deployment time by 70%. Their ongoing support has been exceptional, addressing issues before they impact our customers.",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-agency-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">What Our Clients Say</h2>
          <p className="section-subtitle text-gray-300 mx-auto">
            Don't just take our word for it. See what our clients have to say about working with DevCraft.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-xl">
            {/* Quotation Mark */}
            <div className="absolute -top-6 left-8 text-6xl text-agency-accent/40 font-serif">"</div>
            
            <div className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90 italic">
              {testimonials[currentIndex].testimonial}
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full mr-4 border-2 border-agency-accent"
                />
                <div>
                  <h4 className="text-lg font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-agency-accent">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
                </div>
              </div>
              
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"} 
                    className="text-agency-accent" 
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-agency-accent w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
