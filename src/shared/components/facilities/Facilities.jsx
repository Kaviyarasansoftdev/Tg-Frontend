import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Clock, Star, Home, BookOpen, Monitor, Languages, Presentation, Bus, Coffee, Accessibility, Zap, Building, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FacilitiesShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const { id } = useParams()
  useEffect(() => {
    setSelectedCategory(id || 'all')
  }, [id])

  // Dynamic facilities data
  const facilitiesData = {
    hostels: {
      title: "Hostels",
      icon: Home,
      color: "purple",
      description: "Comfortable and secure accommodation facilities",
      facilities: [
        {
          id: 1,
          name: "Boys Hostel Block A",
          image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
          description: "Modern hostel facility with all essential amenities for comfortable living and academic focus.",
          capacity: "300 Students",
          timing: "24/7 Access",
          rating: 4.8,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          ],
          features: ["24/7 Security", "WiFi", "Laundry", "Common Areas", "Study Rooms", "Mess Facility"]
        },
        {
          id: 2,
          name: "Girls Hostel Block B",
          image: "https://images.unsplash.com/photo-1631889993959-41b4ab9eb005?w=800&q=80",
          description: "Safe and secure accommodation with enhanced security measures and modern facilities.",
          capacity: "250 Students",
          timing: "24/7 Access",
          rating: 4.9,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["Enhanced Security", "WiFi", "Laundry", "Kitchenette", "Study Areas", "Recreation Room"]
        }
      ]
    },
    library: {
      title: "Library & Info Services",
      icon: BookOpen,
      color: "blue",
      description: "Comprehensive library and information resources",
      facilities: [
        {
          id: 3,
          name: "Central Library",
          image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
          description: "State-of-the-art library with extensive collection of books, journals, and digital resources.",
          capacity: "500 Seating",
          timing: "7:00 AM - 11:00 PM",
          rating: 4.9,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["50,000+ Books", "Digital Resources", "Research Database", "Silent Study Areas", "Group Discussion Rooms", "Printing Services"]
        },
        {
          id: 4,
          name: "Digital Information Center",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
          description: "Modern digital library with online databases and electronic resources access.",
          capacity: "100 Workstations",
          timing: "8:00 AM - 10:00 PM",
          rating: 4.7,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["Online Databases", "E-Books", "Digital Archives", "Research Support", "Internet Access", "Printing & Scanning"]
        }
      ]
    },
    laboratories: {
      title: "Laboratories & Internet Lab",
      icon: Monitor,
      color: "green",
      description: "Advanced laboratory facilities for practical learning",
      facilities: [
        {
          id: 5,
          name: "Computer Science Lab",
          image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80",
          description: "High-tech computer laboratory with latest hardware and software for programming and development.",
          capacity: "60 Systems",
          timing: "8:00 AM - 10:00 PM",
          rating: 4.8,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["Latest Hardware", "Programming Software", "High-Speed Internet", "Technical Support", "Project Areas", "Printing Facility"]
        },
        {
          id: 6,
          name: "Internet Research Lab",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
          description: "Dedicated internet lab for research activities and online learning resources.",
          capacity: "40 Workstations",
          timing: "9:00 AM - 9:00 PM",
          rating: 4.6,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["High-Speed Internet", "Research Tools", "Online Resources", "Collaborative Spaces", "Multimedia Support", "Technical Assistance"]
        }
      ]
    },
    language: {
      title: "Language Lab",
      icon: Languages,
      color: "orange",
      description: "Modern language learning facilities",
      facilities: [
        {
          id: 7,
          name: "Digital Language Laboratory",
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
          description: "Advanced language lab with digital tools for interactive language learning and practice.",
          capacity: "40 Stations",
          timing: "9:00 AM - 6:00 PM",
          rating: 4.7,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["Digital Learning System", "Audio-Visual Equipment", "Language Software", "Recording Facility", "Individual Stations", "Instructor Console"]
        }
      ]
    },
    conference: {
      title: "Conference Halls",
      icon: Presentation,
      color: "red",
      description: "Professional venues for events and presentations",
      facilities: [
        {
          id: 8,
          name: "Main Auditorium",
          image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
          description: "Large auditorium equipped with modern audio-visual systems for conferences and events.",
          capacity: "500 Seating",
          timing: "Event Based",
          rating: 4.8,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["Audio-Visual System", "Stage Lighting", "Air Conditioning", "Comfortable Seating", "Projection System", "Sound System"]
        },
        {
          id: 9,
          name: "Seminar Hall",
          image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
          description: "Medium-sized hall perfect for seminars, workshops, and academic presentations.",
          capacity: "150 Seating",
          timing: "Event Based",
          rating: 4.6,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["Presentation Equipment", "Microphone System", "Projector", "WiFi", "Comfortable Seating", "Climate Control"]
        }
      ]
    },
    transport: {
      title: "Transport",
      icon: Bus,
      color: "indigo",
      description: "Reliable transportation services",
      facilities: [
        {
          id: 10,
          name: "College Bus Service",
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
          description: "Comprehensive bus service connecting campus to various city locations with safety and comfort.",
          capacity: "20+ Routes",
          timing: "6:00 AM - 8:00 PM",
          rating: 4.5,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["Multiple Routes", "GPS Tracking", "Experienced Drivers", "Safety Features", "Comfortable Seating", "Affordable Rates"]
        },
        {
          id: 11,
          name: "Parking Facilities",
          image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80",
          description: "Secure parking areas for various vehicles with proper lighting and surveillance.",
          capacity: "1500+ Vehicles",
          timing: "24/7 Access",
          rating: 4.4,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["CCTV Surveillance", "Covered Parking", "Security Guards", "Bicycle Stands", "Organized Sections", "Easy Access"]
        }
      ]
    },
    common: {
      title: "Common Room",
      icon: Coffee,
      color: "yellow",
      description: "Recreational and social spaces",
      facilities: [
        {
          id: 12,
          name: "Student Common Room",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
          description: "Comfortable common area for students to relax, socialize, and engage in recreational activities.",
          capacity: "100 Students",
          timing: "7:00 AM - 11:00 PM",
          rating: 4.6,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["Comfortable Seating", "Entertainment System", "Games Area", "Reading Corner", "Vending Machines", "WiFi Access"]
        }
      ]
    },
    accessibility: {
      title: "Facilities for Divyangjan",
      icon: Accessibility,
      color: "teal",
      description: "Inclusive facilities for differently-abled students",
      facilities: [
        {
          id: 13,
          name: "Accessibility Support Center",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
          description: "Comprehensive support facilities designed to ensure equal access and opportunities for all students.",
          capacity: "Full Campus",
          timing: "24/7 Available",
          rating: 4.9,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["Ramp Access", "Accessible Restrooms", "Assistive Technology", "Sign Language Support", "Braille Resources", "Mobility Assistance"]
        }
      ]
    },
    renewable: {
      title: "Renewable Energy Sources",
      icon: Zap,
      color: "emerald",
      description: "Sustainable energy solutions",
      facilities: [
        {
          id: 14,
          name: "Solar Power Plant",
          image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
          description: "Campus-wide solar energy system promoting sustainable practices and reducing carbon footprint.",
          capacity: "500 KW",
          timing: "24/7 Operation",
          rating: 4.8,
          gallery: [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          ],
          features: ["Solar Panels", "Battery Storage", "Grid Integration", "Energy Monitoring", "Maintenance Support", "Eco-Friendly"]
        }
      ]
    }
  };

  const categories = [
    { id: 'all', label: 'All Facilities', icon: Building },
    { id: 'hostels', label: 'Hostels', icon: Home },
    { id: 'library', label: 'Library & Info', icon: BookOpen },
    { id: 'laboratories', label: 'Laboratories', icon: Monitor },
    { id: 'language', label: 'Language Lab', icon: Languages },
    { id: 'conference', label: 'Conference Halls', icon: Presentation },
    { id: 'transport', label: 'Transport', icon: Bus },
    { id: 'common', label: 'Common Room', icon: Coffee },
    { id: 'accessibility', label: 'Accessibility', icon: Accessibility },
    { id: 'renewable', label: 'Renewable Energy', icon: Zap }
  ];

  const getAllFacilities = () => {
    return Object.values(facilitiesData).flatMap(category =>
      category.facilities.map(facility => ({
        ...facility,
        categoryColor: category.color,
        categoryTitle: category.title
      }))
    );
  };

  const getFilteredFacilities = () => {
    if (selectedCategory === 'all') {
      return getAllFacilities();
    }
    const categoryData = facilitiesData[selectedCategory];
    return categoryData ? categoryData.facilities.map(facility => ({
      ...facility,
      categoryColor: categoryData.color,
      categoryTitle: categoryData.title
    })) : [];
  };

  const getColorClasses = (color) => {
    const colors = {
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      teal: 'bg-teal-100 text-teal-600 border-teal-200',
      emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200'
    };
    return colors[color] || colors.purple;
  };

  const toggleCardExpansion = (facilityId) => {
    setExpandedCards(prev => ({
      ...prev,
      [facilityId]: !prev[facilityId]
    }));
  };

  const FacilityModal = ({ facility, onClose }) => {
    if (!facility) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white rounded-t-3xl p-6 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900">{facility.name}</h3>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="p-6 space-y-6">

            <Swiper
              modules={[Navigation, Pagination]}
              // navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={3}
              className="rounded-2xl"
            >
              {facility?.gallery.map((facility, index) => (
                <SwiperSlide key={index} className='select-none' >
                  <img
                    src={facility}
                    alt={facility}
                    className="w-full h-48 object-cover rounded-2xl shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">About</h4>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="text-sm text-gray-500">Capacity</div>
                      <div className="font-semibold text-gray-900">{facility.capacity}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-500">Timing</div>
                      <div className="font-semibold text-gray-900">{facility.timing}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="text-sm text-gray-500">Rating</div>
                      <div className="font-semibold text-gray-900">{facility.rating}/5.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Features & Amenities</h4>
              <div className="grid grid-cols-2 gap-2">
                {facility.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">
              Campus Facilities
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            World-Class Facilities
            <span className="block text-purple-600">for Excellence</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of facilities designed to support academic excellence,
            personal growth, and a vibrant campus life experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="text-sm">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredFacilities().map((facility) => {
            const isExpanded = expandedCards[facility.id];
            const colorClasses = getColorClasses(facility.categoryColor);

            return (
              <div
                key={facility.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Category Badge */}
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${colorClasses}`}>
                    {facility.categoryTitle}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{facility.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {isExpanded ? facility.description : `${facility.description.substring(0, 100)}...`}
                    </p>
                  </div>

                  {/* Quick Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{facility.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{facility.timing}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {facility.features.slice(0, isExpanded ? facility.features.length : 3).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                          {feature}
                        </span>
                      ))}
                      {!isExpanded && facility.features.length > 3 && (
                        <span className="px-2 py-1 bg-purple-100 rounded-full text-xs text-purple-600">
                          +{facility.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => toggleCardExpansion(facility.id)}
                      className="flex items-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      {isExpanded ? 'Less' : 'More'}
                    </button>
                    <button
                      onClick={() => setSelectedFacility(facility)}
                      className="flex items-center gap-1 px-3 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm flex-1 justify-center"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-1">25+</div>
              <div className="text-gray-600 text-sm">Total Facilities</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
              <div className="text-gray-600 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-1">8000+</div>
              <div className="text-gray-600 text-sm">Daily Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <FacilityModal
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
      />
    </div>
  );
};

export default FacilitiesShowcase;