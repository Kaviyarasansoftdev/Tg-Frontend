import { X, FileText, Calendar, CircleCheck, BookOpen, FileDown, Scale, Trophy, Clock } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ExamCell() {
  const [activeTab, setActiveTab] = useState('calendar');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState('');
  const { id } = useParams()

  useEffect(() => {
    setActiveTab(id)
  }, [id])

  const openModal = (pdfPath) => {
    setCurrentPdf(pdfPath);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPdf('');
  };

  const tabs = [
    {
      id: 'calendar',
      label: 'Academic Calendar',
      icon: Calendar,
      description: 'Important academic dates and schedules',
      documents: '/documents/examcell/calendar/MASTER CALENDAR 2025-26 (ODD SEMESTER).pdf' // Single document
    },
    {
      id: 'circulars',
      label: 'Circulars',
      icon: CircleCheck,
      description: 'Official notices and announcements',
      documents: [ // Multiple documents
        { name: 'ACADEMIC SCHEDULE-UG-I SEM', path: '/documents/examcell/circular/ACADEMIC SCHEDULE-UG-I SEM.pdf' },
        { name: 'ACADEMIC SCHEDULE-UG', path: '/documents/examcell/circular/ACADEMIC SCHEDULE-UG.pdf' },
      ]
    },
    {
      id: 'curriculam',
      label: 'Curriculum Syllabus',
      icon: BookOpen,
      description: 'Complete course curriculum and syllabus',
      documents: [
        { name: 'B.E. EEE', path: '/documents/examcell/curriculum/B.E. EEE.pdf' },
        { name: 'B.E.Cse (AIML)', path: '/documents/examcell/curriculum/B.E.Cse (AIML).pdf' },
        { name: 'B.E.CSE', path: '/documents/examcell/curriculum/B.E.CSE.pdf' },
        { name: 'B.E.ECE', path: '/documents/examcell/curriculum/B.E.ECE.pdf' },
        { name: 'B.E.Mech', path: '/documents/examcell/curriculum/B.E.Mech.pdf' },
        { name: 'B.Tech.AIDS', path: '/documents/examcell/curriculum/B.Tech.AIDS.pdf' },
        { name: 'B.Tech.IT', path: '/documents/examcell/curriculum/B.Tech.IT.pdf' },
        { name: 'BE.Civil', path: '/documents/examcell/curriculum/BE.Civil.pdf' },
        { name: 'M.B.A', path: '/documents/examcell/curriculum/M.B.A.pdf' },
        { name: 'M.E. VLSI Design ', path: '/documents/examcell/curriculum/M.E. VLSI Design.pdf' },
        { name: 'M.E.CSE', path: '/documents/examcell/curriculum/M.E.CSE.pdf' },
      ]
    },
    {
      id: 'forms',
      label: 'Forms & Formats',
      icon: FileDown,
      description: 'Downloadable forms and templates',
      documents: [
        { name: 'pgthesis', path: '/documents/examcell/Forms/pgthesis.pdf' },
        { name: 'ugthesis', path: '/documents/examcell/Forms/ugthesis.pdf' },
      ]
    },
    {
      id: 'regulations',
      label: 'Regulations',
      icon: Scale,
      description: 'Academic rules and regulations',
      documents: [
        { name: 'PG-REGULATIONS-2021-MBA', path: '/documents/examcell/Regulations/PG-REGULATIONS-2021-MBA.pdf' },
        { name: 'PG-REGULATIONS-2021', path: '/documents/examcell/Regulations/PG-REGULATIONS-2021.pdf' },
        { name: 'UG-REGULATIONS-2021', path: '/documents/examcell/Regulations/UG-REGULATIONS-2021.pdf' },
      ]
    },
    {
      id: 'result',
      label: 'Results',
      icon: Trophy,
      description: 'Examination results and grades',
      documents: [
        { name: 'Semester 1 Results', path: '/documents/results/sem1-results.pdf' },
        { name: 'Semester 2 Results', path: '/documents/results/sem2-results.pdf' },
        { name: 'Annual Results 2024', path: '/documents/results/annual-2024.pdf' }
      ]
    },
    {
      id: 'timetable',
      label: 'Timetable',
      icon: Clock,
      description: 'Class schedules and exam timetables',
      documents: [
        { name: 'Class Timetable', path: '/documents/timetable/class-schedule.pdf' },
        { name: 'Exam Timetable', path: '/documents/timetable/exam-schedule.pdf' }
      ]
    },
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-10">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              ExamCell Portal
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your comprehensive hub for academic resources, examination schedules, and institutional documents
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden sticky top-32">
              <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600">
                <h3 className="text-white font-semibold text-lg">Navigation</h3>
                <p className="text-indigo-100 text-sm mt-1">Select a section</p>
              </div>

              <nav className="p-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left p-4 rounded-xl mb-2 transition-all duration-200 group ${activeTab === tab.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                        : 'hover:bg-gray-50 text-gray-700 hover:text-indigo-600'
                        }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent
                          className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-gray-500 group-hover:text-indigo-600'
                            }`}
                        />
                        <div>
                          <div className="font-medium text-sm">{tab.label}</div>
                          <div className={`text-xs mt-0.5 ${activeTab === tab.id ? 'text-indigo-100' : 'text-gray-500'
                            }`}>
                            {tab.description.split(' ').slice(0, 3).join(' ')}...
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden">

              {/* Content Header */}
              <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <activeTabData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {activeTabData.label}
                    </h2>
                    <p className="text-gray-300 text-lg">
                      {activeTabData.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8">
                {/* Check if documents is array or single document */}
                {Array.isArray(activeTabData.documents) ? (
                  /* Multiple Documents Grid */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeTabData.documents.map((doc, index) => (
                      <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100 p-6 transform hover:scale-105 transition-all duration-200 hover:shadow-xl">

                        {/* PDF Icon */}
                        <div className="mb-4">
                          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl w-12 h-12 flex items-center justify-center shadow-md">
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Document Info */}
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {doc.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Click to view or download this document
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2">
                          <button
                            onClick={() => openModal(doc.path)}
                            className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg text-sm"
                          >
                            View Document
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Single Document Card */
                  <div className="max-w-lg mx-auto text-center">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 transform hover:scale-105 transition-transform duration-200">

                      {/* PDF Icon */}
                      <div className="mb-6">
                        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl w-20 h-20 mx-auto flex items-center justify-center shadow-lg">
                          <FileText className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Document Info */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {activeTabData.label} Document
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Access the latest {activeTabData.label.toLowerCase()} information and official documentation.
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <button
                          onClick={() => openModal(activeTabData.documents)}
                          className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          View Document
                        </button>

                      </div>

                      {/* Additional Info */}
                      {/* <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Last Updated</span>
                          <span>Jan 2024</span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
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
              src={currentPdf}
              title="NIRF Document"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </div>
  );
}