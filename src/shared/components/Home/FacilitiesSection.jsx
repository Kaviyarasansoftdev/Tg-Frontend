import React, { useState, useEffect } from "react";
import { Home, Book, Wifi, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FacilitiesSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const facilities = [
    {
      id: 1,
      title: 'Hostels',
      route: 'hostel',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop',
      color: 'purple'
    },
    {
      id: 2,
      title: 'Library Facilities',
      route: 'library',
      icon: Book,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Internet Lab Facilities',
      route: 'laboratories-intenetlab',
      icon: Wifi,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Conference and Seminar Hall',
      route: 'language-lab',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      color: 'purple'
    }
  ];

  return (
    <div className="py-5 lg:py-20 ">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-5 lg:mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-black lg:mb-6">
            OUR <span className="text-purple-600"> FACILITIES</span>
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <Link to={`/facilities/${facility?.route}`}>
              <div
                key={facility.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white text-center">
                    {facility.title}
                  </h3>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition-colors duration-500"></div>
              </div>
             </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className={`text-center mt-5 lg:mt-16 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="group px-8 inline-flex items-center gap-3 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors cursor-pointer">
            Explore All Facilities
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div> */}
      </div>
    </div>
  );
}