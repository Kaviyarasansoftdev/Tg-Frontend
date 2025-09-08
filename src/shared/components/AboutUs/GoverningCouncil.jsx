import React, { useState } from 'react';
import { Users, Award, Heart, Target, BookOpen, Building, FileText, X } from 'lucide-react';

const GoverningCouncil = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);



    
    const values = [
        {
            icon: Heart,
            title: 'Serving the Community',
            description: 'Committed to helping the poor, marginalized, and demoralized of the region'
        },
        {
            icon: Target,
            title: 'Excellence in Education',
            description: 'Tireless efforts towards maintaining excellence in our group of institutions'
        },
        {
            icon: Users,
            title: 'Transforming Lives',
            description: 'Visible and fruitful outcomes in lighting up many lives through education'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#184CDB]  to-violet-600 text-white">


                <div className="relative container mx-auto px-6 py-20">
                    <div className="text-center mt-20 lg:mt-0">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Governing Council
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Tagore Institute of Engineering & Technology
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto"></div>
                    </div>
                </div>
            </div>

            {/* Mission Statement */}
            <div className="max-w-[1300px] mx-auto px-6 py-16">
                <div className="max-w-[1300px] mx-auto text-center ">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Our Foundation of Excellence
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 md:text-center text-justify">
                        The Governance of Tagore Institute of Engineering & Technology is ensured by a dedicated Trust
                        consisting of distinguished members who have committed themselves to the excellence of our group of institutions.
                        Our unique and extraordinary characteristics exhibit tireless efforts in helping the poor, the marginalized,
                        and demoralized of the region.
                    </p>
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
                        <p className="text-xl font-semibold">
                            "The Trust has no other objective but to serve the people"
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-5 mt-4">
                    <div className="mb-6 text-center">
                        {/* <FileText className="w-16 h-16 text-purple-600 mx-auto mb-4" /> */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Governing Council</h3>
                        <p className="text-gray-600">View the Governing Council document</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            onClick={openModal}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium cursor-pointer"
                        >
                            View Document
                        </button>
                        
                        </div>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-60">
                        <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-xl relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-0 right-0 translate-x-full rounded-r-2xl cursor-pointer text-gray-600 bg-white p-2 hover:text-black text-xl font-bold"
                            >
                                <X />
                            </button>
                            <iframe
                                src="/documents/ugc/ALL DEPT MANDATORY DISCLOSURE.pdf"
                                title="UGC Mandatory Disclosure Document"
                                className="w-full h-full"
                                frameBorder="0"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Values Section */}
            <div className="bg-gray-50 pb-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 text-center leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>



        </div>
    );
};

export default GoverningCouncil;