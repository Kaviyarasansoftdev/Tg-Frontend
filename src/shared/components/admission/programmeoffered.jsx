
import React, { useEffect, useState } from 'react';
import { BookOpen, Calendar, Award, ChevronRight, Loader2 } from 'lucide-react';
import { getalldepartmentname } from '../../../admin/shared/services/apidepartment/apidepartmentdetails';

export default function Programmeoffered() {
  const [programmes, setProgrammes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgrammes = async () => {
      try {
        setLoading(true);
        const response = await getalldepartmentname();
        let data = response || [];
        // Filter out H&S as it's not a degree program
        data = data.filter(p => p.Department_shortName !== 'H&S');
        setProgrammes(data);
      } catch (err) {
        setError('Failed to fetch programmes');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProgrammes();
  }, []);

  const getDuration = (name) => {
    if (name.startsWith('M.E-') || name === 'MBA') {
      return '2 Years';
    } else {
      return '4 Years';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading programmes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 lg:pt-10">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-sm font-medium text-blue-700 uppercase tracking-wide px-4 py-2 bg-blue-50 rounded-full">
                Academic Programs
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Programmes Offered</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of undergraduate and postgraduate programs designed to shape future leaders
            </p>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((programme, index) => (
            <div 
              key={programme._id || index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {programme.Department_shortName || 'DEPT'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {programme.Department_name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-blue-500" />
                    <span className="text-sm">Duration: {getDuration(programme.Department_name)}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-blue-500" />
                    <span className="text-sm">Established: {programme.Department_established || 'N/A'}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="w-4 h-4 mr-3 text-blue-500" />
                    <span className="text-sm">Accredited Program</span>
                  </div>
                </div>

                {/* <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group">
                  <span className="mr-2">View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {programmes.length === 0 && !loading && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Programmes Found</h3>
            <p className="text-gray-600">There are currently no programmes available to display.</p>
          </div>
        )}

        {/* Statistics Section */}
        {programmes.length > 0 && (
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Program Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{programmes.length}</div>
                <div className="text-gray-600">Total Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {programmes.filter(p => getDuration(p.Department_name) === '4 Years').length}
                </div>
                <div className="text-gray-600">UG Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {programmes.filter(p => getDuration(p.Department_name) === '2 Years').length}
                </div>
                <div className="text-gray-600">PG Programs</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}