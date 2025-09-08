import React, { useState } from 'react';
import { Award, ChevronDown } from 'lucide-react';

export function ScholarshipSection() {
  const [activeAccordion, setActiveAccordion] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  const scholarships = [
    {
      title: 'Tamil Nadu Government First Graduate Scholarship',
      eligibility: [
        'Students admitted through TNEA Anna University counselling',
        'First graduate in the family',
      ],
      incomeLimit: 'No Limit',
      amount: {
        dayScholar: 'Rs. 25,000/year',
        hosteller: 'Rs. 25,000/year',
      },
    },
    {
      title: 'Tamil Nadu Government BC & MBC Scholarship',
      eligibility: [
        'Students admitted through TNEA Anna University counselling',
      ],
      incomeLimit: 'Less than 2 Lakhs',
      amount: {
        dayScholar: 'Rs. 5,000 - 6,000/year (Credited directly into student’s bank account)',
        hosteller: 'Rs. 5,000 - 6,000/year (Credited directly into student’s bank account)',
      },
    },
    {
      title: 'Tamil Nadu Government SC & ST Scholarship',
      eligibility: [
        'Students admitted through TNEA Anna University counselling',
        'Less than 2.5 Lakhs for SC or 2 Lakhs for SCC (converted Christian)',
        'OR Students admitted through Management Quota (MQ)',
        'Less than 2.5 Lakhs for SC or 2 Lakhs for SCC (converted Christian)',
      ],
      incomeLimit: 'Less than 2.5 Lakhs (SC), Less than 2 Lakhs (SCC)',
      amount: {
        dayScholar: 'Rs. 50,000/year Tuition fees (Credited into college account) + Rs. 4,500/year Maintenance allowance (Credited into student’s bank account) for TNEA; Rs. 70,000/year Tuition fees + Rs. 4,500/year Maintenance allowance for MQ',
        hosteller: 'Rs. 50,000/year Tuition fees (Credited into college account) + Rs. 4,500/year Maintenance allowance (Credited into student’s bank account) for TNEA; Rs. 70,000/year Tuition fees + Rs. 4,500/year Maintenance allowance for MQ',
      },
    },
    {
      title: 'Tamil Nadu Government Farmer Scholarship',
      eligibility: [
        'Sons/Daughters of Farmers',
        'Father of the student should have Farmer ID Card',
      ],
      incomeLimit: 'Not specified',
      amount: {
        dayScholar: 'Rs. 6,500/year (Credited directly into Father’s bank account)',
        hosteller: 'Rs. 6,500/year (Credited directly into Father’s bank account)',
      },
    },
    {
      title: 'National Scholarship',
      eligibility: [
        'Students belong to Minority communities (Muslims, Christians, etc.)',
      ],
      incomeLimit: 'Less than 2 Lakhs',
      amount: {
        dayScholar: 'Rs. 25,000/year (Rs. 20,000 credited into college account + Rs. 5,000 credited into student’s account)',
        hosteller: 'Rs. 25,000/year (Rs. 20,000 credited into college account + Rs. 5,000 credited into student’s account)',
      },
    },
  ];

  const studentsBenefited = [
    { year: '2022-2023', government: 775, institution: 150 },
    { year: '2021-2022', government: 770, institution: 109 },
    { year: '2020-2021', government: 649, institution: 72 },
    { year: '2019-2020', government: 662, institution: 76 },
    { year: '2018-2019', government: 880, institution: 124 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-50 relative overflow-hidden pt-5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-sky-300 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-6 mb-12 py-16 px-6">
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full shadow-md">
          <Award className="w-4 h-4 text-blue-600 mr-2" />
          <span className="text-sm font-semibold text-blue-800 uppercase tracking-wide">
            Scholarships
          </span>
        </div> */}
         <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
           <Award className="w-4 h-4 text-blue-600 mr-2" />
          <span className="text-sm font-medium text-blue-700 uppercase tracking-wide">
           Scholarships
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Financial Support at
          <span className="block text-blue-600">Tagore Institute of Engineering and Technology</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore the scholarships offered by the Government of Tamil Nadu, Government of India, and our institution to support deserving students in their academic journey.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
        {/* Description */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Empowering Education Through Scholarships</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Tagore Institute of Engineering and Technology is committed to making education accessible through various scholarship programs, supporting students based on merit, financial need, and specific criteria.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Scholarship Details
          </h2>
          {scholarships.map((scholarship, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-blue-100 overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-5 text-left flex items-center justify-between hover:bg-blue-50/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900">{scholarship.title}</h3>
                <div className={`transform transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 mb-4"><strong>Eligibility:</strong></p>
                  <ul className="list-disc pl-5 mb-4 text-gray-600">
                    {scholarship.eligibility.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-gray-600 mb-4"><strong>Annual Income Limit:</strong> {scholarship.incomeLimit}</p>
                  <p className="text-gray-600"><strong>Scholarship Amount:</strong></p>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Day Scholar: {scholarship.amount.dayScholar}</li>
                    <li>Hosteller: {scholarship.amount.hosteller}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tables Section */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Students Benefited by Government Scholarships
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-blue-100">
                <thead>
                  <tr className="bg-blue-100 text-blue-800">
                    <th className="p-4 text-left font-semibold">S.No</th>
                    <th className="p-4 text-left font-semibold">Academic Year</th>
                    <th className="p-4 text-left font-semibold">No. of Students Benefited</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsBenefited.map((row, index) => (
                    <tr key={index} className="border-t border-blue-100 hover:bg-blue-50/50 transition-all duration-300">
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">{row.year}</td>
                      <td className="p-4">{row.government}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Students Benefited by Institutional Scholarships
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-blue-100">
                <thead>
                  <tr className="bg-blue-100 text-blue-800">
                    <th className="p-4 text-left font-semibold">S.No</th>
                    <th className="p-4 text-left font-semibold">Academic Year</th>
                    <th className="p-4 text-left font-semibold">No. of Students Benefited</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsBenefited.map((row, index) => (
                    <tr key={index} className="border-t border-blue-100 hover:bg-blue-50/50 transition-all duration-300">
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">{row.year}</td>
                      <td className="p-4">{row.institution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}