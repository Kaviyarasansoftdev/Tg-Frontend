// // // import React, { useState, useEffect, useCallback } from "react";
// // // import { Calendar, Clock, ArrowRight, Users, MapPin, Star, Newspaper, ExternalLink, X } from "lucide-react";
// // // import { apigetNewsandeventsforHome } from "../../services/apiNewsandEvents/apinewsandevents";
// // // import apiurl from "../../services/apiendpoint/apiendpoint";
// // // import { Link, useNavigate } from "react-router-dom";

// // // export default function NewsEventsSection() {
// // //   const [activeTab, setActiveTab] = useState('all');
// // //   const [isLoaded, setIsLoaded] = useState(false);
// // //   const [tableData, setTableData] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [selectedItem, setSelectedItem] = useState(null);
// // //   const [showModal, setShowModal] = useState(false);
// // //   const navigate = useNavigate();

// // //   const getNewsEvents = useCallback(async () => {
// // //     setLoading(true);
// // //     try {
// // //       const res = await apigetNewsandeventsforHome();

// // //       if (res && res.resdata) {
// // //         setTableData(res.resdata);
// // //       } else {
// // //         setTableData([]);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching data:', error);
// // //       setTableData([]);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }, []);

// // //   useEffect(() => {
// // //     getNewsEvents();
// // //     setIsLoaded(true);
// // //   }, [getNewsEvents]);

// // //   const filteredItems = tableData;

// // //   const tabs = [
// // //     { id: 'all', name: 'All Updates', count: tableData.length }
// // //   ];

// // //   const stripHtmlAndLimit = (html, limit = 150) => {
// // //     const tmp = document.createElement('div');
// // //     tmp.innerHTML = html;
// // //     const text = tmp.textContent || tmp.innerText || '';
// // //     return text.length > limit ? text.substring(0, limit) + '...' : text;
// // //   };

// // //   const formatDateTime = (dateString) => {
// // //     const date = new Date(dateString);
// // //     const dateStr = date.toLocaleDateString('en-GB', {
// // //       day: '2-digit',
// // //       month: '2-digit',
// // //       year: 'numeric'
// // //     });
// // //     const timeStr = date.toLocaleTimeString('en-US', {
// // //       hour: 'numeric',
// // //       minute: '2-digit',
// // //       hour12: true
// // //     });
// // //     return `${dateStr} ${timeStr}`;
// // //   };

// // //   const handleReadMore = (item) => {
// // //     setSelectedItem(item);
// // //     setShowModal(true);
// // //   };

// // //   const closeModal = () => {
// // //     setShowModal(false);
// // //     setSelectedItem(null);
// // //   };

// // //   const handleViewAllUpdates = () => {
// // //     navigate('/all-updates', { state: { newsData: tableData } });
// // //   };


// // //   if (loading) {
// // //     return (
// // //       <div className="py-20 flex justify-center items-center">
// // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="py-5 lg:py-20">
// // //       <div className="max-w-screen-2xl mx-auto px-6">
// // //         <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// // //           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
// // //             News & <span className="text-purple-600">Events</span>
// // //           </h2>

// // //           <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
// // //             Stay updated with the latest happenings, announcements, and upcoming events
// // //             at Tagore Institute of Engineering and Technology.
// // //           </p>
// // //         </div>

// // //         <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// // //           {tabs.map((tab) => (
// // //             <button key={tab.id} onClick={() => setActiveTab(tab.id)}
// // //               className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
// // //                 ? 'bg-purple-600 text-white shadow-lg'
// // //                 : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
// // //                 }`}
// // //             >
// // //               {tab.name}
// // //               <span className={`px-2 py-1 text-xs rounded-full ${activeTab === tab.id
// // //                 ? 'bg-white/20 text-white'
// // //                 : 'bg-gray-100 text-gray-600'
// // //                 }`}>
// // //                 {tab.count}
// // //               </span>
// // //             </button>
// // //           ))}
// // //         </div>

// // //         <div className="grid lg:grid-cols-3 gap-8">
// // //           <div className="lg:col-span-2">
// // //             <div className="grid gap-6">
// // //               {filteredItems.slice(0, 3).map((item, index) => (
// // //                 <div
// // //                   key={item._id}
// // //                   className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
// // //                   style={{ transitionDelay: `${index * 150}ms` }}
// // //                 >
// // //                   <div className="md:flex">
// // //                     <div className="md:w-1/3 relative overflow-hidden">
// // //                       <img
// // //                         src={item.Coverimage ? `${apiurl()}/${item.Coverimage}` : 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop'}
// // //                         alt={item.Title}
// // //                         className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
// // //                       />
// // //                       {index === 0 && (
// // //                         <div className="absolute top-4 left-4 flex gap-2">
// // //                           <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
// // //                             Featured
// // //                           </span>
// // //                         </div>
// // //                       )}
// // //                       <div className="absolute top-4 right-4">
// // //                         <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
// // //                           NEW
// // //                         </span>
// // //                       </div>
// // //                     </div>

// // //                     <div className="md:w-2/3 p-6">
// // //                       <div className="flex items-center gap-2 mb-4 flex-wrap">
// // //                         {item.Tags && item.Tags.map((tag, tagIndex) => (
// // //                           <span
// // //                             key={tagIndex}
// // //                             className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
// // //                           >
// // //                             {tag}
// // //                           </span>
// // //                         ))}
// // //                       </div>

// // //                       <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
// // //                         {item.Title}
// // //                       </h3>

// // //                       <p className="text-gray-600 mb-4 line-clamp-2">
// // //                         {stripHtmlAndLimit(item.Content)}
// // //                       </p>

// // //                       <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
// // //                         <div className="flex items-center gap-1">
// // //                           <Calendar className="w-4 h-4" />
// // //                           {formatDateTime(item.DateandTime)}
// // //                         </div>
// // //                         <div className="flex items-center gap-1">
// // //                           <MapPin className="w-4 h-4" />
// // //                           {item.Location}
// // //                         </div>
// // //                       </div>
// // //                       <Link to={`/all-updates/${item?._id}`}>
// // //                         <button
// // //                           // onClick={() => handleReadMore(item)}
// // //                           className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
// // //                         >
// // //                           Read More
// // //                           <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
// // //                         </button>
// // //                       </Link>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className={`bg-white rounded-3xl shadow-lg p-6 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// // //             <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
// // //               <Newspaper className="w-5 h-5 text-purple-600" />
// // //               Quick Updates
// // //             </h3>

// // //             <div className="h-64 overflow-hidden relative bg-gray-50 rounded-xl">
// // //               <div className="absolute inset-0 flex flex-col">
// // //                 <div className="animate-marquee-up space-y-4 py-4">
// // //                   {[...filteredItems.slice(3), ...filteredItems.slice(3)].map((item, index) => (
// // //                     <div
// // //                       key={`${item._id}-${index}`}
// // //                       className="group cursor-pointer px-4 py-3 mx-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-purple-50"
// // //                       onClick={() => handleReadMore(item)}
// // //                     >
// // //                       <div className="flex items-start gap-3">
// // //                         <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
// // //                         <div className="flex-1 min-w-0">
// // //                           <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-purple-600 transition-colors">
// // //                             {item.Title}
// // //                           </h4>
// // //                           <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
// // //                             <Calendar className="w-3 h-3" />
// // //                             <span className="truncate">{formatDateTime(item.DateandTime)}</span>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <button
// // //               onClick={handleViewAllUpdates}
// // //               className="w-full mt-6 px-4 py-3 bg-purple-50 text-purple-700 rounded-xl font-semibold hover:bg-purple-100 transition-colors flex items-center justify-center gap-2"
// // //             >
// // //               View All Updates
// // //               <ExternalLink className="w-4 h-4" />
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {showModal && selectedItem && (
// // //           <div className="fixed inset-0 bg-black/35 bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //             <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
// // //               <div className="p-6">
// // //                 {/* Modal Header */}
// // //                 <div className="flex items-center justify-between mb-6">
// // //                   <div className="flex items-center gap-4">
// // //                     <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
// // //                       News
// // //                     </span>
// // //                     <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
// // //                       General
// // //                     </span>
// // //                   </div>
// // //                   <button
// // //                     onClick={closeModal}
// // //                     className="p-2 hover:bg-gray-100 rounded-full transition-colors"
// // //                   >
// // //                     <X className="w-5 h-5" />
// // //                   </button>
// // //                 </div>

// // //                 <div className="space-y-6">
// // //                   {selectedItem.Coverimage && (
// // //                     <div className="w-full h-64 rounded-2xl overflow-hidden">
// // //                       <img src={`${apiurl()}/${selectedItem.Coverimage}`} alt={selectedItem.Title} className="w-full h-full object-cover" />
// // //                     </div>
// // //                   )}

// // //                   <h2 className="text-3xl font-bold text-gray-900">
// // //                     {selectedItem.Title}
// // //                   </h2>

// // //                   <div className="flex items-center gap-6 text-sm text-gray-500">
// // //                     <div className="flex items-center gap-1">
// // //                       <Calendar className="w-4 h-4" />
// // //                       {formatDateTime(selectedItem.DateandTime)}
// // //                     </div>
// // //                     <div className="flex items-center gap-1">
// // //                       <MapPin className="w-4 h-4" />
// // //                       {selectedItem.Location}
// // //                     </div>
// // //                   </div>

// // //                   {selectedItem.Tags && selectedItem.Tags.length > 0 && (
// // //                     <div className="flex flex-wrap gap-2">
// // //                       {selectedItem.Tags.map((tag, index) => (
// // //                         <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">{tag}</span>
// // //                       ))}
// // //                     </div>
// // //                   )}

// // //                   <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: selectedItem.Content }} />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState, useEffect, useCallback } from "react";
// // import { Calendar, Clock, ArrowRight, Users, MapPin, Star, Newspaper, ExternalLink, X } from "lucide-react";
// // import { apigetNewsandeventsforHome } from "../../services/apiNewsandEvents/apinewsandevents";
// // import apiurl from "../../services/apiendpoint/apiendpoint";
// // import { Link, useNavigate } from "react-router-dom";

// // export default function NewsEventsSection() {
// //   const [activeTab, setActiveTab] = useState('all');
// //   const [isLoaded, setIsLoaded] = useState(false);
// //   const [tableData, setTableData] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [selectedItem, setSelectedItem] = useState(null);
// //   const [showModal, setShowModal] = useState(false);
// //   const navigate = useNavigate();

// //   const getNewsEvents = useCallback(async () => {
// //     setLoading(true);
// //     try {
// //       const res = await apigetNewsandeventsforHome();

// //       if (res && res.resdata) {
// //         setTableData(res.resdata);
// //       } else {
// //         setTableData([]);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //       setTableData([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     getNewsEvents();
// //     setIsLoaded(true);
// //   }, [getNewsEvents]);

// //   const filteredItems = tableData;

// //   const tabs = [
// //     { id: 'all', name: 'All Updates', count: tableData.length }
// //   ];

// //   const stripHtmlAndLimit = (html, limit = 150) => {
// //     const tmp = document.createElement('div');
// //     tmp.innerHTML = html;
// //     const text = tmp.textContent || tmp.innerText || '';
// //     return text.length > limit ? text.substring(0, limit) + '...' : text;
// //   };

// //   const formatDateTime = (dateString) => {
// //     const date = new Date(dateString);
// //     const dateStr = date.toLocaleDateString('en-GB', {
// //       day: '2-digit',
// //       month: '2-digit',
// //       year: 'numeric'
// //     });
// //     const timeStr = date.toLocaleTimeString('en-US', {
// //       hour: 'numeric',
// //       minute: '2-digit',
// //       hour12: true
// //     });
// //     return `${dateStr} ${timeStr}`;
// //   };

// //   const handleReadMore = (item) => {
// //     setSelectedItem(item);
// //     setShowModal(true);
// //   };

// //   const closeModal = () => {
// //     setShowModal(false);
// //     setSelectedItem(null);
// //   };

// //   const handleViewAllUpdates = () => {
// //     navigate('/all-updates', { state: { newsData: tableData } });
// //   };

// //   if (loading) {
// //     return (
// //       <div className="py-20 flex justify-center items-center">
// //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="py-5 lg:py-20">
// //       <div className="max-w-screen-2xl mx-auto px-6">
// //         <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
// //             News & <span className="text-purple-600">Events</span>
// //           </h2>

// //           <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
// //             Stay updated with the latest happenings, announcements, and upcoming events
// //             at Tagore Institute of Engineering and Technology.
// //           </p>
// //         </div>

// //         <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           {tabs.map((tab) => (
// //             <button key={tab.id} onClick={() => setActiveTab(tab.id)}
// //               className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
// //                 ? 'bg-purple-600 text-white shadow-lg'
// //                 : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
// //                 }`}
// //             >
// //               {tab.name}
// //               <span className={`px-2 py-1 text-xs rounded-full ${activeTab === tab.id
// //                 ? 'bg-white/20 text-white'
// //                 : 'bg-gray-100 text-gray-600'
// //                 }`}>
// //                 {tab.count}
// //               </span>
// //             </button>
// //           ))}
// //         </div>

// //         <div className="grid lg:grid-cols-3 gap-8">
// //           <div className="lg:col-span-2">
// //             <div className="grid gap-6">
// //               {filteredItems.slice(0, 3).map((item, index) => (
// //                 <div
// //                   key={item._id}
// //                   className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
// //                   style={{ transitionDelay: `${index * 150}ms` }}
// //                 >
// //                   <div className="md:flex">
// //                     <div className="md:w-1/3 relative overflow-hidden">
// //                       <img
// //                         src={item.Coverimage ? `${apiurl()}/${item.Coverimage}` : 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop'}
// //                         alt={item.Title}
// //                         className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                       />
// //                       {index === 0 && (
// //                         <div className="absolute top-4 left-4 flex gap-2">
// //                           <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
// //                             Featured
// //                           </span>
// //                         </div>
// //                       )}
// //                       <div className="absolute top-4 right-4">
// //                         <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
// //                           NEW
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div className="md:w-2/3 p-6">
// //                       <div className="flex items-center gap-2 mb-4 flex-wrap">
// //                         {item.Tags && item.Tags.map((tag, tagIndex) => (
// //                           <span
// //                             key={tagIndex}
// //                             className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
// //                           >
// //                             {tag}
// //                           </span>
// //                         ))}
// //                       </div>

// //                       <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
// //                         {item.Title}
// //                       </h3>

// //                       <p className="text-gray-600 mb-4 line-clamp-2">
// //                         {stripHtmlAndLimit(item.Content)}
// //                       </p>

// //                       <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
// //                         <div className="flex items-center gap-1">
// //                           <Calendar className="w-4 h-4" />
// //                           {formatDateTime(item.DateandTime)}
// //                         </div>
// //                         <div className="flex items-center gap-1">
// //                           <MapPin className="w-4 h-4" />
// //                           {item.Location}
// //                         </div>
// //                       </div>
// //                       <Link to={`/all-updates/${item?._id}`}>
// //                         <button
// //                           className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
// //                         >
// //                           Read More
// //                           <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
// //                         </button>
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className={`bg-white rounded-3xl shadow-lg p-6 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //             <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
// //               <Newspaper className="w-5 h-5 text-purple-600" />
// //               Quick Updates
// //             </h3>

// //             <div className="h-64 overflow-hidden relative bg-gray-50 rounded-xl">
// //               <div className="absolute inset-0 flex flex-col">
// //                 <div className="animate-marquee-up space-y-4 py-4">
// //                   {[...filteredItems.slice(3), ...filteredItems.slice(3)].map((item, index) => (
// //                     <Link 
// //                       key={`${item._id}-${index}`}
// //                       to={`/all-updates/${item?._id}`}
// //                       className="block"
// //                     >
// //                       <div className="group cursor-pointer px-4 py-3 mx-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-purple-50">
// //                         <div className="flex items-start gap-3">
// //                           <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
// //                           <div className="flex-1 min-w-0">
// //                             <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-purple-600 transition-colors">
// //                               {item.Title}
// //                             </h4>
// //                             <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
// //                               <Calendar className="w-3 h-3" />
// //                               <span className="truncate">{formatDateTime(item.DateandTime)}</span>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             <button
// //               onClick={handleViewAllUpdates}
// //               className="w-full mt-6 px-4 py-3 bg-purple-50 text-purple-700 rounded-xl font-semibold hover:bg-purple-100 transition-colors flex items-center justify-center gap-2"
// //             >
// //               View All Updates
// //               <ExternalLink className="w-4 h-4" />
// //             </button>
// //           </div>
// //         </div>

// //         {showModal && selectedItem && (
// //           <div className="fixed inset-0 bg-black/35 bg-opacity-50 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
// //               <div className="p-6">
// //                 {/* Modal Header */}
// //                 <div className="flex items-center justify-between mb-6">
// //                   <div className="flex items-center gap-4">
// //                     <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
// //                       News
// //                     </span>
// //                     <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
// //                       General
// //                     </span>
// //                   </div>
// //                   <button
// //                     onClick={closeModal}
// //                     className="p-2 hover:bg-gray-100 rounded-full transition-colors"
// //                   >
// //                     <X className="w-5 h-5" />
// //                   </button>
// //                 </div>

// //                 <div className="space-y-6">
// //                   {selectedItem.Coverimage && (
// //                     <div className="w-full h-64 rounded-2xl overflow-hidden">
// //                       <img src={`${apiurl()}/${selectedItem.Coverimage}`} alt={selectedItem.Title} className="w-full h-full object-cover" />
// //                     </div>
// //                   )}

// //                   <h2 className="text-3xl font-bold text-gray-900">
// //                     {selectedItem.Title}
// //                   </h2>

// //                   <div className="flex items-center gap-6 text-sm text-gray-500">
// //                     <div className="flex items-center gap-1">
// //                       <Calendar className="w-4 h-4" />
// //                       {formatDateTime(selectedItem.DateandTime)}
// //                     </div>
// //                     <div className="flex items-center gap-1">
// //                       <MapPin className="w-4 h-4" />
// //                       {selectedItem.Location}
// //                     </div>
// //                   </div>

// //                   {selectedItem.Tags && selectedItem.Tags.length > 0 && (
// //                     <div className="flex flex-wrap gap-2">
// //                       {selectedItem.Tags.map((tag, index) => (
// //                         <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">{tag}</span>
// //                       ))}
// //                     </div>
// //                   )}

// //                   <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: selectedItem.Content }} />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect, useCallback } from "react";
// import { Calendar, Clock, ArrowRight, Users, MapPin, Star, Newspaper, ExternalLink, X } from "lucide-react";
// import { apigetNewsandeventsforHome } from "../../services/apiNewsandEvents/apinewsandevents";
// import apiurl from "../../services/apiendpoint/apiendpoint";
// import { Link, useNavigate } from "react-router-dom";

// export default function NewsEventsSection() {
//   const [activeTab, setActiveTab] = useState('all');
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [tableData, setTableData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   // Add CSS for scrolling animation
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = `
//       @keyframes scroll-vertical {
//         0% {
//           transform: translateY(100%);
//         }
//         100% {
//           transform: translateY(-100%);
//         }
//       }
      
//       .animate-scroll-vertical {
//         animation: scroll-vertical 15s linear infinite;
//       }
      
//       .animate-scroll-vertical:hover {
//         animation-play-state: paused;
//       }
//     `;
//     document.head.appendChild(style);
    
//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   const getNewsEvents = useCallback(async () => {
//     setLoading(true);
//     try {
//       const res = await apigetNewsandeventsforHome();

//       if (res && res.resdata) {
//         setTableData(res.resdata);
//       } else {
//         setTableData([]);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setTableData([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     getNewsEvents();
//     setIsLoaded(true);
//   }, [getNewsEvents]);

//   const filteredItems = tableData;

//   const tabs = [
//     { id: 'all', name: 'All Updates', count: tableData.length }
//   ];

//   const stripHtmlAndLimit = (html, limit = 150) => {
//     const tmp = document.createElement('div');
//     tmp.innerHTML = html;
//     const text = tmp.textContent || tmp.innerText || '';
//     return text.length > limit ? text.substring(0, limit) + '...' : text;
//   };

//   const formatDateTime = (dateString) => {
//     const date = new Date(dateString);
//     const dateStr = date.toLocaleDateString('en-GB', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric'
//     });
//     const timeStr = date.toLocaleTimeString('en-US', {
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true
//     });
//     return `${dateStr} ${timeStr}`;
//   };

//   const handleReadMore = (item) => {
//     setSelectedItem(item);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedItem(null);
//   };

//   const handleViewAllUpdates = () => {
//     navigate('/all-updates', { state: { newsData: tableData } });
//   };

//   if (loading) {
//     return (
//       <div className="py-20 flex justify-center items-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="py-5 lg:py-20">
//       <div className="max-w-screen-2xl mx-auto px-6">
//         <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
//             News & <span className="text-purple-600">Events</span>
//           </h2>

//           <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
//             Stay updated with the latest happenings, announcements, and upcoming events
//             at Tagore Institute of Engineering and Technology.
//           </p>
//         </div>

//         <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           {tabs.map((tab) => (
//             <button key={tab.id} onClick={() => setActiveTab(tab.id)}
//               className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
//                 ? 'bg-purple-600 text-white shadow-lg'
//                 : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
//                 }`}
//             >
//               {tab.name}
//               <span className={`px-2 py-1 text-xs rounded-full ${activeTab === tab.id
//                 ? 'bg-white/20 text-white'
//                 : 'bg-gray-100 text-gray-600'
//                 }`}>
//                 {tab.count}
//               </span>
//             </button>
//           ))}
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <div className="grid gap-6">
//               {filteredItems.slice(0, 3).map((item, index) => (
//                 <div
//                   key={item._id}
//                   className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//                   style={{ transitionDelay: `${index * 150}ms` }}
//                 >
//                   <div className="md:flex">
//                     <div className="md:w-1/3 relative overflow-hidden">
//                       <img
//                         src={item.Coverimage ? `${apiurl()}/${item.Coverimage}` : 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop'}
//                         alt={item.Title}
//                         className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       />
//                       {index === 0 && (
//                         <div className="absolute top-4 left-4 flex gap-2">
//                           <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
//                             Featured
//                           </span>
//                         </div>
//                       )}
//                       <div className="absolute top-4 right-4">
//                         <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
//                           NEW
//                         </span>
//                       </div>
//                     </div>

//                     <div className="md:w-2/3 p-6">
//                       <div className="flex items-center gap-2 mb-4 flex-wrap">
//                         {item.Tags && item.Tags.map((tag, tagIndex) => (
//                           <span
//                             key={tagIndex}
//                             className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>

//                       <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
//                         {item.Title}
//                       </h3>

//                       <p className="text-gray-600 mb-4 line-clamp-2">
//                         {stripHtmlAndLimit(item.Content)}
//                       </p>

//                       <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="w-4 h-4" />
//                           {formatDateTime(item.DateandTime)}
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <MapPin className="w-4 h-4" />
//                           {item.Location}
//                         </div>
//                       </div>
//                       <Link to={`/all-updates/${item?._id}`}>
//                         <button
//                           className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
//                         >
//                           Read More
//                           <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className={`bg-white rounded-3xl shadow-lg p-6 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//             <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//               <Newspaper className="w-5 h-5 text-purple-600" />
//               Latest Updates
//             </h3>

//             <div className="h-[calc(100%-120px)] min-h-80 overflow-hidden relative bg-gradient-to-b from-purple-50 to-blue-50 rounded-xl">
//               <div className="absolute inset-0">
//                 <div className="animate-scroll-vertical space-y-3 py-4">
//                   {[...filteredItems, ...filteredItems].map((item, index) => (
//                     <Link 
//                       key={`${item._id}-${index}`}
//                       to={`/all-updates/${item?._id}`}
//                       className="block mx-4"
//                     >
//                       <div className="group cursor-pointer px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white border border-white/20">
//                         <div className="flex items-center gap-3">
//                           <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
//                           <div className="flex-1 min-w-0">
//                             <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-purple-600 transition-colors line-clamp-2">
//                               {item.Title}
//                             </h4>
//                             <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
//                               <Calendar className="w-3 h-3" />
//                               <span className="truncate">{formatDateTime(item.DateandTime)}</span>
//                             </div>
//                           </div>
//                           <ArrowRight className="w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Gradient overlays for smooth fade effect */}
//               <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-purple-50 to-transparent pointer-events-none z-10"></div>
//               <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none z-10"></div>
//             </div>

//             <button
//               onClick={handleViewAllUpdates}
//               className="w-full mt-6 px-4 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
//             >
//               View All Updates
//               <ExternalLink className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {showModal && selectedItem && (
//           <div className="fixed inset-0 bg-black/35 bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="p-6">
//                 {/* Modal Header */}
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex items-center gap-4">
//                     <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
//                       News
//                     </span>
//                     <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
//                       General
//                     </span>
//                   </div>
//                   <button
//                     onClick={closeModal}
//                     className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </div>

//                 <div className="space-y-6">
//                   {selectedItem.Coverimage && (
//                     <div className="w-full h-64 rounded-2xl overflow-hidden">
//                       <img src={`${apiurl()}/${selectedItem.Coverimage}`} alt={selectedItem.Title} className="w-full h-full object-cover" />
//                     </div>
//                   )}

//                   <h2 className="text-3xl font-bold text-gray-900">
//                     {selectedItem.Title}
//                   </h2>

//                   <div className="flex items-center gap-6 text-sm text-gray-500">
//                     <div className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" />
//                       {formatDateTime(selectedItem.DateandTime)}
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <MapPin className="w-4 h-4" />
//                       {selectedItem.Location}
//                     </div>
//                   </div>

//                   {selectedItem.Tags && selectedItem.Tags.length > 0 && (
//                     <div className="flex flex-wrap gap-2">
//                       {selectedItem.Tags.map((tag, index) => (
//                         <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">{tag}</span>
//                       ))}
//                     </div>
//                   )}

//                   <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: selectedItem.Content }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useCallback } from "react";
import { Calendar, Clock, ArrowRight, Users, MapPin, Star, Newspaper, ExternalLink, X } from "lucide-react";
import { apigetNewsandeventsforHome } from "../../services/apiNewsandEvents/apinewsandevents";
import apiurl from "../../services/apiendpoint/apiendpoint";
import { Link, useNavigate } from "react-router-dom";

export default function NewsEventsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Add CSS for seamless scrolling animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll-seamless {
        0% {
          transform: translateY(0%);
        }
        100% {
          transform: translateY(-50%);
        }
      }
      
      .animate-scroll-seamless {
        animation: scroll-seamless 20s linear infinite;
      }
      
      .animate-scroll-seamless:hover {
        animation-play-state: paused;
      }

      .scroll-container {
        height: 100%;
        overflow: hidden;
        position: relative;
      }

      .scroll-content {
        display: flex;
        flex-direction: column;
        will-change: transform;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const getNewsEvents = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apigetNewsandeventsforHome();

      if (res && res.resdata) {
        setTableData(res.resdata);
      } else {
        setTableData([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setTableData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getNewsEvents();
    setIsLoaded(true);
  }, [getNewsEvents]);

  const filteredItems = tableData;

  const tabs = [
    { id: 'all', name: 'All Updates', count: tableData.length }
  ];

  const stripHtmlAndLimit = (html, limit = 150) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const dateStr = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const timeStr = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    return `${dateStr} ${timeStr}`;
  };

  const handleReadMore = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleViewAllUpdates = () => {
    navigate('/all-updates', { state: { newsData: tableData } });
  };

  // Create seamless scroll content by duplicating items
  const createScrollContent = () => {
    if (filteredItems.length === 0) return [];
    
    // Triple the content to ensure smooth scrolling
    return [...filteredItems];
  };

  const scrollItems = createScrollContent();

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="py-5 lg:py-20">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            News & <span className="text-purple-600">Events</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Stay updated with the latest happenings, announcements, and upcoming events
            at Tagore Institute of Engineering and Technology.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {tab.name}
              <span className={`px-2 py-1 text-xs rounded-full ${activeTab === tab.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-100 text-gray-600'
                }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {filteredItems.slice(0, 3).map((item, index) => (
                <div
                  key={item._id}
                  className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <img
                        src={item.Coverimage ? `${apiurl()}/${item.Coverimage}` : 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop'}
                        alt={item.Title}
                        className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {index === 0 && (
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                          NEW
                        </span>
                      </div>
                    </div>

                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        {item.Tags && item.Tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                        {item.Title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {stripHtmlAndLimit(item.Content)}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDateTime(item.DateandTime)}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.Location}
                        </div>
                      </div>
                      <Link to={`/all-updates/${item?._id}`}>
                        <button
                          className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-white rounded-3xl shadow-lg p-6 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-purple-600" />
              Latest Updates
            </h3>

            <div className="h-[calc(100%-120px)] min-h-80 relative bg-gradient-to-b from-purple-50 to-blue-50 rounded-xl overflow-hidden">
              <div className="scroll-container absolute inset-0">
                <div className="scroll-content animate-scroll-seamless space-y-3 py-4">
                  {scrollItems.map((item, index) => (
                    <Link 
                      key={`${item._id}-${index}`}
                      to={`/all-updates/${item?._id}`}
                      className="block mx-4"
                    >
                      <div className="group cursor-pointer px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white border border-white/20">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-purple-600 transition-colors line-clamp-2">
                              {item.Title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                              <Calendar className="w-3 h-3" />
                              <span className="truncate">{formatDateTime(item.DateandTime)}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-purple-50 to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none z-10"></div>
            </div>

            <button
              onClick={handleViewAllUpdates}
              className="w-full mt-6 px-4 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              View All Updates
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {showModal && selectedItem && (
          <div className="fixed inset-0 bg-black/35 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      News
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                      General
                    </span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {selectedItem.Coverimage && (
                    <div className="w-full h-64 rounded-2xl overflow-hidden">
                      <img src={`${apiurl()}/${selectedItem.Coverimage}`} alt={selectedItem.Title} className="w-full h-full object-cover" />
                    </div>
                  )}

                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedItem.Title}
                  </h2>

                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDateTime(selectedItem.DateandTime)}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedItem.Location}
                    </div>
                  </div>

                  {selectedItem.Tags && selectedItem.Tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.Tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">{tag}</span>
                      ))}
                    </div>
                  )}

                  <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: selectedItem.Content }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}