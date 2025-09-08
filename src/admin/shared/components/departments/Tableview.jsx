import React, { useEffect, useState } from 'react';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';

const LoadingSkeleton = () => (
  <div className="space-y-4">
    {[...Array(5)].map((_, idx) => (
      <div key={idx} className="flex items-center gap-4 p-4 bg-white">
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
        
        <div className="w-24 h-16 bg-gray-200 rounded-lg animate-pulse" />
        
        <div className="flex-1 space-y-3">
          <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
          <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" />
        </div>
        
        <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse" />
      </div>
    ))}
  </div>
);

const DepartmentTableView = ({ tabledata = [], loading = false, editfrom, handledelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLabs, setSelectedLabs] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  const handleEdit = (rowData) => {
    if (editfrom) {
      editfrom(rowData);
    } else {
      console.log('Edit:', rowData);
    }
  };

  const handleDelete = (id) => {
    if (handledelete) {
      handledelete(id);
    } else {
      console.log('Delete:', id);
    }
  };

  const handleViewLabs = (rowData) => {
    setSelectedLabs(rowData.Labs);
    setSelectedRow(rowData);
    setShowModal(true);
  };

  // const actionButtons = (rowData) => {
  //   return (
  //     <div className="flex justify-center gap-3">
  //       <button 
  //         onClick={() => handleEdit(rowData)} 
  //         className="p-2 transition-colors duration-200 rounded-full hover:bg-blue-50"
  //       >
  //         <span className="text-lg text-blue-600">✏️</span>
  //       </button>
  //       <button 
  //         onClick={() => handleDelete(rowData?._id)} 
  //         className="p-2 transition-colors duration-200 rounded-full hover:bg-red-50"
  //       >
  //         <span className="text-lg text-red-600">🗑️</span>
  //       </button>
  //     </div>
  //   );
  // };

    const actionButtons = (rowData) => {
    return (
      <div className="flex justify-center gap-3">
        <button
          onClick={() => editfrom(rowData)}
          className="p-2 transition-colors duration-200 rounded-full hover:bg-blue-50 cursor-pointer"
        >
          <i className="text-lg text-blue-600 fi fi-rr-pen-circle"></i>
        </button>
        <button
          onClick={() => handledelete(rowData?._id)}
          className="p-2 transition-colors duration-200 rounded-full hover:bg-red-50 cursor-pointer"
        >
          <i className="text-lg text-red-600 fi fi-rr-trash"></i>
        </button>
      </div>
    );
  };


  const imageTemplate = (rowData) => {
    return (
      <div className="flex justify-center">
        <div className="relative group">
          <img 
                                 src={`${apiurl()}/${rowData?.Image}`} 

            className="object-cover w-24 h-16 transition-transform duration-200 rounded-lg shadow-sm group-hover:scale-105" 
            alt="Department"
          />
          <div className="absolute inset-0 transition-all duration-200  rounded-lg " />
        </div>
      </div>
    );
  };

  const statsTemplate = (rowData) => {
    const stats = rowData.Stats?.[0];
    if (!stats) return <span className="italic text-gray-400">No stats</span>;
    
    return (
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center gap-1">
          <span className="text-blue-600">👥</span>
          <span>{stats.students} Students</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-green-600">👨‍🏫</span>
          <span>{stats.faculty} Faculty</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-purple-600">🧪</span>
          <span>{stats.labs} Labs</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-orange-600">📊</span>
          <span>{stats.projects} Projects</span>
        </div>
      </div>
    );
  };

  const labsTemplate = (rowData) => {
    const maxDisplay = 2;
    const total = rowData.Labs?.length || 0;
    const displayed = rowData.Labs?.slice(0, maxDisplay) || [];
    
    return (
      <div className="flex items-center gap-2">
        <div className="flex-1">
          {total > 0 ? (
            <div className="flex items-center gap-2">
              <div className="flex flex-wrap gap-1">
                {displayed.map((lab, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 text-sm text-blue-700 bg-blue-100 rounded-full"
                  >
                    {lab.name}
                  </span>
                ))}
                {total > maxDisplay && (
                  <button
                    onClick={() => handleViewLabs(rowData)}
                    className="px-2 py-1 text-sm text-blue-600 transition-colors rounded-full bg-blue-50 hover:bg-blue-100"
                  >
                    +{total - maxDisplay} more
                  </button>
                )}
              </div>
              <button 
                onClick={() => handleViewLabs(rowData)}
                className="p-2 transition-colors duration-200 rounded-full hover:bg-gray-100"
              >
                <span className="text-lg text-gray-600 hover:text-blue-600">👁️</span>
              </button>
            </div>
          ) : (
            <span className="text-sm italic text-gray-400">No labs</span>
          )}
        </div>
      </div>
    );
  };

  const programsTemplate = (rowData) => {
    const programs = rowData.Programs || [];
    return (
      <div className="space-y-1">
        {programs.map((program, idx) => (
          <div key={idx} className="text-sm">
            <span className="font-medium text-gray-800">{program.degree}</span>
            <div className="text-gray-600">
              {program.level} • {program.duration}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const statusTemplate = (rowData) => {
    const getStatusColor = (status) => {
      switch (status?.toLowerCase()) {
        case 'active':
          return 'bg-green-100 text-green-700';
        case 'inactive':
          return 'bg-gray-100 text-gray-700';
        default:
          return 'bg-blue-100 text-blue-700';
      }
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(rowData.Status)}`}>
        {rowData.Status}
      </span>
    );
  };

  const descriptionTemplate = (rowData) => {
    const description = rowData.Department_Description || '';
    const truncated = description.length > 100 ? description.substring(0, 100) + '...' : description;
    
    return (
      <div className="max-w-md">
        <p className="text-sm text-gray-600" title={description}>
          {truncated}
        </p>
      </div>
    );
  };

  const TableHeader = () => (
    <div className="p-4 bg-white border-b">
      <div className="flex items-center justify-between gap-4">
        <div>
          
          <p className="text-sm text-gray-600">Total Departments: {tabledata.length}</p>
        </div>
      </div>
    </div>
  );

  const modalHeader = selectedRow && (
    <div className="flex items-center gap-4 p-4">
      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
        <span className="text-2xl">🏫</span>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Department Labs</h2>
        <p className="text-gray-500">Available Labs ({selectedLabs?.length || 0})</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white border shadow-sm rounded-xl">
      <TableHeader />
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Action</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Image</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Department Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Description</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Statistics</th>
                {/* <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Labs</th> */}
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Programs</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tabledata.map((row, index) => (
                <tr key={row._id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-4 py-4">{actionButtons(row)}</td>
                  <td className="px-4 py-4">{imageTemplate(row)}</td>
                  <td className="px-4 py-4">
                    <div className="text-sm">
                      {/* <div className="font-medium text-gray-800">Department</div> */}
                      <div className="text-gray-600">{row.Department_details.Department_name}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4">{descriptionTemplate(row)}</td>
                  <td className="px-4 py-4">{statsTemplate(row)}</td>
                  {/* <td className="px-4 py-4 min-w-[300px]">{labsTemplate(row)}</td> */}
                  <td className="px-4 py-4">{programsTemplate(row)}</td>
                  <td className="px-4 py-4">{statusTemplate(row)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Labs Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl w-[90vw] max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="border-b">
              {modalHeader}
            </div>
            <div className="p-4 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {selectedLabs && selectedLabs.map((lab, index) => (
                  <div 
                    key={index} 
                    className="relative overflow-hidden transition-all duration-200 bg-white border shadow-sm group rounded-xl hover:shadow-md"
                  >
                    <div className="w-full overflow-hidden aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <span className="text-4xl">🧪</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{lab.name}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">🔧</span>
                          <span className="text-gray-600">{lab.equipment}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">👥</span>
                          <span className="text-gray-600">Capacity: {lab.capacity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 transition-opacity duration-200 bg-black opacity-0 rounded-xl group-hover:opacity-5" />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t bg-gray-50">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentTableView;