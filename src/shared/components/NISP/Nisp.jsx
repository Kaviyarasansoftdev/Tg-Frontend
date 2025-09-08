import React, { useState } from 'react';
import { Lightbulb, FileText, Download, Eye, Star, Users, BarChart3, CheckCircle, Calendar, Shield, Rocket, Target, Globe, TrendingUp, Building, Link, ArrowRight, ExternalLink, Zap, Award, BookOpen, Code, Briefcase, Network } from 'lucide-react';

const Nisp = () => {
    const [selectedCard, setSelectedCard] = useState('about');

    const mainSections = [
        {
            id: 'about',
            title: 'About NISP',
            subtitle: 'National Innovation and Startup Policy Framework',
            icon: <Lightbulb className="w-6 h-6" />,
            color: 'blue',
            content: `The National Innovation and Startup Policy (NISP) represents a transformative approach to higher education, designed to cultivate innovation and entrepreneurship within academic institutions. This comprehensive framework establishes the foundation for creating dynamic ecosystems where creativity thrives and groundbreaking ideas are transformed into viable business ventures.

Our commitment to NISP goes beyond policy implementation—we're building a culture where students, faculty, and researchers collaborate to address real-world challenges through innovative solutions. The policy encompasses various dimensions including infrastructure development, funding mechanisms, mentorship programs, and industry partnerships.

Through strategic implementation of NISP guidelines, we aim to bridge the gap between academic excellence and practical innovation, preparing our students for the challenges of tomorrow's economy while contributing to national development goals.`
        },
        {
            id: 'policy',
            title: 'I & E Policy',
            subtitle: 'Innovation & Entrepreneurship Policy Framework',
            icon: <FileText className="w-6 h-6" />,
            color: 'green',
            content: `Our Innovation & Entrepreneurship Policy serves as the institutional blueprint for fostering entrepreneurial mindset and innovative thinking across all academic disciplines. This comprehensive policy framework establishes clear guidelines, procedures, and support mechanisms that enable students and faculty to pursue entrepreneurial ventures.

The policy addresses key areas including intellectual property management, startup incubation protocols, funding accessibility, industry collaboration frameworks, and performance evaluation metrics. It creates a structured pathway for transforming innovative ideas into commercially viable products and services.

We have developed specific provisions for different stakeholder groups—students, faculty, researchers, and industry partners—ensuring that each group receives tailored support and resources. The policy also emphasizes ethical considerations, sustainability practices, and social impact measurement in all entrepreneurial activities.`
        },
        {
            id: 'functions',
            title: 'Functions',
            subtitle: 'Core Implementation Areas',
            icon: <Target className="w-6 h-6" />,
            color: 'purple',
            content: `The implementation of NISP involves systematic execution of core functions designed to create a robust innovation ecosystem. These functions are strategically organized to support every aspect of the entrepreneurial journey, from ideation to market launch.

Our primary functions include establishing and maintaining innovation laboratories, managing startup incubation programs, facilitating industry partnerships, coordinating mentorship initiatives, and implementing performance monitoring systems. Each function is designed with specific objectives and measurable outcomes.

The functional framework also encompasses capacity building programs, skill development workshops, technology transfer mechanisms, and continuous improvement processes. We maintain dedicated teams for each functional area, ensuring specialized expertise and focused attention to detail in implementation.`
        }
    ];


    const features = [
        {
            title: 'Innovation Labs',
            description: 'State-of-the-art facilities equipped with cutting-edge technology',
            icon: <Code className="w-6 h-6" />,
            color: 'bg-indigo-100 text-indigo-700'
        },
        {
            title: 'Startup Incubation',
            description: 'Comprehensive support for startup development and growth',
            icon: <Building className="w-6 h-6" />,
            color: 'bg-blue-100 text-blue-700'
        },
        {
            title: 'Industry Partnerships',
            description: 'Strategic collaborations with leading industry players',
            icon: <Network className="w-6 h-6" />,
            color: 'bg-emerald-100 text-emerald-700'
        },
        {
            title: 'Mentorship Programs',
            description: 'Expert guidance from experienced entrepreneurs and industry leaders',
            icon: <Users className="w-6 h-6" />,
            color: 'bg-amber-100 text-amber-700'
        },
        {
            title: 'Funding Support',
            description: 'Access to various funding opportunities and investment platforms',
            icon: <TrendingUp className="w-6 h-6" />,
            color: 'bg-rose-100 text-rose-700'
        },
        {
            title: 'IP Management',
            description: 'Comprehensive intellectual property protection and commercialization',
            icon: <Shield className="w-6 h-6" />,
            color: 'bg-violet-100 text-violet-700'
        }
    ];


    const selectedSection = mainSections.find(section => section.id === selectedCard);
    const getColorClasses = (color, selected = false) => {
        const colors = {
            blue: {
                bg: selected ? 'bg-blue-600' : 'bg-blue-500',
                text: 'text-blue-600',
                border: 'border-blue-200',
                hover: 'hover:bg-blue-600'
            },
            green: {
                bg: selected ? 'bg-green-600' : 'bg-green-500',
                text: 'text-green-600',
                border: 'border-green-200',
                hover: 'hover:bg-green-600'
            },
            purple: {
                bg: selected ? 'bg-purple-600' : 'bg-purple-500',
                text: 'text-purple-600',
                border: 'border-purple-200',
                hover: 'hover:bg-purple-600'
            }
        };
        return colors[color];
    };



    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Header */}
            <div className="bg-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-full mb-6">
                            <Rocket className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">NISP Portal</h1>
                        <p className="mt-4 text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto">
                            National Innovation and Startup Policy - Empowering the Next Generation of Innovators
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Section Tabs */}
                <div className="mb-12">
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        {mainSections.map((section) => {
                            const colorClasses = getColorClasses(section.color, selectedCard === section.id);
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setSelectedCard(section.id)}
                                    className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all ${selectedCard === section.id
                                        ? `${colorClasses.bg} text-white shadow-lg`
                                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className={selectedCard === section.id ? 'text-white' : colorClasses.text}>
                                        {section.icon}
                                    </span>
                                    <span>{section.title}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Selected Content */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className={`p-3 rounded-lg ${getColorClasses(selectedSection.color).bg} text-white`}>
                                {selectedSection.icon}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{selectedSection.title}</h2>
                                <p className="text-gray-600">{selectedSection.subtitle}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {selectedSection.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-gray-700 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents</h3>
                            <div className="flex flex-wrap gap-4">
                                <div
                                    className={`flex items-center gap-3 px-6 py-3 rounded-full transition-colors cursor-pointer 
                                         ${selectedSection.title === 'About NISP' ? 'bg-blue-200 hover:bg-blue-300 text-blue-600' :
                                            selectedSection.title === 'I & E Policy' ? 'bg-green-200 hover:bg-green-300 text-green-600' :
                                                selectedSection.title === 'Functions' ? 'bg-purple-200 hover:bg-purple-300 text-purple-600' :
                                                    'bg-purple-100 hover:bg-purple-200 text-purple-600'}`}
                                >
                                    <BookOpen
                                        className={`w-5 h-5 
                                         ${selectedSection.title === 'About NISP' ? 'text-blue-600' :
                                                selectedSection.title === 'I & E Policy' ? 'text-green-600' :
                                                    selectedSection.title === 'Functions' ? 'text-purple-600' :
                                                        'text-purple-600'}`}
                                    />
                                    <span className="font-semibold">{selectedSection.title}</span>
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200">
                           
                            <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                <Download className="w-5 h-5" />
                                <span>Download Document</span>
                            </button>
                            <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                <Eye className="w-5 h-5" />
                                <span>View Details</span>
                            </button>
                        </div> */}
                    </div>
                </div>


                {/* Features Grid */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Key Features & Capabilities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${feature.color} mb-4`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nisp;