 import { ArrowRight, MapPin, Mail, Phone, Globe, Send, Building, Users, Calendar, Sparkles, Heart, Zap, Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactData = {
    name: "Tagore Institute of Engineering and Technology",
    shortName: "TIET",
    established: "2008",
    description: "Shaping tomorrow's innovators through excellence in education and cutting-edge research.",
    contactDetails: {
      address: "Deviyakurichi Post - 636112, Attur Tk, Salem Dt., Tamil Nadu, India",
      mobile: "+91 9876543210",
      contactHours: "9:30 A.M to 4:30 P.M (Monday - Saturday)",
      email: "info@tagoreiet.ac.in",
      website: "http://www.tagoreiet.ac.in",
    },
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header Section */}
      <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Sparkles className="w-5 h-5 text-purple-200" />
                <span className="text-sm font-semibold tracking-wider">CONNECT WITH EXCELLENCE</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-extrabold mb-6 leading-tight">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">Touch</span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                {contactData.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2008</div>
                  <div className="text-white text-sm">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-white text-sm">Alumni</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-whites">24/7</div>
                  <div className="text-white text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 -mt-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Contact Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            
            {/* Contact Form Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-10 border border-purple-100">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-purple-800 mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-600 text-lg">
                  Share your thoughts, questions, or ideas with us. We're here to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-black font-semibold text-sm">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      // className="w-full px-5 py-4 bg-purple-50 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 transition-all duration-300 text-purple-800 placeholder-purple-400"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none  transition-all duration-300 text-gray-800 "

                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-black font-semibold text-sm">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      // className="w-full px-5 py-4 bg-purple-50 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 transition-all duration-300 text-purple-800 placeholder-purple-400"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none  transition-all duration-300 text-gray-800 "

                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-black font-semibold text-sm">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none  transition-all duration-300 text-gray-800 "
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-black font-semibold text-sm">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about how we can help you..."
                    rows="5"
                    // className="w-full px-5 py-4 bg-purple-50 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-500 transition-all duration-300 text-purple-800 placeholder-purple-400 resize-none"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none  transition-all duration-300 text-gray-800 "

                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="group w-full px-8 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-3">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <a href={`tel:${contactData.contactDetails.mobile}`} className="text-purple-200 hover:text-white transition-colors">
                        {contactData.contactDetails.mobile}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <a href={`mailto:${contactData.contactDetails.email}`} className="text-purple-200 hover:text-white transition-colors">
                        {contactData.contactDetails.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Visit Us</div>
                      <div className="text-purple-200 text-sm leading-relaxed">
                        Deviyakurichi Post<br />
                        Salem District, Tamil Nadu
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
                <h4 className="text-xl font-bold text-black mb-4">Office Hours</h4>
                <div className="text-purple-600">
                  <div className="font-semibold">Monday - Saturday</div>
                  <div>9:30 AM - 4:30 PM</div>
                </div>
                <div className="mt-4 p-4 bg-purple-50 rounded-xl">
                  <div className="text-sm text-purple-600">
                    <strong className="text-black">Response Time:</strong> We typically respond within 2-4 hours during business hours.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-12 mb-20 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Visit Our Campus</h2>
                <p className="text-purple-100 text-lg mb-8 leading-relaxed">
                  Experience our state-of-the-art facilities and vibrant campus life. We welcome visitors and prospective students to explore what makes TIET special.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-purple-200 mt-1" />
                    <div>
                      <div className="font-semibold text-purple-100">Full Address</div>
                      <div className="text-purple-200">{contactData.contactDetails.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="w-6 h-6 text-purple-200" />
                    <div>
                      <div className="font-semibold text-purple-100">Website</div>
                      <a href={contactData.contactDetails.website} className="text-purple-200 hover:text-white transition-colors">
                        {contactData.contactDetails.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <MapPin className="w-20 h-20 text-purple-200 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Find Us on Map</h3>
                <p className="text-purple-200 mb-6">
                  Located in the heart of Salem District, easily accessible by road and public transport.
                </p>
                <a
                  href="https://www.google.com/maps/place/Tagore+Institute+of+Engineering+and+Technology/@11.6145,78.6065,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-700 rounded-full font-semibold hover:bg-purple-50 transition-colors"
                >
                  Open in Maps
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pb-20">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 shadow-2xl border border-purple-100">
              <h2 className="text-4xl font-bold text-black mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their lives through quality education at TIET.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <a
                  href={`mailto:${contactData.contactDetails.email}`}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Apply Now
                </a> */}
                <Link to={'/online-registration'} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg">Apply now</Link>
                <a
                  href={`tel:${contactData.contactDetails.mobile}`}
                  className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-bold hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}