import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Award, FileText, BookOpen, Shield, Calendar, CheckCircle, CircleX } from 'lucide-react';
import { getNaacDataById } from '../../services/apinaac/apinaac';
import apiurl from '../../services/apiendpoint/apiendpoint';


const NaacAccreditationSection = ({ naactitle }) => {
  const [activeTab, setActiveTab] = useState('');
  const [naacData, setNaacData] = useState([]);
  const [showModal, setShowModal] = useState(null); // Store document ID for modal
  const isMounted = useRef(true);

  // Map naactitle data to tabsData format for sidebar
  const tabsData = naactitle && Array.isArray(naactitle) ? naactitle.map((item) => ({
    id: item._id,
    label: item.naactitle, // Use naactitle for sidebar tab label
    subtitle: item.naacsubtitle || 'No Subtitle Available', // Use naacsubtitle for sidebar
    icon: <Award className="w-5 h-5" />,
  })) : [];

  // Fetch detailed NAAC data when activeTab changes
  const fetchNaacData = useCallback(async (id) => {
    try {
      setNaacData([]); // Clear previous data
      const response = await getNaacDataById(id);
      if (isMounted.current) {
        setNaacData(Array.isArray(response) ? response : [response]); // Ensure array
      }
    } catch (error) {
      console.error('Error fetching NAAC data:', error);
      if (isMounted.current) {
        setNaacData([]);
      }
    }
  }, []);

  // Set initial activeTab and fetch data
  useEffect(() => {
    if (tabsData.length > 0 && !activeTab) {
      setActiveTab(tabsData[0].id);
      fetchNaacData(tabsData[0].id);
    }
  }, [tabsData, fetchNaacData]);

  // Fetch NAAC data when activeTab changes
  const handleTabClick = (id) => {
    setActiveTab(id);
    setShowModal(null); // Close modal on tab change
    fetchNaacData(id); // Fetch new data
  };

  // Render a single document card
  const renderDocumentCard = (doc) => {
    // const pdfName = doc?.Title ? doc.Title.split('/').pop() || 'View Document' : 'View Document';
    const pdfName =  'View Document' ;

    return (
      <div key={doc._id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4">
        <div className="flex items-start space-x-4 mb-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{doc.Title || 'No Title Available'}</h1>
            <p className="text-purple-600 font-medium mt-1">{doc.subtitle || 'No Subtitle Available'}</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{doc.Description || 'No description available.'}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-500 mb-1">File Type</div>
            <div className="font-semibold text-gray-900">{doc.pdf ? 'PDF Document' : 'N/A'}</div>
          </div>
          {/* <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-500 mb-1">File Size</div>
            <div className="font-semibold text-gray-900">N/A</div>
          </div> */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-500 mb-1">Last Updated</div>
            <div className="font-semibold text-gray-900">
              {doc.updatedAt?.$date ? new Date(doc.updatedAt.$date).toLocaleDateString() : doc.updatedAt ? new Date(doc.updatedAt).toLocaleDateString() : 'N/A'}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setShowModal(doc._id)}
            disabled={!doc.pdf}
            className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-colors ${
              doc.pdf ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            {pdfName}
          </button>
        </div>
        {doc.showNotice && (
          <div className="mt-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg mt-0.5">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Important Notice</h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  This document is an official record of the institution's NAAC accreditation process.
                  All information contained herein has been verified and approved by the relevant authorities.
                  For official inquiries or clarifications, please contact the Internal Quality Assurance Cell (IQAC) office.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="py-9 pt-16 bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">NAAC Accreditation Portal</h1>
              <p className="text-gray-600 mt-1">National Assessment and Accreditation Council</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Grade A+ Institution</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Accredited Since 2019</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>CGPA 3.65</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {tabsData.length === 0 ? (
          <div className="text-center text-gray-600">No NAAC data available</div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-80">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Document Categories</h2>
                <nav className="space-y-2">
                  {tabsData.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`p-1.5 rounded ${
                        activeTab === tab.id ? 'bg-purple-100' : 'bg-gray-100'
                      }`}>
                        {tab.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{tab.label}</div>
                        <div className="text-xs text-gray-500">{tab.subtitle}</div>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="max-h-[70vh] overflow-y-auto">
                {naacData.length === 0 ? (
                  <div className="text-center text-gray-600">No documents available</div>
                ) : (
                  naacData.map((doc) => renderDocumentCard(doc))
                )}
              </div>

              {/* PDF Modal */}
              {showModal && naacData.find((doc) => doc._id === showModal)?.pdf && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl bg-opacity-60">
                  <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-xl relative">
                    <button
                      onClick={() => setShowModal(null)}
                      className="absolute top-0 right-0 translate-x-full rounded-r-2xl cursor-pointer text-gray-600 bg-white p-2 hover:text-black text-xl font-bold"
                    >
                      <CircleX />
                    </button>
                    <iframe
                      src={`${apiurl()}/${naacData.find((doc) => doc._id === showModal).pdf}`}
                      title="NAAC Document"
                      className="w-full h-full"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NaacAccreditationSection;