// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { MultiSelect } from 'primereact/multiselect';
// import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { useEffect, useState } from 'react';
// import moment from 'moment-timezone';
// import { getFilterOptions } from '../../services/apihookups/apihookups';




// const LoadingSkeleton = () => (
//   <div className="space-y-4">
//     {[...Array(5)].map((_, idx) => (
//       <div key={idx} className="flex items-center gap-4 p-4 bg-white">
//         <div className="flex gap-2">
//           <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
//           <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
//         </div>
        
//         <div className="w-24 h-16 bg-gray-200 rounded-lg animate-pulse" />
        
//         <div className="flex-1 space-y-3">
//           <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
//           <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" />
//         </div>
        
//         <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse" />
//       </div>
//     ))}
//   </div>
// );

// const Tableview = (props) => {
//   const { tabledata, editfrom, handledelete, cusfilter, filtervalues, onPage, page, loading } = props;
//   const [tempFilterValues, setTempFilterValues] = useState(filtervalues);
//   const [filterOptions, setFilterOptions] = useState([]);
//   const [showFilterPanel, setShowFilterPanel] = useState(false);
//   const [searchValue, setSearchValue] = useState('');

//   const calculateDaysRemaining = (endDate) => {
//     const today = moment();
//     const end = moment(endDate);
//     const days = end.diff(today, 'days');
//     return days;
//   };
//   useEffect(() => {
//     setTempFilterValues(filtervalues);
//   }, [filtervalues]);

//   useEffect(() => {
//     columns.filter(col => col.filter).forEach(async (col) => {
//       const options = await getFilterOptions(col.field);
//       setFilterOptions(prev => ({
//         ...prev,
//         [col.field]: options[col.field].map(val => ({
//           label: val,
//           value: val
//         }))
//       }));
//     });
//   }, []);

//   const actionbotton = (rowData) => {
//     return (
//       <div className="flex justify-center gap-3">
//         <button
//           onClick={() => editfrom(rowData)}
//           className="p-2 transition-colors duration-200 rounded-full hover:bg-blue-50"
//         >
//           <i className="text-lg text-blue-600 fi fi-rr-pen-circle"></i>
//         </button>
//         <button
//           onClick={() => handledelete(rowData?._id)}
//           className="p-2 transition-colors duration-200 rounded-full hover:bg-red-50"
//         >
//           <i className="text-lg text-red-600 fi fi-rr-trash"></i>
//         </button>
//       </div>
//     );
//   };

//   const statusTemplate = (rowData) => {
//     const getStatusColor = (status) => {
//       switch (status.toLowerCase()) {
//         case 'active':
//           return 'bg-green-100 text-green-700';
//         case 'inactive':
//           return 'bg-gray-100 text-gray-700';
//         default:
//           return 'bg-blue-100 text-blue-700';
//       }
//     };

//     return (
//       <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(rowData.Status)}`}>
//         {rowData.Status}
//       </span>
//     );
//   };
  



//   const handleApplyFilters = (key) => {
//     cusfilter(key, tempFilterValues[key]);
//     onPage(page);
//   };

//   const handleClearFilters = (key) => {
//     setTempFilterValues(prev => ({ ...prev, [key]: null }));
//     cusfilter(key, null);
//     onPage(page);
//   };

//   const renderDescription = (rowData) => {
//     return (
//       <div
//         dangerouslySetInnerHTML={{ __html: rowData.Product_Description }}
//       />
//     );
//   };

//   const image = (rowData) => {
//     if (!rowData.Image) return null;
//     const imageUrl = Array.isArray(rowData.Image) ? rowData.Image[0] : rowData.Image;
  
//     return (
//       <div className="flex justify-center">
//         <img
//           src={`${apiurl()}/${imageUrl}`}
//           className="object-cover h-16 transition-transform duration-200 rounded-lg shadow-sm w-26 group-hover:scale-105"
//           alt={rowData.Product_Name || 'Product Image'}
//         />
//       </div>
//     );
//   };
  
//   const renderProductsCount = (rowData) => {
//     const productCount = rowData.Products ? rowData.Products.length : 0;
//     return `${productCount} ${productCount === 1 ? 'product' : 'products'}`;
//   };
//   const dateTemplate = (rowData, field) => {
//     return moment(rowData[field]).format('MMM DD, YYYY');
//   };

//   const expiryTemplate = (rowData) => {
//     const daysRemaining = calculateDaysRemaining(rowData.endDate);
//     let colorClass = 'bg-green-100 text-green-700';
    
//     if (daysRemaining < 0) {
//       colorClass = 'bg-red-100 text-red-700';
//     } else if (daysRemaining <= 3) {
//       colorClass = 'bg-yellow-100 text-yellow-700';
//     }

//     return (
//       <div className="flex items-center gap-2">
//         <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
//           {daysRemaining < 0 ? 'Expired' : `${daysRemaining} days left`}
//         </span>
//       </div>
//     );
//   };


//   const columns = [
//     { field: 'Faculty_name', header: 'Name', filter: true },
//     { field: 'Faculty_designation', header: 'Designation', filter: true },
//     { field: 'Faculty_email', header: 'Email', filter: true },
//     { field: 'Faculty_phone', header: 'Phone', filter: true },
//     { field: 'Faculty_qualification', header: 'Qualification', filter: true },
//     { field: 'Faculty_specialization', header: 'Specialization', filter: true }, 
//     { field: 'Faculty_experience', header: 'Experience', filter: true },
//     { field: 'Faculty_joining_date', header: 'Joining Date',body: (rowData) => moment(rowData.Faculty_joining_date).format('YYYY-MM-DD'), filter: true },
//     { field: 'Faculty_bio', header: 'Bio', filter: true },
//     { field: 'Status', header: 'Status', filter: true, body: statusTemplate }
//   ];


//   const FilterPanel = () => (
//     <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${showFilterPanel ? 'translate-x-0' : 'translate-x-full'}`}>
//       <div className="flex flex-col h-full">
//         <div className="p-4 border-b">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
//             <button
//               onClick={() => setShowFilterPanel(false)}
//               className="p-2 transition-colors duration-200 rounded-full hover:bg-gray-100"
//             >
//               <i className="text-gray-600 fi fi-rr-cross"></i>
//             </button>
//           </div>
//         </div>

//         <div className="flex-1 p-4 space-y-6 overflow-y-auto">
//           {columns.filter(col => col.filter).map((col, index) => (
//             <div key={index} className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700">
//                 {col.header}
//               </label>
//               <MultiSelect
//                 value={tempFilterValues[col.field]}
//                 options={filterOptions[col.field] || []}
//                 className="w-full"
//                 onChange={(e) => setTempFilterValues(prev => ({ ...prev, [col.field]: e.value }))}
//                 placeholder={`Select ${col.header}`}
//                 filter
//                 showClear
//                 maxSelectedLabels={3}
//                 panelClassName="!w-72"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="p-4 border-t bg-gray-50">
//           <div className="flex gap-3">
//             <button
//               onClick={() => {
//                 Object.keys(tempFilterValues).forEach(key => handleClearFilters(key));
//                 setShowFilterPanel(false);
//               }}
//               className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Clear All
//             </button>
//             <button
//               onClick={() => {
//                 Object.keys(tempFilterValues).forEach(key => handleApplyFilters(key));
//                 setShowFilterPanel(false);
//               }}
//               className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Apply Filters
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const TableHeader = () => (
//     <div className="p-4 bg-white border-b">
//       <div className="flex items-center justify-between gap-4">
//         <div className="relative flex-1 max-w-md">
//         </div>
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => setShowFilterPanel(true)}
//             className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             <i className="mr-2 fi fi-rr-filter"></i>
//             Filters
//             {Object.values(tempFilterValues).some(v => v && v.length > 0) && (
//               <span className="ml-2 px-2 py-0.5 text-xs font-medium text-white bg-blue-600 rounded-full">
//                 {Object.values(tempFilterValues).filter(v => v && v.length > 0).length}
//               </span>
//             )}
//           </button>
//           <button
//             onClick={() => {
//               Object.keys(tempFilterValues).forEach(key => handleClearFilters(key));
//               setSearchValue('');
//             }}
//             className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             <i className="mr-2 fi fi-rr-refresh"></i>
//             Reset
//           </button>
//         </div>
//       </div>

//       {Object.entries(tempFilterValues).some(([_, value]) => value && value.length > 0) && (
//         <div className="flex flex-wrap gap-2 mt-4">
//           {Object.entries(tempFilterValues).map(([key, value]) => {
//             if (value && value.length > 0) {
//               return value.map((v, i) => (
//                 <span
//                   key={`${key}-${i}`}
//                   className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
//                 >
//                   {key}: {v}
//                   <button
//                     onClick={() => {
//                       setTempFilterValues(prev => ({
//                         ...prev,
//                         [key]: prev[key].filter(item => item !== v)
//                       }));
//                       handleApplyFilters(key);
//                     }}
//                     className="ml-2 hover:text-blue-900"
//                   >
//                     <i className="fi fi-rr-cross-small"></i>
//                   </button>
//                 </span>
//               ));
//             }
//             return null;
//           })}
//         </div>
//       )}
//     </div>
//   );


//   return (
//     <div className="bg-white border shadow-sm rounded-xl">
//       <TableHeader />
//       {loading ? (
//         <LoadingSkeleton />
//       ) : (
//       <DataTable
//         value={tabledata}
//         scrollable
//         scrollHeight="680px"
//         className="!text-sm"
//         rowClassName={() => 'hover:bg-gray-50 transition-colors duration-200'}
//         showGridlines={false}
//         stripedRows
//         responsiveLayout="scroll"
//       >
//         <Column
//           header="Actions"
//           body={actionbotton}
//           headerClassName="text-gray-700 bg-gray-50"
//           className="text-center"
//           style={{ width: '120px' }}
//         />
//         <Column
//           header="Image"
//           body={image}
//           headerClassName="text-gray-700 bg-gray-50"
//           style={{ width: '150px' }}
//         />
//         {columns.map((col, i) => (
//           col.formattype === 'array' ? (
//             <Column
//               key={i}
//               header={col.header}
//               field={col.field}
//               style={{ minWidth: col.width }}
//               body={array}
//               headerClassName="text-gray-700 bg-gray-50"
//             />
//           ) : (
//             <Column
//               key={i}
//               field={col.field}
//               header={col.header}
//               body={col.body}
//               headerClassName="text-gray-700 bg-gray-50"
//             />
//           )
//         ))}
//       </DataTable>
//       )}
//       <FilterPanel />
//     </div>
//   );
// };

// export default Tableview;

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect } from 'primereact/multiselect';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import { getFilterOptions } from '../../services/apihookups/apihookups';

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

const Tableview = (props) => {
  const { tabledata, editfrom, handledelete, cusfilter, filtervalues, onPage, page, loading } = props;
  const [tempFilterValues, setTempFilterValues] = useState(filtervalues);
  const [filterOptions, setFilterOptions] = useState([]);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setTempFilterValues(filtervalues);
  }, [filtervalues]);

  useEffect(() => {
    columns.filter(col => col.filter).forEach(async (col) => {
      const options = await getFilterOptions(col.field);
      setFilterOptions(prev => ({
        ...prev,
        [col.field]: options[col.field].map(val => ({
          label: val,
          value: val
        }))
      }));
    });
  }, []);

  const actionbotton = (rowData) => {
    return (
      <div className="flex justify-center gap-2">
        <button
          onClick={() => editfrom(rowData)}
          className="p-2 transition-all duration-200 rounded-lg hover:bg-blue-50 hover:scale-110"
          title="Edit Faculty"
        >
          <i className="text-lg text-blue-600 fi fi-rr-pen-circle"></i>
        </button>
        <button
          onClick={() => handledelete(rowData?._id)}
          className="p-2 transition-all duration-200 rounded-lg hover:bg-red-50 hover:scale-110"
          title="Delete Faculty"
        >
          <i className="text-lg text-red-600 fi fi-rr-trash"></i>
        </button>
      </div>
    );
  };

  const facultyProfileTemplate = (rowData) => {
    const imageUrl = rowData.Image ? `${apiurl()}/${rowData.Image}` : null;
    
    return (
      <div className="flex items-center gap-4 py-2">
        <div className="relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              className="object-cover w-12 h-12 border-2 border-gray-200 rounded-full shadow-sm"
              alt={rowData.Faculty_name}
            />
          ) : (
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-sm">
              {rowData.Faculty_name?.charAt(0)?.toUpperCase() || 'F'}
            </div>
          )}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 truncate">
              {rowData.Faculty_name}
            </h3>
            <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-sm">
              {rowData.Department_details?.Department_shortName || 'N/A'}
            </span>
          </div>
          <p className="text-sm text-gray-600 truncate">
            {rowData.Faculty_designation}
          </p>
          <p className="text-xs text-gray-500">
            {rowData.Department_details?.Department_name}
          </p>
        </div>
      </div>
    );
  };

  const contactTemplate = (rowData) => {
    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <i className="text-gray-400 fi fi-rr-envelope text-sm"></i>
          <span className="text-sm text-gray-700">{rowData.Faculty_email}</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="text-gray-400 fi fi-rr-phone-call text-sm"></i>
          <span className="text-sm text-gray-700">{rowData.Faculty_phone}</span>
        </div>
      </div>
    );
  };

  const qualificationTemplate = (rowData) => {
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <i className="text-blue-500 fi fi-rr-graduation-cap text-sm"></i>
          <span className="text-sm font-medium text-gray-800">{rowData.Faculty_qualification}</span>
        </div>
        <div className="text-xs text-gray-600">
          <span className="font-medium">Specialization:</span> {rowData.Faculty_specialization}
        </div>
        <div className="flex items-center gap-1">
          <i className="text-green-500 fi fi-rr-briefcase text-xs"></i>
          <span className="text-xs text-gray-600">{rowData.Faculty_experience} years exp.</span>
        </div>
      </div>
    );
  };

  const statusTemplate = (rowData) => {
    const getStatusConfig = (status) => {
      switch (status?.toLowerCase()) {
        case 'active':
          return {
            bg: 'bg-green-100',
            text: 'text-green-700',
            icon: 'fi fi-rr-check-circle',
            iconColor: 'text-green-500'
          };
        case 'inactive':
          return {
            bg: 'bg-gray-100',
            text: 'text-gray-700',
            icon: 'fi fi-rr-pause-circle',
            iconColor: 'text-gray-500'
          };
        default:
          return {
            bg: 'bg-blue-100',
            text: 'text-blue-700',
            icon: 'fi fi-rr-info-circle',
            iconColor: 'text-blue-500'
          };
      }
    };

    const config = getStatusConfig(rowData.Status);

    return (
      <div className="flex items-center justify-center">
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}>
          <i className={`${config.icon} ${config.iconColor} text-xs`}></i>
          {rowData.Status}
        </span>
      </div>
    );
  };

  const dateTemplate = (rowData) => {
    return (
      <div className="flex items-center gap-2">
        <i className="text-gray-400 fi fi-rr-calendar text-sm"></i>
        <span className="text-sm text-gray-700">
          {moment(rowData.Faculty_joining_date).format('MMM DD, YYYY')}
        </span>
      </div>
    );
  };

  const bioTemplate = (rowData) => {
    return (
      <div className="max-w-xs">
        <p className="text-sm text-gray-600 line-clamp-2" title={rowData.Faculty_bio}>
          {rowData.Faculty_bio}
        </p>
        {rowData.Faculty_research_interests && (
          <div className="mt-2">
            <span className="text-xs font-medium text-gray-500">Research:</span>
            <p className="text-xs text-gray-500 line-clamp-1" title={rowData.Faculty_research_interests}>
              {rowData.Faculty_research_interests}
            </p>
          </div>
        )}
      </div>
    );
  };

  const handleApplyFilters = (key) => {
    cusfilter(key, tempFilterValues[key]);
    onPage(page);
  };

  const handleClearFilters = (key) => {
    setTempFilterValues(prev => ({ ...prev, [key]: null }));
    cusfilter(key, null);
    onPage(page);
  };

  const columns = [
    { field: 'Faculty_name', header: 'Faculty Profile', filter: true, body: facultyProfileTemplate },
    { field: 'Faculty_email', header: 'Contact Info', filter: true, body: contactTemplate },
    { field: 'Faculty_qualification', header: 'Qualification & Experience', filter: true, body: qualificationTemplate },
    { field: 'Faculty_joining_date', header: 'Joining Date', body: dateTemplate, filter: true },
    { field: 'Faculty_bio', header: 'Bio & Research', filter: true, body: bioTemplate },
    { field: 'Status', header: 'Status', filter: true, body: statusTemplate }
  ];

  const FilterPanel = () => (
    <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${showFilterPanel ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
            <button
              onClick={() => setShowFilterPanel(false)}
              className="p-2 transition-colors duration-200 rounded-full hover:bg-gray-100"
            >
              <i className="text-gray-600 fi fi-rr-cross"></i>
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-6 overflow-y-auto">
          {columns.filter(col => col.filter).map((col, index) => (
            <div key={index} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {col.header}
              </label>
              <MultiSelect
                value={tempFilterValues[col.field]}
                options={filterOptions[col.field] || []}
                className="w-full"
                onChange={(e) => setTempFilterValues(prev => ({ ...prev, [col.field]: e.value }))}
                placeholder={`Select ${col.header}`}
                filter
                showClear
                maxSelectedLabels={3}
                panelClassName="!w-72"
              />
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-gray-50">
          <div className="flex gap-3">
            <button
              onClick={() => {
                Object.keys(tempFilterValues).forEach(key => handleClearFilters(key));
                setShowFilterPanel(false);
              }}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Clear All
            </button>
            <button
              onClick={() => {
                Object.keys(tempFilterValues).forEach(key => handleApplyFilters(key));
                setShowFilterPanel(false);
              }}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 border border-transparent rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const TableHeader = () => (
    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <i className="text-blue-600 fi fi-rr-users text-lg"></i>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Faculty Members</h2>
            <p className="text-sm text-gray-600">Manage your academic staff</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilterPanel(true)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <i className="mr-2 fi fi-rr-filter"></i>
            Filters
            {Object.values(tempFilterValues).some(v => v && v.length > 0) && (
              <span className="ml-2 px-2 py-0.5 text-xs font-medium text-white bg-blue-600 rounded-full">
                {Object.values(tempFilterValues).filter(v => v && v.length > 0).length}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              Object.keys(tempFilterValues).forEach(key => handleClearFilters(key));
              setSearchValue('');
            }}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <i className="mr-2 fi fi-rr-refresh"></i>
            Reset
          </button>
        </div>
      </div>

      {Object.entries(tempFilterValues).some(([_, value]) => value && value.length > 0) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {Object.entries(tempFilterValues).map(([key, value]) => {
            if (value && value.length > 0) {
              return value.map((v, i) => (
                <span
                  key={`${key}-${i}`}
                  className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
                >
                  {key}: {v}
                  <button
                    onClick={() => {
                      setTempFilterValues(prev => ({
                        ...prev,
                        [key]: prev[key].filter(item => item !== v)
                      }));
                      handleApplyFilters(key);
                    }}
                    className="ml-2 hover:text-blue-900"
                  >
                    <i className="fi fi-rr-cross-small"></i>
                  </button>
                </span>
              ));
            }
            return null;
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white border shadow-lg rounded-xl overflow-hidden">
      <TableHeader />
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="overflow-hidden">
          <DataTable
            value={tabledata}
            scrollable
            scrollHeight="680px"
            className="!text-sm faculty-table"
            rowClassName={(rowData, { rowIndex }) => 
              `${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-all duration-200 cursor-pointer`
            }
            showGridlines={false}
            responsiveLayout="scroll"
          >
            <Column
              header="Actions"
              body={actionbotton}
              headerClassName="text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 font-semibold"
              className="text-center"
              style={{ width: '120px' }}
            />
            {columns.map((col, i) => (
              <Column
                key={i}
                field={col.field}
                header={col.header}
                body={col.body}
                headerClassName="text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 font-semibold"
                style={{ minWidth: i === 0 ? '280px' : i === 4 ? '200px' : '180px' }}
              />
            ))}
          </DataTable>
        </div>
      )}
      <FilterPanel />
      
      <style jsx>{`
        .faculty-table .p-datatable-header {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Tableview;
