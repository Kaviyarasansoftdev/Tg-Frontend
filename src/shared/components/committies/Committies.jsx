import React, { useState } from 'react';
import { Users, Mail, Phone, Calendar, Award, Target, CheckCircle, Search, Filter, ArrowRight, Building2, Lightbulb, UserCheck, Heart, Shield, Briefcase, TrendingUp, BookOpen, Sparkles, CircleX } from 'lucide-react';
import { Link } from 'react-router-dom';
import apiurl from '../../services/apiendpoint/apiendpoint';

export default function Committees({ committeesData }) {
    const [activeCommittee, setActiveCommittee] = useState('rdc');
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);

    const filteredCommittees = Object.entries(committeesData)?.filter(([key, committee]) =>
        committee.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        committee.acronym?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentCommittee = committeesData[activeCommittee];

    return (
        <div className="min-h-screen bg-gradient-to-br pt-5">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto text-center space-y-6">

                    {/* Tag label */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Leadership & Organization</span>
                    </div>

                    {/* 
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-purple-100 rounded-2xl">
                            <Sparkles className="w-12 h-12 text-purple-600" />
                        </div>
                    </div> */}

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        <span className="block text-purple-600">{committeesData?.Title} </span>
                    </h2>

                    {/* Description */}
                    <div dangerouslySetInnerHTML={{ __html: committeesData?.Description }} />
                     {committeesData?.Images?.length > 0 && (
              <div className="">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Images</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {committeesData.Images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                      <img
                        src={`${apiurl()}/${image}`}
                        alt={`Image ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
                </div>
            </section>

            <div className="my-8 py-14 border-t border-gray-200 max-w-7xl mx-auto px-10 bg-blue-50 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Documents</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-3  cursor-pointer px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                    >
                        <BookOpen className="w-5 h-5" />
                        {committeesData?.pdfName}
                    </button>
                </div>
            </div>

            {showModal && committeesData?.pdf && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-60">
                    <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-xl relative">
                        {/* Close button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-0 right-0 translate-x-full rounded-r-2xl cursor-pointer text-gray-600 bg-white p-2 hover:text-black text-xl font-bold"
                        >
                            <CircleX />
                        </button>

                        {/* PDF Iframe */}
                        <iframe
                            src={`${apiurl()}/${committeesData?.pdf}`}
                            title="PDF Document"
                            className="w-full h-full"
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            )}

        </div>
    );
};
