
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { MultiSelect } from 'primereact/multiselect';
// import { Dialog } from 'primereact/dialog';
// import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { useEffect, useState } from 'react';
// import moment from 'moment-timezone';
// import { getFilterOptions } from '../../services/apinotifications/apinotifications';

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
//   const [pdfModalVisible, setPdfModalVisible] = useState(false);
//   const [selectedPdf, setSelectedPdf] = useState(null);
//   const [pdfTitle, setPdfTitle] = useState('');

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
//           className="p-2 transition-colors duration-200 rounded-full hover:bg-blue-50 cursor-pointer"
//         >
//           <i className="text-lg text-blue-600 fi fi-rr-pen-circle"></i>
//         </button>
//         <button
//           onClick={() => handledelete(rowData?._id)}
//           className="p-2 transition-colors duration-200 rounded-full hover:bg-red-50 cursor-pointer"
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

//   // PDF Template with Eye Icon
//   const pdfTemplate = (rowData) => {
//     if (!rowData.pdf) {
//       return (
//         <div className="flex justify-center">
//           <span className="text-gray-400 text-sm">No PDF</span>
//         </div>
//       );
//     }

//     const handlePdfView = () => {
//       const pdfUrl = Array.isArray(rowData.pdf) ? rowData.pdf[0] : rowData.pdf;
//       setSelectedPdf(`${apiurl()}/${pdfUrl}`);
//       setPdfTitle(rowData.Title || 'PDF Document');
//       setPdfModalVisible(true);
//     };

//     return (
//       <div className="flex justify-center">
//         <button
//           onClick={handlePdfView}
//           className="p-2 transition-all duration-200 rounded-full hover:bg-blue-50 cursor-pointer group"
//           title="View PDF"
//         >
//           <i className="text-lg text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-200 fi fi-rr-eye"></i>
//         </button>
//       </div>
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

//   // const image = (rowData) => {
//   //   if (!rowData.Image) return null;
//   //   const imageUrl = Array.isArray(rowData.Image) ? rowData.Image[0] : rowData.Image;
  
//   //   return (
//   //     <div className="flex justify-center">
//   //       <img
//   //         src={`${apiurl()}/${imageUrl}`}
//   //         className="object-cover h-16 transition-transform duration-200 rounded-lg shadow-sm w-26 group-hover:scale-105"
//   //         alt={rowData.Product_Name || 'Product Image'}
//   //       />
//   //     </div>
//   //   );
//   // };
  

//    const image = (rowData) => {
//     return (
//       <div className="flex justify-center">
//         <div className="relative z-0 w-24 h-16 group">
//           <Swiper
//             modules={[Pagination, Navigation, Autoplay]}
//             spaceBetween={10}
//             slidesPerView={1}
//             // navigation
//             // pagination={{ clickable: true }}
//             autoplay={{ delay: 2000 }}
//           >
//             {rowData.Images.map((img, index) => (
//               <SwiperSlide key={index} className="flex items-center justify-center">
//                 <img
//                   src={`${apiurl()}/${img}`}
//                   className="object-cover h-16 transition-transform duration-200 rounded-lg shadow-sm w-28 group-hover:scale-105"
//                   alt={rowData.Product_Name}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className="absolute inset-0 transition-all duration-200 bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-10" />
//         </div>
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
//     { field: 'Title', header: 'Title', filter: true },
//     { field: 'Description', header: 'Description',body:renderDescription, filter: true },
//     { field: 'pdf', header: 'PDF', filter: true, body: pdfTemplate },
//     { field: 'Status', header: 'Status', filter: true, body: statusTemplate }
//   ];

//   // PDF Modal Component
//   const PdfModal = () => (
//     <Dialog
//       header={
//         <div className="flex items-center gap-3">
//           <i className="text-lg text-blue-600 fi fi-rr-document-pdf"></i>
//           <span className="text-lg font-semibold text-gray-800">{pdfTitle}</span>
//         </div>
//       }
//       visible={pdfModalVisible}
//       onHide={() => setPdfModalVisible(false)}
//       style={{ width: '70vw', height: '90vh' }}
//       maximizable
//       modal
//       className="pdf-modal"
//       contentClassName="!p-0"
//       headerClassName="!pb-2"
//     >
//       <div className="w-full h-full bg-gray-100 rounded-b-lg">
//         {selectedPdf ? (
//           <iframe
//             src={selectedPdf}
//             className="w-full h-full border-0 rounded-b-lg"
//             title="PDF Viewer"
//             style={{ minHeight: '70vh' }}
//           />
//         ) : (
//           <div className="flex items-center justify-center h-full">
//             <div className="text-center">
//               <i className="text-6xl text-gray-400 fi fi-rr-document-pdf mb-4"></i>
//               <p className="text-gray-500">Failed to load PDF</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </Dialog>
//   );

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
//       <PdfModal />
//     </div>
//   );
// };

// export default Tableview;

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect } from 'primereact/multiselect';
import { Dialog } from 'primereact/dialog';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import { getFilterOptions } from '../../services/apinotifications/apinotifications';

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
  const [pdfModalVisible, setPdfModalVisible] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfTitle, setPdfTitle] = useState('');
  const [descModalVisible, setDescModalVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [descTitle, setDescTitle] = useState('');

  const calculateDaysRemaining = (endDate) => {
    const today = moment();
    const end = moment(endDate);
    const days = end.diff(today, 'days');
    return days;
  };

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

  const statusTemplate = (rowData) => {
    const getStatusColor = (status) => {
      switch (status.toLowerCase()) {
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

  const pdfTemplate = (rowData) => {
    if (!rowData.pdf) {
      return (
        <div className="flex justify-center">
          <span className="text-gray-400 text-sm">No PDF</span>
        </div>
      );
    }

    const handlePdfView = () => {
      const pdfUrl = Array.isArray(rowData.pdf) ? rowData.pdf[0] : rowData.pdf;
      setSelectedPdf(`${apiurl()}/${pdfUrl}`);
      setPdfTitle(rowData.Title || 'PDF Document');
      setPdfModalVisible(true);
    };

    return (
      <div className="flex justify-center">
        <button
          onClick={handlePdfView}
          className="p-2 transition-all duration-200 rounded-full hover:bg-blue-50 cursor-pointer group"
          title="View PDF"
        >
          <i className="text-lg text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-200 fi fi-rr-eye"></i>
        </button>
      </div>
    );
  };

  const descriptionTemplate = (rowData) => {
    const handleDescView = () => {
      setSelectedDescription(rowData.Description);
      setDescTitle(rowData.Title || 'Description');
      setDescModalVisible(true);
    };

    return (
      <div className="flex items-center gap-2">
        <div
          className="line-clamp-2"
          dangerouslySetInnerHTML={{ __html: rowData.Description }}
        />
        <button
          onClick={handleDescView}
          className="p-2 transition-all duration-200 rounded-full hover:bg-blue-50 cursor-pointer group"
          title="View Full Description"
        >
          <i className="text-lg text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-200 fi fi-rr-eye"></i>
        </button>
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

  const image = (rowData) => {
    return (
      <div className="flex justify-center">
        <div className="relative z-0 w-24 h-16 group">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
          >
            {rowData.Images.map((img, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <img
                  src={`${apiurl()}/${img}`}
                  className="object-cover h-16 transition-transform duration-200 rounded-lg shadow-sm w-28 group-hover:scale-105"
                  alt={rowData.Title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 transition-all duration-200 bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-10" />
        </div>
      </div>
    );
  };

  const dateTemplate = (rowData, field) => {
    return moment(rowData[field]).format('MMM DD, YYYY');
  };

  const expiryTemplate = (rowData) => {
    const daysRemaining = calculateDaysRemaining(rowData.endDate);
    let colorClass = 'bg-green-100 text-green-700';
    
    if (daysRemaining < 0) {
      colorClass = 'bg-red-100 text-red-700';
    } else if (daysRemaining <= 3) {
      colorClass = 'bg-yellow-100 text-yellow-700';
    }

    return (
      <div className="flex items-center gap-2">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
          {daysRemaining < 0 ? 'Expired' : `${daysRemaining} days left`}
        </span>
      </div>
    );
  };

  const columns = [
    { field: 'Title', header: 'Title', filter: true },
    { field: 'Description', header: 'Description', body: descriptionTemplate, filter: true },
    { field: 'pdf', header: 'PDF', filter: true, body: pdfTemplate },
    { field: 'Status', header: 'Status', filter: true, body: statusTemplate }
  ];

  const PdfModal = () => (
    <Dialog
      header={
        <div className="flex items-center gap-3">
          <i className="text-lg text-blue-600 fi fi-rr-document-pdf"></i>
          <span className="text-lg font-semibold text-gray-800">{pdfTitle}</span>
        </div>
      }
      visible={pdfModalVisible}
      onHide={() => setPdfModalVisible(false)}
      style={{ width: '70vw', height: '90vh' }}
      maximizable
      modal
      className="pdf-modal"
      contentClassName="!p-0"
      headerClassName="!pb-2"
    >
      <div className="w-full h-full bg-gray-100 rounded-b-lg">
        {selectedPdf ? (
          <iframe
            src={selectedPdf}
            className="w-full h-full border-0 rounded-b-lg"
            title="PDF Viewer"
            style={{ minHeight: '70vh' }}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <i className="text-6xl text-gray-400 fi fi-rr-document-pdf mb-4"></i>
              <p className="text-gray-500">Failed to load PDF</p>
            </div>
          </div>
        )}
      </div>
    </Dialog>
  );

  const DescriptionModal = () => (
    <Dialog
      header={
        <div className="flex items-center gap-3">
          <i className="text-lg text-blue-600 fi fi-rr-info"></i>
          <span className="text-lg font-semibold text-gray-800">{descTitle}</span>
        </div>
      }
      visible={descModalVisible}
      onHide={() => setDescModalVisible(false)}
      style={{ width: '50vw', maxHeight: '80vh' }}
      maximizable
      modal
      className="description-modal"
      contentClassName="!p-4"
      headerClassName="!pb-2"
    >
      <div className="w-full h-full bg-white rounded-b-lg overflow-y-auto">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: selectedDescription }}
        />
      </div>
    </Dialog>
  );

  const FilterPanel = () => (
    <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${showFilterPanel ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b">
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
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const TableHeader = () => (
    <div className="p-4 bg-white border-b">
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilterPanel(true)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
    <div className="bg-white border shadow-sm rounded-xl">
      <TableHeader />
      {loading ? (
        <LoadingSkeleton />
      ) : (
      <DataTable
        value={tabledata}
        scrollable
        scrollHeight="680px"
        className="!text-sm"
        rowClassName={() => 'hover:bg-gray-50 transition-colors duration-200'}
        showGridlines={false}
        stripedRows
        responsiveLayout="scroll"
      >
        <Column
          header="Actions"
          body={actionbotton}
          headerClassName="text-gray-700 bg-gray-50"
          className="text-center"
          style={{ width: '120px' }}
        />
        <Column
          header="Image"
          body={image}
          headerClassName="text-gray-700 bg-gray-50"
          style={{ width: '150px' }}
        />
        {columns.map((col, i) => (
          <Column
            key={i}
            field={col.field}
            header={col.header}
            body={col.body}
            headerClassName="text-gray-700 bg-gray-50"
            style={{ minWidth: col.width }}
          />
        ))}
      </DataTable>
      )}
      <FilterPanel />
      <PdfModal />
      <DescriptionModal />
    </div>
  );
};

export default Tableview;