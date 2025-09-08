// import { useState, useEffect, useRef, useCallback } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { MdEmail, MdLocationOn, MdSearch } from "react-icons/md";
// import { Link, useLocation } from "react-router-dom";
// import { getactiveheaderdata } from "../../shared/services/apihomepage/apihomepage";

// export default function CollegeHeader() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [data, setdata] = useState([]);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileActiveDropdowns, setMobileActiveDropdowns] = useState(new Set());
//   const location = useLocation().pathname
//   const dropdownTimeoutRef = useRef(null);

//   const getPages = useCallback(async () => {
//     var res = await getactiveheaderdata()
//     setdata(res.data)
//   }, [])

//   useEffect(() => {
//     getPages()
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsScrolled(currentScrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [isMobileMenuOpen]);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About us", path: "/aboutus" },
//     {
//       name: "Academic",
//       children: [
//         {
//           name: "Department",
//           children: data?.departments?.map((dt) => ({
//             name: `${dt.fullName}`, path: `/department/${dt.shortName}`
//           }))
//           // children: [   { name: "B.E - Computer Science and Engineering", path: "/department/cse" }, ],
//         },
//         {
//           name: "Facilities",
//           children: [
//             { name: "Hostels", path: "/facilities/hostels" },
//             { name: "Library & Info Services", path: "/facilities/library" },
//             { name: "Laboratories & Internet Lab", path: "/facilities/laboratories" },
//             { name: "Language Lab", path: "/facilities/language" },
//             { name: "Conference Halls", path: "/facilities/conference" },
//             { name: "Transport", path: "/facilities/transport" },
//             { name: "Common Room", path: "/facilities/common" },
//             { name: "Facilities for Divyangjan", path: "/facilities/accessibility" },
//             { name: "Renewable Energy Sources", path: "/facilities/renewable" },
//           ],
//         },
//         {
//           name: "Cell",
//           children: data?.cells?.map((dt) => ({
//             name: `${dt.title}`, path: `/cell/${dt.title}`
//           }))
//         },
//         {
//           name: "Committees",
//           children: data?.committees?.map((dt) => ({
//             name: `${dt.title}`, path: `/committee/${dt.title}`
//           }))
//         }
//       ],
//     },
//     { name: "Placement Cell", path: "/placement-cell" },
//     { name: "Tiet Alumni", path: "/tiet-alumni" },
//     { name: "Stake Holder Feedback", path: "/stakeholder" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Naac", path: "/naac" },
//     { name: "Nisp", path: "/nisp" },
//     { name: "Contact", path: "/contactus" },

//   ];

//   const handleMouseEnter = (index) => {
//     if (dropdownTimeoutRef.current) {
//       clearTimeout(dropdownTimeoutRef.current);
//     }
//     setActiveDropdown(index);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 150);
//   };

//   const renderMobileNavItems = (items, level = 0, parentKey = '') => {
//     return items.map((item, index) => {
//       const itemKey = parentKey ? `${parentKey}-${index}` : `${level}-${index}`;
//       const hasChildren = item.children && item.children.length > 0;
//       const isExpanded = mobileActiveDropdowns.has(itemKey);

//       return (
//         <div key={index} className={`${level > 0 ? 'ml-4' : ''} `}>
//           <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100">
//             {hasChildren ? (
//               <button
//                 onClick={(e) => handleMobileDropdownToggle(itemKey, e)}
//                 className="text-gray-700 hover:text-blue-600 font-medium flex-1 text-left"
//                 type="button"
//               >
//                 {item.name}
//               </button>
//             ) : (
//               <Link
//                 to={item.path || '#'}
//                 className="text-gray-700 hover:text-blue-600 font-medium flex-1"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             )}

//             {hasChildren && (
//               <button
//                 onClick={(e) => handleMobileDropdownToggle(itemKey, e)}
//                 className="p-1 text-gray-500 hover:text-blue-600 ml-2 flex-shrink-0"
//                 type="button"
//               >
//                 {isExpanded ? (
//                   <FaChevronDown size={12} />
//                 ) : (
//                   <FaChevronRight size={12} />
//                 )}
//               </button>
//             )}
//           </div>

//           {hasChildren && isExpanded && (
//             <div className="bg-gray-50">
//               {renderMobileNavItems(item.children, level + 1, itemKey)}
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   const handleMobileDropdownToggle = (dropdownKey, event) => {
//     if (event) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setMobileActiveDropdowns(prevState => {
//       const newState = new Set(prevState);
//       if (newState.has(dropdownKey)) {
//         const keysToRemove = Array.from(newState).filter(key =>
//           key.startsWith(dropdownKey) || key === dropdownKey
//         );
//         keysToRemove.forEach(key => newState.delete(key));
//       } else {
//         newState.add(dropdownKey);
//       }
//       return newState;
//     });
//   };

//   return (
//     <>
//       <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>

//         <div className={`bg-blue-900 text-white text-sm transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'py-1.5 opacity-100'} hidden md:block`}>
//           <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//             <div className="flex items-center space-x-6">
//               <div className="flex items-center space-x-2">
//                 <MdEmail className="text-yellow-300" />
//                 <span>admissions@stengineering.edu.in</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <FaPhone className="text-yellow-300" />
//                 <span>+91 4146-123456</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MdLocationOn className="text-yellow-300" />
//                 <span>Villupuram, Tamil Nadu</span>
//               </div>
//             </div>

//             <div className="flex items-center space-x-3">
//               <span className="text-yellow-300 font-medium">Follow Us:</span>
//               <div className="flex space-x-2">
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaFacebookF size={12} />
//                 </Link>
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaTwitter size={12} />
//                 </Link>
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaLinkedinIn size={12} />
//                 </Link>
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaInstagram size={12} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-4 py-2 md:py-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className={`bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12 md:w-14 md:h-14'}`}>
//                   <span className={`text-white font-bold transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg md:text-xl'}`}>ST</span>
//                 </div>
//                 <div>
//                   <h1 className={`font-bold text-gray-800 leading-tight transition-all duration-300 ${isScrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
//                     St. Thomas Engineering College
//                   </h1>
//                   <p className={`text-gray-600 transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-xs md:text-sm'}`}>
//                     Autonomous Institution | Affiliated to Anna University
//                   </p>
//                   {!isScrolled && (
//                     <p className="text-xs text-blue-600 font-medium hidden md:block">
//                       College Code: 2810 | AICTE Approved | NAAC A+ Accredited
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className={`hidden lg:flex items-center transition-all duration-300 ${isScrolled ? 'space-x-3' : 'space-x-6'}`}>
//                 {!isScrolled && (
//                   <>
//                     <div className="text-center">
//                       <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-1">
//                         <div className="text-green-600 font-bold text-xs">
//                           <div>NAAC</div>
//                           <div className="text-base">A+</div>
//                         </div>
//                       </div>
//                       <span className="text-xs text-gray-500">Accredited</span>
//                     </div>

//                     <div className="text-center">
//                       <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-1">
//                         <div className="text-orange-600 font-bold text-xs text-center">
//                           <div>AICTE</div>
//                           <div className="text-xs">Approved</div>
//                         </div>
//                       </div>
//                       <span className="text-xs text-gray-500">Approved</span>
//                     </div>

//                     <div className="text-center">
//                       <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-1">
//                         <div className="text-purple-600 font-bold text-xs text-center">
//                           <div>NBA</div>
//                           <div className="text-xs">Accredited</div>
//                         </div>
//                       </div>
//                       <span className="text-xs text-gray-500">Programs</span>
//                     </div>
//                   </>
//                 )}

//                 <div className={`flex transition-all duration-300 ${isScrolled ? 'flex-row space-x-2' : 'flex-col space-y-2'}`}>
//                   <button className={`bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors ${isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'}`}>
//                     Apply Now
//                   </button>
//                   <button className={`bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors ${isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'}`}>
//                     Admission 2025
//                   </button>
//                 </div>
//               </div>

//               <div className="lg:hidden">
//                 <button
//                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                   className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors mobile-menu-container"
//                 >
//                   <FaBars size={20} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-blue-800 to-blue-600 hidden lg:block">
//           <div className="max-w-7xl mx-auto px-4">
//             <nav className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-2.5'}`}>

//               <div className="flex items-center space-x-1">
//                 {navLinks.map((link, index) => (
//                   <div
//                     key={index}
//                     className="relative group"
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <Link
//                       to={link.path || '#'}
//                       className={`text-white hover:text-yellow-300 rounded-lg font-medium transition-colors flex items-center space-x-1 ${isScrolled ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-sm'}`}
//                     >
//                       <span>{link.name}</span>
//                       {link.children && <FaChevronDown size={10} />}
//                     </Link>

//                     {link.children && activeDropdown === index && (
//                       <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
//                         <div className="py-2">
//                           {link.children.map((child, childIndex) => (
//                             <div key={childIndex} className="relative group/child">
//                               <Link
//                                 to={child.path || '#'}
//                                 className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium border-b border-gray-100 last:border-b-0 flex items-center justify-between"
//                               >
//                                 <span>{child.name}</span>
//                                 {child.children && <FaChevronRight size={12} />}
//                               </Link>

//                               {child.children && (
//                                 <div className="absolute left-full top-0 ml-1 w-96 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-200 z-50">
//                                   <div className="py-2 max-h-96 overflow-y-auto">
//                                     {child.children.map((subChild, subIndex) => (
//                                       <Link
//                                         key={subIndex}
//                                         to={subChild.path}
//                                         className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm border-b border-gray-100 last:border-b-0"
//                                       >
//                                         {subChild.name}
//                                       </Link>
//                                     ))}
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//             </nav>
//           </div>
//         </div>
//       </div>

//       <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'
//         }`}>
//         <div
//           className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
//             }`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//         <div className={`absolute top-0 right-0 h-full w-80 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 mobile-menu-container ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           }`}>
//           <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-4 flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                 <span className="text-blue-600 font-bold">ST</span>
//               </div>
//               <span className="text-white font-semibold">Menu</span>
//             </div>
//             <button
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-white hover:text-yellow-300 p-1"
//             >
//               <FaTimes size={20} />
//             </button>
//           </div>


//           <div className="flex-1 overflow-y-auto max-h-[calc(100vh-210px)]">
//             {renderMobileNavItems(navLinks)}
//           </div>

//           <div className="p-4 border-t border-gray-200 space-y-3">
//             <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
//               Apply Now
//             </button>
//             <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//               Admission 2025
//             </button>

//           </div>
//         </div>
//       </div>

//       {location != '/' &&
//         <div className={`transition-all duration-300 ${isScrolled ? 'h-14 md:h-32 lg:h-44' : 'h-14 md:h-32 lg:h-44'}`}></div>}
//     </>
//   );
// }


// import { useState, useEffect, useRef, useCallback } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { MdEmail, MdLocationOn, MdSearch, MdSlowMotionVideo } from "react-icons/md";
// import { Link, useLocation } from "react-router-dom";
// import { getactiveheaderdata } from "../../shared/services/apihomepage/apihomepage";

// export default function CollegeHeader() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [data, setdata] = useState([]);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileActiveDropdowns, setMobileActiveDropdowns] = useState(new Set());
//   const location = useLocation().pathname;
//   const dropdownTimeoutRef = useRef(null);

//   const getPages = useCallback(async () => {
//     var res = await getactiveheaderdata();
//     setdata(res.data);
//   }, []);

//   useEffect(() => {
//     getPages();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsScrolled(currentScrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [isMobileMenuOpen]);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About us", path: "/aboutus" },
//     { name: "Principal", path: "/principal" },

//     {
//       name: "Academic",
//       children: [
//         {
//           name: "Department",
//           children: data?.departments?.map((dt) => ({
//             name: `${dt.fullName}`, path: `/department/${dt.shortName}`
//           }))
//         },
//         {
//           name: "Facilities",
//           children: [
//             { name: "Hostels", path: "/facilities/hostels" },
//             { name: "Library & Info Services", path: "/facilities/library" },
//             { name: "Laboratories & Internet Lab", path: "/facilities/laboratories" },
//             { name: "Language Lab", path: "/facilities/language" },
//             { name: "Conference Halls", path: "/facilities/conference" },
//             { name: "Transport", path: "/facilities/transport" },
//             { name: "Common Room", path: "/facilities/common" },
//             { name: "Facilities for Divyangjan", path: "/facilities/accessibility" },
//             { name: "Renewable Energy Sources", path: "/facilities/renewable" },
//           ],
//         },
//         {
//           name: "Cell",
//           children: data?.cells?.map((dt) => ({
//             name: `${dt.title}`, path: `/cell/${dt.title}`
//           }))
//         },
//         {
//           name: "Committees",
//           children: data?.committees?.map((dt) => ({
//             name: `${dt.title}`, path: `/committee/${dt.title}`
//           }))
//         }
//       ],
//     },
//     { name: "Placement Cell", path: "/placement-cell" },
//     { name: "Tiet Alumni", path: "/tiet-alumni" },
//     { name: "Stake Holder Feedback", path: "/stakeholder" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Naac", path: "/naac" },
//     { name: "Nisp", path: "/nisp" },
//     { name: "Contact", path: "/contactus" },
//   ];

//   const handleMouseEnter = (index) => {
//     if (dropdownTimeoutRef.current) {
//       clearTimeout(dropdownTimeoutRef.current);
//     }
//     setActiveDropdown(index);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 150);
//   };

//   const renderMobileNavItems = (items, level = 0, parentKey = '') => {
//     return items.map((item, index) => {
//       const itemKey = parentKey ? `${parentKey}-${index}` : `${level}-${index}`;
//       const hasChildren = item.children && item.children.length > 0;
//       const isExpanded = mobileActiveDropdowns.has(itemKey);

//       return (
//         <div key={index} className={`${level > 0 ? 'ml-4' : ''} `}>
//           <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100">
//             {hasChildren ? (
//               <button
//                 onClick={(e) => handleMobileDropdownToggle(itemKey, e)}
//                 className="text-gray-700 hover:text-blue-600 font-medium flex-1 text-left"
//                 type="button"
//               >
//                 {item.name}
//               </button>
//             ) : (
//               <Link
//                 to={item.path || '#'}
//                 className="text-gray-700 hover:text-blue-600 font-medium flex-1"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             )}

//             {hasChildren && (
//               <button
//                 onClick={(e) => handleMobileDropdownToggle(itemKey, e)}
//                 className="p-1 text-gray-500 hover:text-blue-600 ml-2 flex-shrink-0"
//                 type="button"
//               >
//                 {isExpanded ? (
//                   <FaChevronDown size={12} />
//                 ) : (
//                   <FaChevronRight size={12} />
//                 )}
//               </button>
//             )}
//           </div>

//           {hasChildren && isExpanded && (
//             <div className="bg-gray-50">
//               {renderMobileNavItems(item.children, level + 1, itemKey)}
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   const handleMobileDropdownToggle = (dropdownKey, event) => {
//     if (event) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setMobileActiveDropdowns(prevState => {
//       const newState = new Set(prevState);
//       if (newState.has(dropdownKey)) {
//         const keysToRemove = Array.from(newState).filter(key =>
//           key.startsWith(dropdownKey) || key === dropdownKey
//         );
//         keysToRemove.forEach(key => newState.delete(key));
//       } else {
//         newState.add(dropdownKey);
//       }
//       return newState;
//     });
//   };

//   return (
//     <>
//       <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
//         <div className={`bg-blue-900 text-white text-sm transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'py-1.5 opacity-100'} hidden md:block`}>
//           <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//             <div className="flex items-center space-x-6">
//               <div className="flex items-center space-x-2">
//                 <MdEmail className="text-yellow-300" />
//                 <span>admissions@stengineering.edu.in</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <FaPhone className="text-yellow-300" />
//                 <span>+91 4146-123456</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MdLocationOn className="text-yellow-300" />
//                 <span>Villupuram, Tamil Nadu</span>
//               </div>
//             </div>

//             <div className="flex items-center space-x-3">
//               <span className="text-yellow-300 font-medium">Follow Us:</span>
//               <div className="flex space-x-2">
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaFacebookF size={12} />
//                 </Link>
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaTwitter size={12} />
//                 </Link>
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaLinkedinIn size={12} />
//                 </Link>
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaInstagram size={12} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-4 py-2 md:py-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-14' : 'w-20 md:w-28 '}`}>
//                   <img src="http://www.tagoreiet.ac.in/images/logo-animation.gif" alt="" className="" />
//                 </div>
//                 <div>
//                   <h1 className={`hidden md:block font-bold text-gray-800 leading-tight transition-all duration-300 ${isScrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
//                     TAGORE INSTITUTE OF ENGINEERING AND TECHNOLOGY
//                   </h1>
//                   <div className="md:hidden text-gray-800 w-fit">
//                     <h2 className={`${isScrolled ? 'text-lg' : 'text-3xl'} font-semibold`}>TAGORE</h2><h2 className="text-[10px] whitespace-nowrap ">INSTITUTE OF ENGINEERING AND TECHNOLOGY</h2>
//                   </div>
//                   <p className={`hidden md:block text-gray-600 transition-all duration-300 ${isScrolled ? 'text-[10px]' : 'text-[10px] md:text-sm'}`}>
//                     Accredited by NAAC | Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai
//                   </p>
//                   {!isScrolled && (
//                     <p className="text-[10px] sm:text-xs text-blue-600 font-medium hidden md:block mt-0.5">
//                       Deviyakurichi - 636 112, Thalaivasal(TK), Salem (DT), Tamil Nadu, India.
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className={`hidden lg:flex items-center transition-all duration-300 ${isScrolled ? 'space-x-3' : 'space-x-3 xl:space-x-6 '}`}>
//                 {!isScrolled && (
//                   <>
//                     <div className="text-center">
//                       <div className="w-20 flex items-center justify-center mb-1">
//                         <img src="http://www.tagoreiet.ac.in/images/NAAC.webp" alt="" className="w-full" />
//                       </div>
//                       <span className="text-xs text-gray-500">Accredited</span>
//                     </div>

//                     <div className="text-center">
//                       <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-1">
//                         <div className="text-orange-600 font-bold text-xs text-center">
//                           <div className="text-xl">2646</div>
//                         </div>
//                       </div>
//                       <span className="text-xs text-gray-500">TNEA CODE</span>
//                     </div>

//                     <div className="text-center">
//                       <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-1">
//                         <div className="text-purple-600 font-bold text-xs text-center">
//                           <MdSlowMotionVideo className="text-4xl" />
//                         </div>
//                       </div>
//                       <span className="text-xs text-gray-500">Virtual Tour</span>
//                     </div>
//                   </>
//                 )}

//                 <div className={`flex transition-all duration-300 ${isScrolled ? 'flex-row space-x-2' : 'flex-col space-y-2'}`}>
//                   <button className={`bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors ${isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'}`}>
//                     Apply Now
//                   </button>
//                   <button className={`bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors ${isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'}`}>
//                     Admission 2025
//                   </button>
//                 </div>
//               </div>

//               <div className="lg:hidden">
//                 <button
//                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                   className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors mobile-menu-container"
//                 >
//                   <FaBars size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-blue-800 to-blue-600 hidden lg:block">
//           <div className="max-w-7xl mx-auto px-4">
//             <nav className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-2.5'}`}>
//               <div className="flex items-center space-x-1">
//                 {navLinks.map((link, index) => (
//                   <div
//                     key={index}
//                     className="relative group"
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <Link
//                       to={link.path || '#'}
//                       className={`text-white hover:text-yellow-300 rounded-lg font-medium transition-colors flex items-center space-x-1 ${isScrolled ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-sm'}`}
//                     >
//                       <span>{link.name}</span>
//                       {link.children && <FaChevronDown size={10} />}
//                     </Link>

//                     {link.children && activeDropdown === index && (
//                       <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
//                         <div className="py-2">
//                           {link.children.map((child, childIndex) => (
//                             <div key={childIndex} className="relative group/child">
//                               <Link
//                                 to={child.path || '#'}
//                                 className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium border-b border-gray-100 last:border-b-0 flex items-center justify-between"
//                               >
//                                 <span>{child.name}</span>
//                                 {child.children && <FaChevronRight size={12} />}
//                               </Link>

//                               {child.children && (
//                                 <div className="absolute left-full top-0 ml-1 w-96 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-200 z-50">
//                                   <div className="py-2 max-h-96 overflow-y-auto">
//                                     {child.children.map((subChild, subIndex) => (
//                                       <Link
//                                         key={subIndex}
//                                         to={subChild.path}
//                                         className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm border-b border-gray-100 last:border-b-0"
//                                       >
//                                         {subChild.name}
//                                       </Link>
//                                     ))}
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>

//       <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
//         <div
//           className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'}`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//         <div className={`absolute top-0 right-0 h-full w-80 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 mobile-menu-container ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//           <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-4 flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                 <span className="text-blue-600 font-bold">ST</span>
//               </div>
//               <span className="text-white font-semibold">Menu</span>
//             </div>
//             <button
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-white hover:text-yellow-300 p-1"
//             >
//               <FaTimes size={20} />
//             </button>
//           </div>

//           <div className="flex-1 overflow-y-auto max-h-[calc(100vh-210px)]">
//             {renderMobileNavItems(navLinks)}
//           </div>

//           <div className="p-4 border-t border-gray-200 space-y-3">
//             <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
//               Apply Now
//             </button>
//             <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//               Admission 2025
//             </button>
//           </div>
//         </div>
//       </div>

//       {location !== '/' && (
//         <div className={`transition-all duration-300 ${isScrolled ? 'h-14 md:h-32 lg:h-44' : 'h-14 md:h-32 lg:h-44'}`}></div>
//       )}
//     </>
//   );
// }

// import { useState, useEffect, useRef, useCallback } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { MdEmail, MdLocationOn, MdSearch, MdSlowMotionVideo } from "react-icons/md";
// import { Link, useLocation } from "react-router-dom";
// import { getactiveheaderdata } from "../../shared/services/apihomepage/apihomepage";

// export default function CollegeHeader() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [data, setdata] = useState([]);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileActiveDropdowns, setMobileActiveDropdowns] = useState(new Set());
//   const location = useLocation().pathname;
//   const dropdownTimeoutRef = useRef(null);

//   const getPages = useCallback(async () => {
//     var res = await getactiveheaderdata();
//     setdata(res.data);
//   }, []);

//   useEffect(() => {
//     getPages();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsScrolled(currentScrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [isMobileMenuOpen]);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     {
//       name: "About us",
//       // path: "/aboutus",
//       children: [
//         { name: "Overview", path: "/overview" },
//         { name: "Vission and Mission", path: "/vision-mission" },
//         { name: "Trust", path: "/trust" },
//         { name: "Board Of Management", path: "/board-of-management" },
//         { name: "Principal Message", path: "/principal-message" },
//         { name: "Governing Council", path: "/governing-council" },
//         { name: "Academin Council", path: "/academic-council" },
//       ]
//     },
//     {
//       name: "Academic",
//       children: [
//         {
//           name: "Department",
//           children: data?.departments?.map((dt) => ({
//             name: `${dt.fullName}`, path: `/department/${dt.shortName}`
//           }))
//         },
//         { name: 'Academic Calendar', path: '/academic-calendar' },
//         { name: 'Regulations', path: '/regulation' },
//         { name: 'Curriculum & Syllabus', path: '/curriculum-syllabus' },
//         // {
//         //   name: "Facilities",
//         //   children: [
//         //     { name: "Hostels", path: "/facilities/hostels" },
//         //     { name: "Library & Info Services", path: "/facilities/library" },
//         //     { name: "Laboratories & Internet Lab", path: "/facilities/laboratories" },
//         //     { name: "Language Lab", path: "/facilities/language" },
//         //     { name: "Conference Halls", path: "/facilities/conference" },
//         //     { name: "Transport", path: "/facilities/transport" },
//         //     { name: "Common Room", path: "/facilities/common" },
//         //     { name: "Facilities for Divyangjan", path: "/facilities/accessibility" },
//         //     { name: "Renewable Energy Sources", path: "/facilities/renewable" },
//         //   ],
//         // },
//         {
//           name: "Cell",
//           children: data?.cells?.map((dt) => ({
//             name: `${dt.title}`, path: `/cell/${dt.title}`
//           }))
//         },
//         // {
//         //   name: "Committees",
//         //   children: data?.committees?.map((dt) => ({
//         //     name: `${dt.title}`, path: `/committee/${dt.title}`
//         //   }))
//         // }
//       ],
//     },
//     {
//       name: "Research",
//       children: [
//         { name: "R & D Department", path: "/r&d-department" },
//         { name: "Faculty", path: "/faculty" },
//         { name: "R & D Activities", path: "/r&d-activities" },
//         { name: "Recruiters", path: "/recruiters" },
//       ]
//     },
//     {
//       name: "Naac",
//       // path: "/naac" ,
//       children: [
//         { name: "SSR", path: "/ssr" },
//         { name: "NAAC Certificate", path: "/naac-certifiacate" },
//         { name: "AQAR", path: "/aqar" },
//         { name: "Criteria", path: "/criteria" },
//       ]
//     },
//     {
//       name: "AICTE",
//       children: [
//         { name: "AICTE Mandatory Disclosure", path: "/aicte-mandatory-disclosure" },
//         { name: "AICTE Guidelines", path: "/aicte-guidelines" },
//         { name: "AICTE Approval Copy", path: "/aicte-approval-copy" },
//       ]
//     },
//     {
//       name: "UGC",
//       children: [
//         { name: "UGC Mandatory Disclosure", path: "/ugc-mandatory-disclosure" },
//         { name: "UGC Guidelines", path: "/ugc-guidelines" },
//         { name: "RTI", path: "/rti" },
//       ]
//     },
//     {
//       name: "NIRF",
//       children: [
//         { name: "PDF Documents", path: "/pdf-documents" },
//       ]
//     },
//     {
//       name: "Committees",
//       children: data?.committees?.map((dt) => ({
//         name: `${dt.title}`, path: `/committee/${dt.title}`
//       }))
//     },
//     {
//       name: "Admission",
//       children: [
//         { name: "Programme Offered", path: "/programme-offered" },
//         { name: "Online Registration", path: "/online-registration" },
//         { name: "Admission Procedure", path: "/admission-procedure" },
//         { name: "Fees Structure", path: "/fees-structure" },
//         { name: "Brochure", path: "/brochure" },
//         { name: "Refund Policy", path: "/refund-policy" },
//         { name: "Scholarship", path: "/scholarship" },
//       ]
//     },
//     {
//       name: "Campus Life",
//       children: [
//         { name: "Library", path: "/facilities/library" },
//         { name: "Hostels", path: "/facilities/hostels" },
//         { name: "Transport", path: "/facilities/transport" },
//         { name: "Sports", path: "/facilities/sports" },
//         { name: "Cafeteria", path: "/facilities/cafeteria" },
//         { name: "Campus Tour", path: "/facilities/campus-tour" },
//         { name: "Club", path: "/facilities/club" },
//         { name: "Event", path: "/facilities/event" },
//       ],
//     },
//     {
//       name: "Department",
//       children: data?.departments?.map((dt) => ({
//         name: `${dt.fullName}`, path: `/department/${dt.shortName}`
//       }))
//     },
//     {
//       name: "Cell",
//       children: data?.cells?.map((dt) => ({
//         name: `${dt.title}`, path: `/cell/${dt.title}`
//       }))
//     },
//     {
//       name: "Explore",
//       children: [
//         { name: "An Overview", path: "/explore/overview" },
//         { name: "Vision Mission", path: "/explore/vision-mission" },
//         { name: "Programme Offered", path: "/explore/programme-offered" },
//         { name: "Campus Tour", path: "/explore/campus-tour" },
//         { name: "Event Gallery", path: "/explore/event-gallery" },
//       ],
//     },
//     {
//       name: "Information Hub",
//       children: [
//         { name: "Online Registratiion", path: "/info-hub/overview" },
//         { name: "Mandatory Disclosure", path: "/info-hub/mandatory-disclosure" },
//         { name: "AICTE Approval Copy", path: "/info-hub/aicte" },
//         { name: "Anna Univercity Approval Copy", path: "/info-hub/auac" },
//         { name: "Prevention of Sexual Harassment", path: "/info-hub/posh" },
//         { name: "HR Policy", path: "/info-hub/hr-policy" },
//         { name: "AICTE Guide Lines", path: "/info-hub/aicte-guide" },
//         { name: "UGC Guide Lines", path: "/info-hub/ugc-guide" },
//         { name: "Anna University Permanent Affiliation Copy", path: "/info-hub/aupac" },
//       ],
//     },
//     {
//       name: "Quick Links",
//       children: [
//         { name: "Grievance Redrassal Form", path: "/explore/grf" },
//         { name: "Online Grievance Portal", path: "/explore/ogp" },
//         { name: "Anti Ragging", path: "/explore/anti-ragging" },
//         { name: "Internal Complaints Committee", path: "/explore/icc" },
//         { name: "Equal Opportunity Committee", path: "/explore/eoc" },
//         { name: "SC/ST/OBC Cell", path: "/explore/ssoc" },
//         { name: "Student Induction Program", path: "/explore/sip" },
//         { name: "Audit Report", path: "/explore/audit-report" },
//         { name: "RTI", path: "/explore/rti" },
//         { name: "Feedback Form", path: "/explore/feedback-form" },
//       ],
//     },
//     // { name: "Placement Cell", path: "/placement-cell" },
//     // { name: "Alumni", path: "/tiet-alumni" },
//     // { name: "Stake Holder Feedback", path: "/stakeholder" },
//     // { name: "Gallery", path: "/gallery" },
//     // { name: "Nisp", path: "/nisp" },
//     { name: "Contact", path: "/contactus" },
//   ];

//   const handleMouseEnter = (index) => {
//     if (dropdownTimeoutRef.current) {
//       clearTimeout(dropdownTimeoutRef.current);
//     }
//     setActiveDropdown(index);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 150);
//   };

//   const renderMobileNavItems = (items, level = 0, parentKey = '') => {
//     return items.map((item, index) => {
//       const itemKey = parentKey ? `${parentKey}-${index}` : `${level}-${index}`;
//       const hasChildren = item.children && item.children.length > 0;
//       const isExpanded = mobileActiveDropdowns.has(itemKey);

//       return (
//         <div key={index} className={`${level > 0 ? 'ml-4' : ''} `}>
//           <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100">
//             {hasChildren ? (
//               <button
//                 onClick={(e) => handleMobileDropdownToggle(itemKey, e)}
//                 className="text-gray-700 hover:text-blue-600 font-medium flex-1 text-left"
//                 type="button"
//               >
//                 {item.name}
//               </button>
//             ) : (
//               <Link
//                 to={item.path || '#'}
//                 className="text-gray-700 hover:text-blue-600 font-medium flex-1"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             )}

//             {hasChildren && (
//               <button
//                 onClick={(e) => handleMobileDropdownToggle(itemKey, e)}
//                 className="p-1 text-gray-500 hover:text-blue-600 ml-2 flex-shrink-0"
//                 type="button"
//               >
//                 {isExpanded ? (
//                   <FaChevronDown size={12} />
//                 ) : (
//                   <FaChevronRight size={12} />
//                 )}
//               </button>
//             )}
//           </div>

//           {hasChildren && isExpanded && (
//             <div className="bg-gray-50">
//               {renderMobileNavItems(item.children, level + 1, itemKey)}
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   const handleMobileDropdownToggle = (dropdownKey, event) => {
//     if (event) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setMobileActiveDropdowns(prevState => {
//       const newState = new Set(prevState);
//       if (newState.has(dropdownKey)) {
//         const keysToRemove = Array.from(newState).filter(key =>
//           key.startsWith(dropdownKey) || key === dropdownKey
//         );
//         keysToRemove.forEach(key => newState.delete(key));
//       } else {
//         newState.add(dropdownKey);
//       }
//       return newState;
//     });
//   };

//   return (
//     <>
//       <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
//         <div className={`bg-blue-900 text-white text-sm transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'py-1.5 opacity-100'} hidden md:block`}>
//           <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//             <div className="flex items-center space-x-6">
//               <div className="flex items-center space-x-2">
//                 <MdEmail className="text-yellow-300" />
//                 <span>admissions@stengineering.edu.in</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <FaPhone className="text-yellow-300" />
//                 <span>+91 4146-123456</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MdLocationOn className="text-yellow-300" />
//                 <span>Villupuram, Tamil Nadu</span>
//               </div>
//             </div>

//             <div className="flex items-center space-x-3">
//               <span className="text-yellow-300 font-medium">Follow Us:</span>
//               <div className="flex space-x-2">
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaFacebookF size={12} />
//                 </Link>
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaTwitter size={12} />
//                 </Link>
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaLinkedinIn size={12} />
//                 </Link>
//                 <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
//                   <FaInstagram size={12} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-4 py-2 md:py-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-14' : 'w-20 md:w-28 '}`}>
//                   <img src="http://www.tagoreiet.ac.in/images/logo-animation.gif" alt="" className="" />
//                 </div>
//                 <div>
//                   <h1 className={`hidden md:block font-bold text-gray-800 leading-tight transition-all duration-300 ${isScrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
//                     TAGORE INSTITUTE OF ENGINEERING AND TECHNOLOGY
//                   </h1>
//                   <div className="md:hidden text-gray-800 w-fit">
//                     <h2 className={`${isScrolled ? 'text-lg' : 'text-3xl'} font-semibold`}>TAGORE</h2><h2 className="text-[10px] whitespace-nowrap ">INSTITUTE OF ENGINEERING AND TECHNOLOGY</h2>
//                   </div>
//                   <p className={`hidden md:block text-gray-600 transition-all duration-300 ${isScrolled ? 'text-[10px]' : 'text-[10px] md:text-sm'}`}>
//                     Accredited by NAAC | Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai
//                   </p>
//                   {!isScrolled && (
//                     <p className="text-[10px] sm:text-xs text-blue-600 font-medium hidden md:block mt-0.5">
//                       Deviyakurichi - 636 112, Thalaivasal(TK), Salem (DT), Tamil Nadu, India.
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className={`hidden lg:flex items-center transition-all duration-300 ${isScrolled ? 'space-x-3' : 'space-x-3 xl:space-x-6 '}`}>
//                 {!isScrolled && (
//                   <>
//                     <div className="text-center">
//                       <div className="w-20 flex items-center justify-center mb-1">
//                         <img src="http://www.tagoreiet.ac.in/images/NAAC.webp" alt="" className="w-full" />
//                       </div>
//                       <span className="text-xs text-gray-500">Accredited</span>
//                     </div>

//                     <div className="text-center">
//                       <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-1">
//                         <div className="text-orange-600 font-bold text-xs text-center">
//                           <div className="text-xl">2646</div>
//                         </div>
//                       </div>
//                       <span className="text-xs text-gray-500">TNEA CODE</span>
//                     </div>

//                     <div className="text-center">
//                       <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-1">
//                         <div className="text-purple-600 font-bold text-xs text-center">
//                           <MdSlowMotionVideo className="text-4xl" />
//                         </div>
//                       </div>
//                       <span className="text-xs text-gray-500">Virtual Tour</span>
//                     </div>
//                   </>
//                 )}

//                 <div className={`flex transition-all duration-300 ${isScrolled ? 'flex-row space-x-2' : 'flex-col space-y-2'}`}>
//                   <button className={`bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors ${isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'}`}>
//                     Apply Now
//                   </button>
//                   <button className={`bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors ${isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'}`}>
//                     Admission 2025
//                   </button>
//                 </div>
//               </div>

//               <div className="lg:hidden">
//                 <button
//                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                   className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors mobile-menu-container"
//                 >
//                   <FaBars size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-blue-800 to-blue-600 hidden lg:block">
//           <div className="max-w-7xl mx-auto px-4">
//             <nav className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-2.5'}`}>
//               <div className="flex items-center space-x-4"> {/* Increased space-x-6 for better spacing */}
//                 {navLinks.map((link, index) => (
//                   <div
//                     key={index}
//                     className="relative group"
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <Link
//                       to={link.path || '#'}
//                       className={`text-white hover:text-yellow-300 rounded-lg font-medium transition-colors flex items-center space-x-1 whitespace-nowrap ${isScrolled ? 'px-2 py-1.5 text-sm' : 'px-3 py-2 text-base'}`} // Added whitespace-nowrap
//                     >
//                       <span>{link.name}</span>
//                       {link.children && <FaChevronDown size={10} />}
//                     </Link>

//                     {link.children && activeDropdown === index && (
//                       <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
//                         <div className="py-1">
//                           {link.children.map((child, childIndex) => (
//                             <div key={childIndex} className="relative group/child">
//                               <Link
//                                 to={child.path || '#'}
//                                 className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm border-b border-gray-100 last:border-b-0 flex items-center justify-between"
//                               >
//                                 <span>{child.name}</span>
//                                 {child.children && <FaChevronRight size={12} />}
//                               </Link>

//                               {child.children && (
//                                 <div className="absolute left-full top-0 ml-1 w-96 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-200 z-50">
//                                   <div className="py-2 max-h-96 overflow-y-auto">
//                                     {child.children.map((subChild, subIndex) => (
//                                       <Link
//                                         key={subIndex}
//                                         to={subChild.path}
//                                         className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm border-b border-gray-100 last:border-b-0"
//                                       >
//                                         {subChild.name}
//                                       </Link>
//                                     ))}
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>

//       <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
//         <div
//           className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'}`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//         <div className={`absolute top-0 right-0 h-full w-80 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 mobile-menu-container ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//           <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-4 flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                 <span className="text-blue-600 font-bold">ST</span>
//               </div>
//               <span className="text-white font-semibold">Menu</span>
//             </div>
//             <button
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-white hover:text-yellow-300 p-1"
//             >
//               <FaTimes size={20} />
//             </button>
//           </div>

//           <div className="flex-1 overflow-y-auto max-h-[calc(100vh-210px)]">
//             {renderMobileNavItems(navLinks)}
//           </div>

//           <div className="p-4 border-t border-gray-200 space-y-3">
//             <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
//               Apply Now
//             </button>
//             <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//               Admission 2025
//             </button>
//           </div>
//         </div>
//       </div>

//       {location !== '/' && (
//         <div className={`transition-all duration-300 ${isScrolled ? 'h-14 md:h-32 lg:h-44' : 'h-14 md:h-32 lg:h-44'}`}></div>
//       )}
//     </>
//   );
// }

import { useState, useEffect, useRef, useCallback } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown, FaChevronRight, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdSearch, MdSlowMotionVideo } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { getactiveheaderdata } from "../../shared/services/apihomepage/apihomepage";

export default function CollegeHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [data, setdata] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdowns, setMobileActiveDropdowns] = useState(new Set());
  const location = useLocation().pathname;
  const dropdownTimeoutRef = useRef(null);

  const getPages = useCallback(async () => {
    var res = await getactiveheaderdata();
    setdata(res.data);
  }, []);

  useEffect(() => {
    getPages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About us",
      children: [
        { name: "Overview", path: "/overview" },
        { name: "Vision and Mission", path: "/vision-mission" },
        { name: "Trust", path: "#" },
        { name: "Board Of Management", path: "/board-of-management" },
        { name: "Principal Message", path: "/principal-message" },
        { name: "Governing Council", path: "/governing-council" },
        { name: "Academic Council", path: "#" },
      ]
    },
    {
      name: "Academic",
      children: [
        {
          name: "Department",
          children: data?.departments?.map((dt) => ({
            name: `${dt.fullName}`, path: `/department/${dt.shortName}`
          }))
        },
        { name: 'Academic Calendar', path: '/examcell/calendar' },
        { name: 'Regulations', path: '/examcell/regulations' },
        { name: 'Curriculum & Syllabus', path: '/examcell/curriculam' },
        // { name: 'Exam Cell', path: '/examcell/calendar' },
        // {
        //   name: "Facilities",
        //   children: [
        //     { name: "Hostels", path: "/facilities/hostels" },
        //     { name: "Library & Info Services", path: "/facilities/library" },
        //     { name: "Laboratories & Internet Lab", path: "/facilities/laboratories" },
        //     { name: "Language Lab", path: "/facilities/language" },
        //     { name: "Conference Halls", path: "/facilities/conference" },
        //     { name: "Transport", path: "/facilities/transport" },
        //     { name: "Common Room", path: "/facilities/common" },
        //     { name: "Facilities for Divyangjan", path: "/facilities/accessibility" },
        //     { name: "Renewable Energy Sources", path: "/facilities/renewable" },
        //   ],
        // },
        {
          name: "Cell",
          children: [
            { name: 'Exam Cell', path: '/examcell/calendar' },
            { name: "Placement Cell", path: "/placement-cell" },
            // { name: "Alumni Cell", path: "/tiet-alumni" },
            ...(data?.cells?.map((dt) => ({ name: dt.title, path: `/cell/${dt.title}` })) || [])]
        },
        {
          name: "Committees",
          children: data?.committees?.map((dt) => ({
            name: `${dt.title}`, path: `/committee/${dt.title}`
          }))
        }
      ],
    },
    {
      name: "Research",
      children: [
        { name: "R & D Department", path: "/r&d-department" },
        { name: "Faculty", path: "/faculty" },
        { name: "R & D Facilities", path: "/r&d-facilities" },
        { name: "Recruiters", path: "#" },
      ]
    },
    // { name: "NAAC", path: "/naac" },
    {
      name: "NAAC",
      children: [
        { name: "NAAC Accreditation", path: "/naac-accrediation" },
        { name: "NAAC Certificate", path: "/naac-certificate" },
      ]
    },
    {
      name: "AICTE",
      children: [
        { name: "AICTE Mandatory Disclosure", path: "/aicte-mandatory-disclosure" },
        { name: "AICTE Guidelines", path: "/aicte-guidelines" },
        { name: "AICTE Approval Copy", path: "/aicte-approval-copy" },
      ]
    },
    {
      name: "UGC",
      children: [
        { name: "UGC Mandatory Disclosure", path: "/ugc-mandatory-disclosure" },
        { name: "UGC Guidelines", path: "https://www.ugc.gov.in/Guideline" },
        // { name: "UGC Guidelines", path: "/ugc-guidelines" },
        { name: "RTI", path: "/rti" },
      ]
    },
    {
      name: "NIRF",
      children: [
        { name: "PDF Documents", path: "/pdf-documents" },
      ]
    },
    // {
    //   name: "Committees",
    //   children: data?.committees?.map((dt) => ({
    //     name: `${dt.title}`, path: `/committee/${dt.title}`
    //   }))
    // },
    {
      name: "Admission",
      children: [
        { name: "Programme Offered", path: "/programme-offered" },
        { name: "Online Registration", path: "/online-registration" },
        { name: "Admission Procedure", path: "/admission-procedure" },
        { name: "Fees Structure", path: "/fees-structure" },
        { name: "Brochure", path: "/admission-brochure" },
        { name: "Refund Policy", path: "/refund-policy" },
        { name: "Scholarship", path: "/scholarship" },
      ]
    },
    {
      name: "Campus Life",
      children: [
        { name: "Hostels", path: "/facilities/hostel" },
        { name: "Library & Info Services", path: "/facilities/library" },
        { name: "Laboratories & Internet Lab", path: "/facilities/laboratories-intenetlab" },
        { name: "Language Lab", path: "/facilities/language-lab" },
        { name: "Conference Halls", path: "/facilities/conference" },
        { name: "Transport", path: "/facilities/transport" },
        { name: "Common Room", path: "/facilities/commonroom" },
        { name: "Facilities for Divyangjan", path: "/facilities/accessibility" },
        { name: "Renewable Energy Sources", path: "/facilities/renewable" },
      ],
    },
    { name: "Careers", path: "/placement-cell" },
    // { name: "Alumni", path: "/tiet-alumni" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contactus" },
  ];

  const handleMouseEnter = (index) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const renderMobileNavItems = (items, level = 0, parentKey = '') => {
    return items.map((item, index) => {
      const itemKey = parentKey ? `${parentKey}-${index}` : `${level}-${index}`;
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = mobileActiveDropdowns.has(itemKey);

      return (
        <div key={index} className={`${level > 0 ? 'ml-4' : ''}`}>
          <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100">
            {hasChildren ? (
              <button
                onClick={(e) => handleMobileDropdownToggle(itemKey, e)}
                className="text-gray-700 hover:text-blue-600 font-medium flex-1 text-left"
                type="button"
              >
                {item.name}
              </button>
            ) : (
              <Link
                to={item.path || '#'}
                className="text-gray-700 hover:text-blue-600 font-medium flex-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )}

            {hasChildren && (
              <button
                onClick={(e) => handleMobileDropdownToggle(itemKey, e)}
                className="p-1 text-gray-500 hover:text-blue-600 ml-2 flex-shrink-0"
                type="button"
              >
                {isExpanded ? (
                  <FaChevronDown size={12} />
                ) : (
                  <FaChevronRight size={12} />
                )}
              </button>
            )}
          </div>

          {hasChildren && isExpanded && (
            <div className="bg-gray-50">
              {renderMobileNavItems(item.children, level + 1, itemKey)}
            </div>
          )}
        </div>
      );
    });
  };

  const handleMobileDropdownToggle = (dropdownKey, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    setMobileActiveDropdowns(prevState => {
      const newState = new Set(prevState);
      if (newState.has(dropdownKey)) {
        const keysToRemove = Array.from(newState).filter(key =>
          key.startsWith(dropdownKey) || key === dropdownKey
        );
        keysToRemove.forEach(key => newState.delete(key));
      } else {
        newState.add(dropdownKey);
      }
      return newState;
    });
  };

  return (
    <>
      <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        {/* Top Contact Bar */}
        <div className={`bg-blue-900 text-white text-sm transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'py-2 opacity-100'} hidden md:block`}>
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MdEmail className="text-yellow-300" />
                <span>admissions@tagoreiet.ac.in</span>
              </div>
             <div 
  className="flex items-center space-x-2 cursor-pointer hover:text-green-600 transition-colors"
  onClick={() => {
    const phoneNumber = "919442700473"; // Remove + and spaces
    const message = "Hi! Could you please help me with my admission?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }}
>
  <FaPhone className="text-yellow-300" />
  <span>+91 9442700473</span>
</div>
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-yellow-300" />
                <span>Deviyakurichi, Salem, Tamil Nadu</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-yellow-300 font-medium">Follow Us:</span>
              <div className="flex space-x-2">
                <Link to="https://www.facebook.com/tagoreiet?rdid=OrFjREUT88LUf5ZW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BxSJ26SkJ%2" target="blank" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
                  <FaFacebookF size={12} />
                </Link>
                {/* <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
                  <FaTwitter size={12} />
                </Link>
                <Link to="#" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
                  <FaLinkedinIn size={12} />
                </Link> */}
                <Link to="https://www.instagram.com/tagore_official_01?igsh=dWJha3NqZDU4dzNz" target="blank" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
                  <FaInstagram size={12} />
                </Link>
                <Link to="https://www.youtube.com/watch?v=WXOP5lUXptM" target="blank" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-blue-900 transition-colors">
                  <FaYoutube size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className={`flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isScrolled ? 'w-12 h-12 md:w-14 md:h-14' : 'w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28'}`}>
                <img src="http://www.tagoreiet.ac.in/images/logo-animation.gif" alt="Logo" className="w-full h-full object-contain" />
              </div>

              {/* Desktop title */}
              <div className="hidden lg:flex flex-col justify-center flex-1 min-w-0">
                <h1 className={`font-bold text-gray-800 leading-tight transition-all duration-300 ${isScrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
                  TAGORE INSTITUTE OF ENGINEERING AND TECHNOLOGY
                </h1>
                <p className={`text-gray-600 transition-all duration-300 ${isScrolled ? 'text-[10px]' : 'text-[10px] md:text-sm'}`}>
                  Accredited by NAAC | Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai
                </p>
                {!isScrolled && (
                  <p className="text-[10px] sm:text-xs text-blue-600 font-medium mt-0.5">
                    Deviyakurichi - 636 112, Thalaivasal(TK), Salem (DT), Tamil Nadu, India.
                  </p>
                )}
              </div>

              {/* Mobile title */}
              <div className="lg:hidden flex-1 min-w-0">
                <h1 className={`font-bold text-gray-800 leading-tight transition-all duration-300 ${isScrolled ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'}`}>
                  TAGORE
                </h1>
                <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">
                  INSTITUTE OF ENGINEERING AND TECHNOLOGY
                </p>
              </div>
            </div>


            <div className={`lg:flex hidden items-center transition-all duration-300 ${isScrolled ? 'space-x-2' : 'space-x-4 lg:space-x-6'}`}>
              {/* {!isScrolled && ( */}
              <>
                <div className={`${isScrolled ? 'hidden md:flex' : ''} flex flex-col md:flex-row justify-center items-center space-x-2`}>
                  <div className="flex flex-col items-center">
                    <div className={`w-14 mx-auto flex items-center justify-center md:mb-1 ${isScrolled ? 'md:w-16' : 'md:w-20'}`}>
                      <img src="/images/NAAC.webp" alt="NAAC" className="w-full" />
                    </div>
                    <span className="text-[10px] lg:text-xs text-gray-500">Accredited</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className={` bg-orange-100 rounded-lg flex items-center justify-center md:mb-1 ${isScrolled ? 'md:w-12 md:h-12 *:*:text-base' : 'md:w-14 md:h-14'}`}>
                      <div className="text-orange-600 font-bold text-xs text-center">
                        <div className="text-xl">2646</div>
                      </div>
                    </div>
                    <span className="text-[10px] lg:text-xs text-gray-500 leading-tight">TNEA CODE</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className={` bg-purple-100 rounded-lg flex items-center justify-center md:mb-1 ${isScrolled ? 'md:w-12 md:h-12 *:*:text-2xl' : 'md:w-14 md:h-14'}`}>
                      <a href="#virtual-tour" className="text-purple-600 font-bold text-xs text-center">
                        <MdSlowMotionVideo className="text-4xl" />
                      </a>
                    </div>
                    <a href="#virtual-tour" className="text-[10px] lg:text-xs text-gray-500">Virtual Tour</a>
                  </div>
                </div>
              </>
              {/* )} */}
              <div className={`flex ${isScrolled ? 'flex-col space-y-2 space-x-2' : 'flex-col space-y-2 hidden md:flex md:flex-col '}`}>

                <Link to={"/online-registration"} className={`bg-red-600 text-nowrap w-full h-full text-white rounded-lg font-medium hover:bg-red-700 transition-colors cursor-pointer ${isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'}`}>
                  Apply Now
                </Link>

                <Link to={"/online-registration"} className={`bg-blue-600 text-nowrap text-white rounded-lg font-medium cursor-pointer hover:bg-blue-700 transition-colors ${isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'}`}>
                  Admission 2025
                </Link>
              </div>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="pl-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors mobile-menu-container"
              >
                <FaBars size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4">
            <nav className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-2.5'}`}>
              <div className="flex items-center space-x-2"> {/* Increased space-x-6 for better spacing */}
                {navLinks.map((link, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={link.path || '#'}
                      className={`text-white hover:text-yellow-300 rounded-lg font-medium transition-colors flex items-center space-x-1 whitespace-nowrap ${isScrolled ? 'px-1 py-1.5 text-sm' : 'px-2 py-2 text-sm'}`} // Added whitespace-nowrap
                    >
                      <span>{link.name}</span>
                      {link.children && <FaChevronDown size={10} />}
                    </Link>

                    {link.children && activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                        <div className="py-1">
                          {link.children.map((child, childIndex) => (
                            <div key={childIndex} className="relative group/child">
                              <Link
                                to={child.path || '#'}
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm border-b border-gray-100 last:border-b-0 flex items-center justify-between"
                              >
                                <span>{child.name}</span>
                                {child.children && <FaChevronRight size={12} />}
                              </Link>

                              {child.children && (
                                <div className="absolute left-full top-0 ml-1 w-96 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-200 z-50">
                                  <div className="py-2 max-h-96 overflow-y-auto">
                                    {child.children.map((subChild, subIndex) => (
                                      <Link
                                        key={subIndex}
                                        to={subChild.path}
                                        className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 text-sm border-b border-gray-100 last:border-b-0"
                                      >
                                        {subChild.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`absolute top-0 right-0 h-full w-80 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 mobile-menu-container ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">T</span>
              </div>
              <span className="text-white font-semibold">Menu</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-yellow-300 p-1"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto max-h-[calc(100vh-210px)]">
            {renderMobileNavItems(navLinks)}
          </div>

          <div className="p-4 border-t border-gray-200 space-y-3">
            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Apply Now
            </button>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Admission 2025
            </button>
          </div>
        </div>
      </div>

      {location !== '/' && (
        <div className={`transition-all duration-300 ${isScrolled ? 'h-14 md:h-32 lg:h-44' : 'h-14 md:h-32 lg:h-44'}`}></div>
      )}
    </>
  );
}