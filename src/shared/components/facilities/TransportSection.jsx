//  import React, { useState } from 'react';
//     import ReactDOM from 'react-dom';
//     import { Bus, Map, Clock, Shield, DollarSign, Users, Calendar, Siren, Navigation, Smartphone, HardHat, Lock, Bike, Footprints, Image, ChevronDown } from 'lucide-react';

//  export   function TransportSection() {
//       const [activeAccordion, setActiveAccordion] = useState(0);

//       const facilities = [
//         {
//           icon: Bus,
//           title: 'Dedicated Bus Services',
//           description: 'Regularly scheduled buses for students commuting from nearby towns and cities.',
//           color: 'from-blue-500 to-cyan-500'
//         },
//         {
//           icon: Map,
//           title: 'Transportation Routes',
//           description: 'Multiple routes covering different areas to ensure accessibility for all students.',
//           color: 'from-green-500 to-emerald-500'
//         },
//         {
//           icon: Clock,
//           title: 'Timely Service',
//           description: 'Buses are usually scheduled to align with class timings to ensure that students can reach the campus on time.',
//           color: 'from-orange-500 to-red-500'
//         },
//         {
//           icon: Shield,
//           title: 'Safety Measures',
//           description: 'Safety protocols in place, including trained drivers, regular vehicle maintenance, and sometimes GPS tracking.',
//           color: 'from-purple-500 to-pink-500'
//         },
//         {
//           icon: DollarSign,
//           title: 'Fee Structure',
//           description: 'A nominal fee may be charged for the transportation service, which can vary based on distance and other factors.',
//           color: 'from-teal-500 to-cyan-500'
//         },
//         {
//           icon: Bus,
//           title: 'Dedicated Bus Fleet',
//           description: 'TIET boasts a dedicated fleet of buses and vehicles designed to cater to the transport needs of students and staff.',
//           color: 'from-indigo-500 to-blue-500'
//         },
//         {
//           icon: Calendar,
//           title: 'Daily Commutes',
//           description: 'The primary purpose of the bus fleet is to facilitate daily commutes for students residing in nearby towns and villages. Regular schedules ensure timely transportation to and from the campus.',
//           color: 'from-yellow-500 to-orange-500'
//         },
//         {
//           icon: Siren,
//           title: 'Field Trips and Extra-Curricular Activities',
//           description: 'The buses are also utilized for educational field trips, workshops, and extra-curricular activities, allowing students to participate in events outside the campus.',
//           color: 'from-rose-500 to-pink-500'
//         },
//         {
//           icon: Siren,
//           title: 'Emergency Services',
//           description: 'The transport services at TIET are equipped to respond to emergency situations, providing timely transportation for medical emergencies when required.',
//           color: 'from-blue-500 to-indigo-500'
//         },
//         {
//           icon: Navigation,
//           title: 'Route Planning',
//           description: 'Each route is designed to maximize coverage while minimizing travel time. The routes take into account the population density of student residences and aim to provide convenient pickup points.',
//           color: 'from-green-500 to-teal-500'
//         },
//         {
//           icon: Clock,
//           title: 'Scheduling',
//           description: 'The transport department has established a schedule that aligns with class schedules to minimize wait times. Buses operate at intervals, ensuring continuous service throughout the day.',
//           color: 'from-orange-500 to-yellow-500'
//         },
//         {
//           icon: Smartphone,
//           title: 'Real-time Tracking',
//           description: 'With advancements in technology, many transport services today are equipped with GPS tracking systems that allow students to monitor bus locations and estimated arrival times via mobile applications or campus portals.',
//           color: 'from-purple-500 to-indigo-500'
//         },
//         {
//           icon: Shield,
//           title: 'Safety Features',
//           description: 'Buses are equipped with emergency exits, first aid kits, and fire extinguishers. Standard operating procedures are in place for handling emergencies and ensuring passenger safety.',
//           color: 'from-red-500 to-pink-500'
//         },
//         {
//           icon: HardHat,
//           title: 'Trained Drivers',
//           description: 'All bus drivers undergo comprehensive training programs and must adhere to safety standards. They are trained in defensive driving techniques and emergency procedures.',
//           color: 'from-blue-500 to-cyan-500'
//         },
//         {
//           icon: HardHat,
//           title: 'Regular Inspections',
//           description: 'The transport fleet undergoes routine maintenance and inspections to ensure the vehicles remain safe and roadworthy, reducing the likelihood of mechanical failures and accidents.',
//           color: 'from-green-500 to-emerald-500'
//         },
//         {
//           icon: Lock,
//           title: 'Safety Protocols',
//           description: 'Buses are equipped with emergency exits, first aid kits, and fire extinguishers. Standard operating procedures are in place for handling emergencies and ensuring passenger safety.',
//           color: 'from-orange-500 to-red-500'
//         },
//         {
//           icon: Lock,
//           title: 'Seat Belts and Safety Features',
//           description: 'Most buses in the fleet are equipped with seat belts and other basic safety features, encouraging students to prioritize safety during transportation.',
//           color: 'from-purple-500 to-pink-500'
//         },
//         {
//           icon: Bus,
//           title: 'Integration with Public Transport',
//           description: 'TIET recognizes the importance of integrating its transport facilities with available public transport options.',
//           color: 'from-teal-500 to-cyan-500'
//         },
//         {
//           icon: Bus,
//           title: 'Promoting Public Transport Use',
//           description: 'Encouraging the use of public buses and local transit options can help reduce traffic congestion, promoting a greener campus environment.',
//           color: 'from-indigo-500 to-blue-500'
//         },
//         {
//           icon: Bike,
//           title: 'Bicycle Facilities',
//           description: 'The campus may feature bicycle parking, making it easier for students to use bikes as an eco-friendly mode of transport.',
//           color: 'from-yellow-500 to-orange-500'
//         },
//         {
//           icon: Footprints,
//           title: 'Walking Paths',
//           description: 'Well-maintained walking paths ensure safe pedestrian access throughout the campus, promoting walking as a convenient and healthy alternative for students living nearby.',
//           color: 'from-rose-500 to-pink-500'
//         }
//       ];

//       const images = [
//         {
//           src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop&crop=center',
//           alt: 'Campus Bus',
//           caption: 'Campus Bus',
//         },
//         {
//           src: 'https://images.unsplash.com/photo-1517524008697-60b7f7e0b947?w=300&h=200&fit=crop&crop=center',
//           alt: 'Bus Stop',
//           caption: 'Bus Stop',
//         },
//         {
//           src: 'https://images.unsplash.com/photo-1558401384-90fadb1f5db1?w=300&h=200&fit=crop&crop=center',
//           alt: 'Transport Route',
//           caption: 'Transport Route',
//         },
//         {
//           src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&h=200&fit=crop&crop=center',
//           alt: 'Campus Pathway',
//           caption: 'Campus Pathway',
//         },
//       ];

//       const toggleAccordion = (index) => {
//         setActiveAccordion(activeAccordion === index ? -1 : index);
//       };

//       return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
//           </div>

//           {/* Hero Section */}
//           <div className="text-center space-y-6 mb-12 py-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
//               <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//               <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
//                 Transport
//               </span>
//             </div>
//             <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
//               Convenient commuting at
//               <span className="block text-blue-600">Tagore Institute Transport Services</span>
//             </p>
//           </div>

//           {/* Main Content and Accordion Grid */}
//           <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
//             <div className="grid lg:grid-cols-1 gap-16 items-start mb-16">
//               {/* Left - Main Content */}
//               <div className="space-y-8">
//                 <div className="space-y-6">
//                   <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center">
//                     Tagore Institute
//                     <span className="block text-blue-600">Transport Experience</span>
//                   </h2>
//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     Tagore Institute of Engineering and Technology offers comprehensive transport facilities to ensure that all students can commute conveniently and safely. More buses are deployed to cater to the transportation needs of students coming from various locations in and around the region.
//                   </p>
//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     The bus services operate on multiple routes, designed to accommodate the convenience of students. This extensive network ensures that students can reach the campus easily and on time, regardless of their place of residence. The transport system is efficient and is aimed at providing a hassle-free commuting experience, allowing students to focus on their academic pursuits.
//                   </p>
//                 </div>
//               </div>

//               {/* Right - Facilities Accordion */}
//               <div className="space-y-4">
//                 <div className="text-center mb-8">
//                   <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                     Transport Facilities & Services
//                   </h3>
//                   <p className="text-lg text-gray-600">
//                     Discover the comprehensive transport services designed to ensure safe and convenient commuting.
//                   </p>
//                 </div>
//                 {facilities.map((facility, index) => (
//                   <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
//                     <button
//                       onClick={() => toggleAccordion(index)}
//                       className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-300"
//                     >
//                       <div className="flex items-center gap-4">
//                         <div className={`w-12 h-12 bg-gradient-to-r ${facility.color} rounded-xl flex items-center justify-center shadow-lg`}>
//                           <facility.icon className="w-6 h-6 text-white" />
//                         </div>
//                         <div>
//                           <h4 className="text-xl font-bold text-gray-900">{facility.title}</h4>
//                         </div>
//                       </div>
//                       <div className={`transform transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}>
//                         <ChevronDown className="w-6 h-6 text-gray-500" />
//                       </div>
//                     </button>
//                     <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                       activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                     }`}>
//                       <div className="px-6 pb-6">
//                         <div className="pl-16">
//                           <p className="text-gray-600 leading-relaxed text-lg">{facility.description}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Image Gallery Section */}
//             <div className="bg-blue-50 py-16">
//               <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex items-center justify-center mb-8">
//                   <Image className="w-8 h-8 text-blue-600 mr-3" />
//                   <h2 className="text-3xl font-bold text-gray-900">Transport Gallery</h2>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                   {images.map((image, index) => (
//                     <div 
//                       key={index}
//                       className="relative group rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//                     >
//                       <img 
//                         src={image.src}
//                         alt={image.alt}
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
//                         <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           {image.caption}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }


import React, { useState } from 'react';
import { Bus, Map, Clock, Shield, DollarSign, Users, Calendar, Siren, Navigation, Smartphone, HardHat, Lock, Bike, Footprints, Image, ChevronDown, Route, Settings, Zap, Leaf, TreePine, BookOpen, Phone } from 'lucide-react';

export function TransportSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');

  const mainFacilities = [
    {
      icon: Bus,
      title: 'Dedicated Bus Services',
      description: 'Regularly scheduled buses for students commuting from nearby towns and cities with reliable daily service.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Map,
      title: 'Transportation Routes',
      description: 'Multiple routes covering different areas to ensure accessibility for all students across the region.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Buses scheduled to align with class timings ensuring students reach campus on time for their academic activities.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Safety Measures',
      description: 'Comprehensive safety protocols including trained drivers, regular maintenance, and GPS tracking systems.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: DollarSign,
      title: 'Fee Structure',
      description: 'Nominal transportation fees that vary based on distance and route factors, making it affordable for all students.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const fleetServices = [
    {
      icon: Bus,
      title: 'Dedicated Bus Fleet',
      description: 'TIET maintains a dedicated fleet of buses and vehicles specifically designed to cater to the transport needs of students and staff members.',
      details: ['Modern fleet of buses', 'Regular capacity assessment', 'Vehicle upgrades and maintenance']
    },
    {
      icon: Calendar,
      title: 'Daily Commutes',
      description: 'Primary service for daily commutes for students residing in nearby towns and villages with regular schedules ensuring timely transportation.',
      details: ['Morning and evening schedules', 'Weekend services available', 'Holiday schedule adjustments']
    },
    {
      icon: BookOpen,
      title: 'Field Trips & Activities',
      description: 'Buses utilized for educational field trips, workshops, and extra-curricular activities, enabling student participation in off-campus events.',
      details: ['Educational excursions', 'Workshop transportation', 'Sports event transport', 'Cultural activity support']
    },
    {
      icon: Siren,
      title: 'Emergency Services',
      description: 'Transport services equipped to respond to emergency situations, providing timely transportation for medical emergencies when required.',
      details: ['24/7 emergency availability', 'Medical emergency response', 'Trained emergency drivers', 'First aid equipped vehicles']
    }
  ];

  const routeManagement = [
    {
      icon: Navigation,
      title: 'Route Planning',
      description: 'Each route designed to maximize coverage while minimizing travel time, considering population density of student residences.',
      features: ['Strategic pickup points', 'Optimal route coverage', 'Traffic pattern analysis', 'Student residence mapping']
    },
    {
      icon: Clock,
      title: 'Scheduling System',
      description: 'Transport department established schedules aligned with class schedules to minimize wait times with continuous service.',
      features: ['Class-aligned timings', 'Interval-based service', 'Peak hour management', 'Real-time adjustments']
    },
    {
      icon: Smartphone,
      title: 'Real-time Tracking',
      description: 'GPS tracking systems allowing students to monitor bus locations and estimated arrival times via mobile applications.',
      features: ['Mobile app integration', 'Live location tracking', 'Arrival time estimates', 'Route notifications']
    }
  ];

  const safetyFeatures = [
    {
      icon: HardHat,
      title: 'Trained Drivers',
      description: 'All drivers undergo comprehensive training programs and must adhere to safety standards with defensive driving techniques.',
      certifications: ['Defensive driving certification', 'Emergency response training', 'Regular skill assessment', 'Safety protocol adherence']
    },
    {
      icon: Settings,
      title: 'Regular Inspections',
      description: 'Transport fleet undergoes routine maintenance and inspections to ensure vehicles remain safe and roadworthy.',
      inspections: ['Daily vehicle checks', 'Monthly safety audits', 'Annual certifications', 'Mechanical failure prevention']
    },
    {
      icon: Shield,
      title: 'Safety Protocols',
      description: 'Buses equipped with emergency exits, first aid kits, and fire extinguishers with standard operating procedures.',
      equipment: ['Emergency exits', 'First aid kits', 'Fire extinguishers', 'Emergency communication systems']
    },
    {
      icon: Lock,
      title: 'Safety Features',
      description: 'Most buses equipped with seat belts and basic safety features, encouraging students to prioritize safety during transportation.',
      features: ['Seat belt systems', 'Emergency lighting', 'Safety signage', 'Anti-slip flooring']
    }
  ];

  const alternativeTransport = [
    {
      icon: Bus,
      title: 'Public Transport Integration',
      description: 'TIET recognizes the importance of integrating transport facilities with available public transport options for comprehensive connectivity.',
      benefits: ['Reduced traffic congestion', 'Cost-effective options', 'Environmental benefits', 'Flexible commuting choices']
    },
    {
      icon: Bike,
      title: 'Bicycle Facilities',
      description: 'Campus features bicycle parking facilities, making it easier for students to use bikes as an eco-friendly mode of transport.',
      facilities: ['Secure bicycle parking', 'Maintenance support', 'Bike rental services', 'Cycling safety programs']
    },
    {
      icon: Footprints,
      title: 'Walking Infrastructure',
      description: 'Well-maintained walking paths ensure safe pedestrian access throughout campus, promoting walking as a healthy alternative.',
      infrastructure: ['Paved walking paths', 'Proper lighting', 'Weather protection', 'Accessibility compliance']
    }
  ];

  const futureEnhancements = [
    {
      icon: Leaf,
      title: 'Sustainability Initiatives',
      description: 'Transitioning to electric or hybrid buses to significantly reduce carbon emissions, aligning with global sustainability goals.',
      initiatives: ['Electric bus fleet', 'Carbon footprint reduction', 'Renewable energy integration', 'Green transport policies']
    },
    {
      icon: Smartphone,
      title: 'Advanced Technology',
      description: 'Integration of smart technologies including mobile apps for tracking and scheduling to enhance user experience.',
      technologies: ['Mobile app development', 'Smart scheduling systems', 'IoT integration', 'Data analytics']
    },
    {
      icon: Route,
      title: 'Service Expansion',
      description: 'Developing new routes and increasing frequency of existing routes to enhance accessibility as student population grows.',
      expansions: ['New route development', 'Increased frequency', 'Extended coverage areas', 'Demand-based services']
    },
    {
      icon: TreePine,
      title: 'Infrastructure Improvements',
      description: 'Upgrading bus stops and waiting areas to provide more comfortable and welcoming environment for students.',
      improvements: ['Modern bus stops', 'Weather shelters', 'Digital displays', 'Comfortable seating']
    }
  ];

  const images = [
    {
      src: '/images/facilities/transport/t1.jpg',
      alt: 'Campus Bus Fleet',
      caption: 'Modern Campus Bus Fleet'
    },
    // {
    //   src: 'https://images.unsplash.com/photo-1517524008697-60b7f7e0b947?w=300&h=200&fit=crop&crop=center',
    //   alt: 'Bus Stop Facility',
    //   caption: 'Well-equipped Bus Stops'
    // },
    // {
    //   src: 'https://images.unsplash.com/photo-1558401384-90fadb1f5db1?w=300&h=200&fit=crop&crop=center',
    //   alt: 'Transport Route Network',
    //   caption: 'Extensive Route Network'
    // },
    // {
    //   src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&h=200&fit=crop&crop=center',
    //   alt: 'Campus Walkways',
    //   caption: 'Safe Campus Walkways'
    // },
    // {
    //   src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop&crop=center',
    //   alt: 'Bicycle Parking',
    //   caption: 'Bicycle Parking Facilities'
    // },
    // {
    //   src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop&crop=center',
    //   alt: 'GPS Tracking System',
    //   caption: 'GPS Tracking Technology'
    // }
  ];

  const sections = [
    { id: 'overview', title: 'Overview', icon: Bus },
    { id: 'fleet', title: 'Fleet Services', icon: Calendar },
    { id: 'routes', title: 'Route Management', icon: Navigation },
    { id: 'safety', title: 'Safety Features', icon: Shield },
    { id: 'alternative', title: 'Alternative Transport', icon: Bike },
    { id: 'future', title: 'Future Plans', icon: Zap }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            {mainFacilities.map((facility, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${facility.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <facility.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{facility.title}</h4>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="pl-16">
                      <p className="text-gray-600 leading-relaxed text-lg">{facility.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'fleet':
        return (
          <div className="grid gap-6">
            {fleetServices.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'routes':
        return (
          <div className="grid gap-6">
            {routeManagement.map((route, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <route.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{route.title}</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">{route.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {route.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'safety':
        return (
          <div className="grid gap-6">
            {safetyFeatures.map((safety, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <safety.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{safety.title}</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">{safety.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {(safety.certifications || safety.inspections || safety.equipment || safety.features).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'alternative':
        return (
          <div className="grid gap-6">
            {alternativeTransport.map((transport, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <transport.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{transport.title}</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">{transport.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {(transport.benefits || transport.facilities || transport.infrastructure).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'future':
        return (
          <div className="grid gap-6">
            {futureEnhancements.map((enhancement, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <enhancement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{enhancement.title}</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">{enhancement.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {(enhancement.initiatives || enhancement.technologies || enhancement.expansions || enhancement.improvements).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden pt-5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-6 mb-12 py-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
            Transport Services
          </span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Tagore Institute
          <span className="block text-blue-600">Transport Experience</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive transport facilities ensuring convenient and safe commuting for all students across the region
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        {/* Introduction */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center">
              Transport & Bus Facilities
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tagore Institute of Engineering and Technology offers comprehensive transport facilities to ensure that all students can commute conveniently and safely. More buses are deployed to cater to the transportation needs of students coming from various locations in and around the region.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The bus services operate on multiple routes, designed to accommodate the convenience of students. This extensive network ensures that students can reach the campus easily and on time, regardless of their place of residence. The transport system is efficient and is aimed at providing a hassle-free commuting experience, allowing students to focus on their academic pursuits.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              In today's educational environment, efficient transport and logistics play a critical role in the overall success of students and institutions alike. Recognizing this, TIET has established a comprehensive transport system designed to facilitate easy access to the campus while maximizing convenience, safety, and comfort for its students and staff.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-2 mb-8">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="mb-16">
          {renderSection()}
        </div>

        {/* Image Gallery Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Image className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Transport Gallery</h2>
            </div>
            <p className="text-lg text-gray-600">Visual showcase of our comprehensive transport infrastructure and services</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-semibold">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        {/* <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-8 mt-16 text-center"> */}
          {/* <div className="flex items-center justify-center mb-4">
            <Phone className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Need Transport Information?</h3>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            For detailed route information, schedules, or transport-related queries, please contact the Transport Department.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-600 font-medium">Transport Office</p>
              <p className="text-lg font-bold text-gray-900">Available on Campus</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-green-600 font-medium">Emergency Contact</p>
              <p className="text-lg font-bold text-gray-900">24/7 Available</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}