// // import { NavLink } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import useAuth from "../../shared/services/store/useAuth";

// // export default function Sidebar() {
// //   const { userdetails } = useAuth();
// //   const [departmentDropdownOpen, setDepartmentDropdownOpen] = useState(false);
// //   const [heroDropdownOpen, setheroDropdownOpen] = useState(false);


// // // Optional: Close dropdown when clicking outside
// // useEffect(() => {
// //   const handleClickOutside = (event) => {
// //     if (!event.target.closest('.relative')) {
// //       setDepartmentDropdownOpen(false);
// //     }
// //   };

// //   document.addEventListener('click', handleClickOutside);
// //   return () => document.removeEventListener('click', handleClickOutside);
// // }, []);
// //   return (
// //     <>
// //     <div className="sticky inset-x-0 top-0 z-20 px-4 bg-white border-y sm:px-6 md:px-8 lg:hidden">
// //       <div className="flex items-center py-4">
// //         <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
// //           <span className="sr-only">Toggle Navigation</span>
// //           <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
// //         </button>

// //         <ol className="flex items-center ms-3 whitespace-nowrap" aria-label="Breadcrumb">
// //           <li className="flex items-center text-sm text-gray-800">
// //             Menu
// //             <svg className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// //               <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
// //             </svg>
// //           </li>
// //           <li className="text-sm font-semibold text-gray-800 truncate" aria-current="page">
// //             Dashboard
// //           </li>
// //         </ol>
// //       </div>
// //     </div>
// //       <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gradient-to-b rounded-xl m-3 from-purple-600 to-purple-700 border pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
// //         {/* <div className="px-6">
// //           <a className="flex text-xl font-semibold" href="#" aria-label="Brand">
// //             <img src="/images/logo-animation.gif" alt="" className="object-cover p-2 bg-white rounded-lg " />
// //           </a>
// //         </div> */}
// //         <nav className="flex flex-col flex-wrap w-full p-6 hs-accordion-group" data-hs-accordion-always-open>
// //           <ul className="space-y-1.5">
         
// //             <li>
// //               <NavLink to={'/dashboard/home'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? 'bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //               <i className="fi fi-sr-home"></i>Home
// //               </NavLink>
// //             </li>

// //             {/* <li>
// //               <NavLink to={'/dashboard/hookups'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //               <i className="fi fi-rs-megaphone"></i> Hookups
// //               </NavLink>
// //             </li> */}

// //             <li>
// //               <NavLink to={'/dashboard/notifications'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //               <i className="fi fi-sr-ad"></i> Notifications
// //               </NavLink>
// //             </li>
            
// //              <li className="relative">
// //               {/* Department Dropdown Toggle */}
// //               <button 
// //                 onClick={() => setheroDropdownOpen(!heroDropdownOpen)}
// //                 className="flex items-center justify-between w-full gap-x-3.5 py-2 px-2.5 text-white text-sm hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd] hover:shadow"
// //               >
// //                 <div className="flex items-center gap-x-3.5">
// //                   <i className="fi fi-sr-ad"></i> 
// //                   <span>Hero Section</span>
// //                 </div>
// //                 <i className={`fi fi-rr-angle-small-down transition-transform duration-200 ${heroDropdownOpen ? 'rotate-180' : ''}`}></i>
// //               </button>
              
// //               {/* Dropdown Menu */}
// //               {heroDropdownOpen && (
// //                 <ul className="mt-2 ml-4 space-y-1">
// //                   <li>
// //                     <NavLink to={'/dashboard/hero/herobanner'} className={({ isActive }) => `flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? 'bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : 'text-white'} text-sm hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd] hover:shadow`}>
// //                       <i className="fi fi-sr-plus"></i> Hero Banner
// //                     </NavLink>
// //                   </li>
// //                   <li>
// //                     <NavLink  to={'/dashboard/hero/latest-updates'}  className={({ isActive }) => `flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? 'bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : 'text-white'} text-sm hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd] hover:shadow`}>
// //                       <i className="fi fi-sr-overview"></i> Latest Updates Photos
// //                     </NavLink>
// //                   </li>
// //       <li>
// //                     <NavLink  to={'/dashboard/hero/welcome-popup'}  className={({ isActive }) => `flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? 'bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : 'text-white'} text-sm hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd] hover:shadow`}>
// //                       <i className="fi fi-sr-overview"></i> Welcome Popup
// //                     </NavLink>
// //                   </li>
                
// //                 </ul>
// //               )}
// //             </li>
    
// //              <li className="relative">
// //               {/* Department Dropdown Toggle */}
// //               <button 
// //                 onClick={() => setDepartmentDropdownOpen(!departmentDropdownOpen)}
// //                 className="flex items-center justify-between w-full gap-x-3.5 py-2 px-2.5 text-white text-sm hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd] hover:shadow"
// //               >
// //                 <div className="flex items-center gap-x-3.5">
// //                   <i className="fi fi-sr-ad"></i> 
// //                   <span>Department</span>
// //                 </div>
// //                 <i className={`fi fi-rr-angle-small-down transition-transform duration-200 ${departmentDropdownOpen ? 'rotate-180' : ''}`}></i>
// //               </button>
              
// //               {/* Dropdown Menu */}
// //               {departmentDropdownOpen && (
// //                 <ul className="mt-2 ml-4 space-y-1">
// //                   <li>
// //                     <NavLink to={'/dashboard/department/department-details'} className={({ isActive }) => `flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? 'bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : 'text-white'} text-sm hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd] hover:shadow`}>
// //                       <i className="fi fi-sr-plus"></i> Add Department
// //                     </NavLink>
// //                   </li>
// //                   <li>
// //                     <NavLink  to={'/dashboard/department/department-overview'}  className={({ isActive }) => `flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? 'bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : 'text-white'} text-sm hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd] hover:shadow`}>
// //                       <i className="fi fi-sr-overview"></i> Department Overview
// //                     </NavLink>
// //                   </li>

                
// //                 </ul>
// //               )}
// //             </li>
// //             <li>
// //                 <NavLink to={'/dashboard/faculties'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //                 <i className="fi fi-sr-order-history"></i>Faculties
// //                 </NavLink>
// //             </li>
// //                  <li>
// //                 <NavLink to={'/dashboard/labs'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //                 <i className="fi fi-sr-order-history"></i>Labs & Facilities
// //                 </NavLink>
// //             </li>
// //            <li>
// //                 <NavLink to={'/dashboard/committee'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //                 <i className="fi fi-sr-order-history"></i>Committee
// //                 </NavLink>
// //             </li>
// //               <li>
// //                 <NavLink to={'/dashboard/cells'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //                 <i className="fi fi-sr-order-history"></i>Cells
// //                 </NavLink>
// //             </li>
// //                  <li>
// //                 <NavLink to={'/dashboard/naac'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //                 <i className="fi fi-sr-order-history"></i>Naac
// //                 </NavLink>
// //             </li>
// //                    {/* <li>
// //                 <NavLink to={'/dashboard/gallery'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //                 <i className="fi fi-sr-order-history"></i>Gallery
// //                 </NavLink>
// //             </li> */}

// //                 <li>
// //                 <NavLink to={'/dashboard/college-gallery'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //                 <i className="fi fi-sr-order-history"></i>College Gallery
// //                 </NavLink>
// //             </li>
// //              <li>
// //                 <NavLink to={'/dashboard/additional-gallery'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //                 <i className="fi fi-sr-order-history"></i>Additional Gallery
// //                 </NavLink>
// //             </li>
// //               <li>
// //                 <NavLink to={'/dashboard/news-and-events'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //                 <i className="fi fi-sr-order-history"></i>News & Events
// //                 </NavLink>
// //             </li>
// //             <li>
// //               <NavLink to={'/dashboard/settings'} className={({ isActive }) => (`flex items-center gap-x-3.5 py-2 px-2.5 ${isActive ? ' bg-gradient-to-tr from-[#fffffffd] to-[#fff] text-secondary shadow' : ' text-white'}  text-sm  hover:text-black rounded-lg hover:bg-gradient-to-tr hover:from-[#fffffffd] hover:to-[#fffffffd]  hover:shadow`)}>
// //               <i className="fi fi-rr-settings"></i> Settings
// //               </NavLink>
// //             </li>
     
              
// //           </ul>
// //         </nav>
// //       </div>
// //       </>
// //   )
// // }


// import { NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
// import useAuth from "../../shared/services/store/useAuth";
// import { Home, Bell, Users, Building, Folder, FileText, Image, Calendar, Settings, ChevronDown, Menu } from "lucide-react";

// export default function Sidebar() {
//   const { userdetails } = useAuth();
//   const [departmentDropdownOpen, setDepartmentDropdownOpen] = useState(false);
//   const [heroDropdownOpen, setHeroDropdownOpen] = useState(false);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.relative')) {
//         setDepartmentDropdownOpen(false);
//         setHeroDropdownOpen(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   return (
//     <>
//       {/* Mobile Toggle and Breadcrumb */}
//       <div className="sticky top-0 z-30 px-4 bg-white border-y sm:px-6 md:px-8 lg:hidden">
//         <div className="flex items-center py-4">
//           <button
//             type="button"
//             className="text-gray-500 hover:text-gray-600"
//             data-hs-overlay="#application-sidebar"
//             aria-controls="application-sidebar"
//             aria-label="Toggle navigation"
//           >
//             <span className="sr-only">Toggle Navigation</span>
//             <Menu className="size-4" />
//           </button>

//           <ol className="flex items-center ms-3 whitespace-nowrap" aria-label="Breadcrumb">
//             <li className="flex items-center text-sm text-gray-800">
//               Menu
//               <svg
//                 className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//               </svg>
//             </li>
//             <li className="text-sm font-semibold text-gray-800 truncate" aria-current="page">
//               Dashboard
//             </li>
//           </ol>
//         </div>
//       </div>

//       {/* Sidebar */}
//       <div
//         id="application-sidebar"
//         className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gradient-to-b from-purple-700 to-indigo-800 rounded-xl m-3 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
//       >
//         <nav className="flex flex-col flex-wrap w-full p-6">
//           <ul className="space-y-2">
//             <li>
//               <NavLink
//                 to={'/dashboard/home'}
//                 className={({ isActive }) =>
//                   `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive
//                       ? 'bg-white text-purple-800 shadow-lg'
//                       : 'text-white hover:bg-white/10 hover:text-white'
//                   }`
//                 }
//               >
//                 <Home className="w-5 h-5" />
//                 Home
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to={'/dashboard/notifications'}
//                 className={({ isActive }) =>
//                   `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive
//                       ? 'bg-white text-purple-800 shadow-lg'
//                       : 'text-white hover:bg-white/10 hover:text-white'
//                   }`
//                 }
//               >
//                 <Bell className="w-5 h-5" />
//                 Notifications
//               </NavLink>
//             </li>

//             <li className="relative">
//               <button
//                 onClick={() => setHeroDropdownOpen(!heroDropdownOpen)}
//                 className="flex items-center justify-between w-full gap-x-3 py-3 px-4 text-sm font-medium text-white rounded-lg hover:bg-white/10 transition-all duration-200"
//               >
//                 <div className="flex items-center gap-x-3">
//                   <Image className="w-5 h-5" />
//                   <span>Hero Section</span>
//                 </div>
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform duration-200 ${heroDropdownOpen ? 'rotate-180' : ''}`}
//                 />
//               </button>

//               {heroDropdownOpen && (
//                 <ul className="mt-2 ml-6 space-y-1">
//                   <li>
//                     <NavLink
//                       to={'/dashboard/hero/herobanner'}
//                       className={({ isActive }) =>
//                         `flex items-center gap-x-3 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                           isActive
//                             ? 'bg-white text-purple-800 shadow-lg'
//                             : 'text-white hover:bg-white/10 hover:text-white'
//                         }`
//                       }
//                     >
//                       <Image className="w-5 h-5" />
//                       Hero Banner
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to={'/dashboard/hero/latest-updates'}
//                       className={({ isActive }) =>
//                         `flex items-center gap-x-3 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                           isActive
//                             ? 'bg-white text-purple-800 shadow-lg'
//                             : 'text-white hover:bg-white/10 hover:text-white'
//                         }`
//                       }
//                     >
//                       <Image className="w-5 h-5" />
//                       Latest Updates Photos
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to={'/dashboard/hero/welcome-popup'}
//                       className={({ isActive }) =>
//                         `flex items-center gap-x-3 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                           isActive
//                             ? 'bg-white text-purple-800 shadow-lg'
//                             : 'text-white hover:bg-white/10 hover:text-white'
//                         }`
//                       }
//                     >
//                       <Image className="w-5 h-5" />
//                       Welcome Popup
//                     </NavLink>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li className="relative">
//               <button
//                 onClick={() => setDepartmentDropdownOpen(!departmentDropdownOpen)}
//                 className="flex items-center justify-between w-full gap-x-3 py-3 px-4 text-sm font-medium text-white rounded-lg hover:bg-white/10 transition-all duration-200"
//               >
//                 <div className="flex items-center gap-x-3">
//                   <Building className="w-5 h-5" />
//                   <span>Department</span>
//                 </div>
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform duration-200 ${departmentDropdownOpen ? 'rotate-180' : ''}`}
//                 />
//               </button>

//               {departmentDropdownOpen && (
//                 <ul className="mt-2 ml-6 space-y-1">
//                   <li>
//                     <NavLink
//                       to={'/dashboard/department/department-details'}
//                       className={({ isActive }) =>
//                         `flex items-center gap-x-3 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                           isActive
//                             ? 'bg-white text-purple-800 shadow-lg'
//                             : 'text-white hover:bg-white/10 hover:text-white'
//                         }`
//                       }
//                     >
//                       <Folder className="w-5 h-5" />
//                       Add Department
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to={'/dashboard/department/department-overview'}
//                       className={({ isActive }) =>
//                         `flex items-center gap-x-3 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                           isActive
//                             ? 'bg-white text-purple-800 shadow-lg'
//                             : 'text-white hover:bg-white/10 hover:text-white'
//                         }`
//                       }
//                     >
//                       <FileText className="w-5 h-5" />
//                       Department Overview
//                     </NavLink>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li>
//               <NavLink
//                 to={'/dashboard/faculties'}
//                 className={({ isActive }) =>
//                   `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive
//                       ? 'bg-white text-purple-800 shadow-lg'
//                       : 'text-white hover:bg-white/10 hover:text-white'
//                   }`
//                 }
//               >
//                 <Users className="w-5 h-5" />
//                 Faculties
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to={'/dashboard/labs'}
//                 className={({ isActive }) =>
//                   `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive
//                       ? 'bg-white text-purple-800 shadow-lg'
//                       : 'text-white hover:bg-white/10 hover:text-white'
//                   }`
//                 }
//               >
//                 <Building className="w-5 h-5" />
//                 Labs & Facilities
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to={'/dashboard/committee'}
//                 className={({ isActive }) =>
//                   `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive
//                       ? 'bg-white text-purple-800 shadow-lg'
//                       : 'text-white hover:bg-white/10 hover:text-white'
//                   }`
//                 }
//               >
//                 <Users className="w-5 h-5" />
//                 Committee
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to={'/dashboard/cells'}
//                 className={({ isActive }) =>
//                   `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive
//                       ? 'bg-white text-purple-800 shadow-lg'
//                       : 'text-white hover:bg-white/10 hover:text-white'
//                   }`
//                 }
//               >
//                 <Users className="w-5 h-5" />
//                 Cells
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to={'/dashboard/naac'}
//                 className={({ isActive }) =>
//                   `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive
//                       ? 'bg-white text-purple-800 shadow-lg'
//                       : 'text-white hover:bg-white/10 hover:text-white'
//                   }`
//                 }
//               >
//                 <FileText className="w-5 h-5" />
//                 Naac
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to={'/dashboard/college-gallery'}
//                 className={({ isActive }) =>
//                   `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive
//                       ? 'bg-white text-purple-800 shadow-lg'
//                       : 'text-white hover:bg-white/10 hover:text-white'
//                   }`
//                 }
//               >
//                 <Image className="w-5 h-5" />
//                 College Gallery
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to={'/dashboard/additional-gallery'}
//                 className={({ isActive }) =>
//                   `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive
//                       ? 'bg-white text-purple-800 shadow-lg'
//                       : 'text-white hover:bg-white/10 hover:text-white'
//                   }`
//                 }
//               >
//                 <Image className="w-5 h-5" />
//                 Additional Gallery
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to={'/dashboard/news-and-events'}
//                 className={({ isActive }) =>
//                   `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive
//                       ? 'bg-white text-purple-800 shadow-lg'
//                       : 'text-white hover:bg-white/10 hover:text-white'
//                   }`
//                 }
//               >
//                 <Calendar className="w-5 h-5" />
//                 News & Events
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to={'/dashboard/settings'}
//                 className={({ isActive }) =>
//                   `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive
//                       ? 'bg-white text-purple-800 shadow-lg'
//                       : 'text-white hover:bg-white/10 hover:text-white'
//                   }`
//                 }
//               >
//                 <Settings className="w-5 h-5" />
//                 Settings
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../shared/services/store/useAuth";
import { Home, Bell, Users, Building, Folder, FileText, Image, Calendar, Settings, ChevronDown, Menu } from "lucide-react";

export default function Sidebar() {
  const { userdetails } = useAuth();
  const [departmentDropdownOpen, setDepartmentDropdownOpen] = useState(false);
  const [heroDropdownOpen, setHeroDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        setDepartmentDropdownOpen(false);
        setHeroDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      {/* Mobile Toggle and Breadcrumb */}
      <div className="sticky top-0 z-10 px-4 bg-white border-y sm:px-6 md:px-8 lg:hidden">
        <div className="flex items-center py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <Menu className="size-4" />
          </button>

          <ol className="flex items-center ms-3 whitespace-nowrap" aria-label="Breadcrumb">
            <li className="flex items-center text-sm text-gray-800">
              Menu
              <svg
                className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </li>
            <li className="text-sm font-semibold text-gray-800 truncate" aria-current="page">
              Dashboard
            </li>
          </ol>
        </div>
      </div>

      {/* Sidebar */}
      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-20 w-64 bg-gradient-to-b from-purple-700 to-indigo-800 rounded-xl m-3 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <nav className="flex flex-col flex-wrap w-full p-6">
          <ul className="space-y-2">
            <li>
              <NavLink
                to={'/dashboard/home'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Home className="w-5 h-5" />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/dashboard/notifications'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Bell className="w-5 h-5" />
                Notifications
              </NavLink>
            </li>

            <li className="relative">
              <button
                onClick={() => setHeroDropdownOpen(!heroDropdownOpen)}
                className="flex items-center justify-between w-full gap-x-3 py-3 px-4 text-sm font-medium text-white rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <div className="flex items-center gap-x-3">
                  <Image className="w-5 h-5" />
                  <span>Hero Section</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${heroDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {heroDropdownOpen && (
                <ul className="mt-2 ml-6 space-y-1">
                  <li>
                    <NavLink
                      to={'/dashboard/hero/herobanner'}
                      className={({ isActive }) =>
                        `flex items-center gap-x-3 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-white text-purple-800 shadow-lg'
                            : 'text-white hover:bg-white/10 hover:text-white'
                        }`
                      }
                    >
                      <Image className="w-5 h-5" />
                      Hero Banner
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'/dashboard/hero/latest-updates'}
                      className={({ isActive }) =>
                        `flex items-center gap-x-3 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-white text-purple-800 shadow-lg'
                            : 'text-white hover:bg-white/10 hover:text-white'
                        }`
                      }
                    >
                      <Image className="w-5 h-5" />
                      Latest Updates Photos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'/dashboard/hero/welcome-popup'}
                      className={({ isActive }) =>
                        `flex items-center gap-x-3 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-white text-purple-800 shadow-lg'
                            : 'text-white hover:bg-white/10 hover:text-white'
                        }`
                      }
                    >
                      <Image className="w-5 h-5" />
                      Welcome Popup
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative">
              <button
                onClick={() => setDepartmentDropdownOpen(!departmentDropdownOpen)}
                className="flex items-center justify-between w-full gap-x-3 py-3 px-4 text-sm font-medium text-white rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <div className="flex items-center gap-x-3">
                  <Building className="w-5 h-5" />
                  <span>Department</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${departmentDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {departmentDropdownOpen && (
                <ul className="mt-2 ml-6 space-y-1">
                  <li>
                    <NavLink
                      to={'/dashboard/department/department-details'}
                      className={({ isActive }) =>
                        `flex items-center gap-x-3 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-white text-purple-800 shadow-lg'
                            : 'text-white hover:bg-white/10 hover:text-white'
                        }`
                      }
                    >
                      <Folder className="w-5 h-5" />
                      Add Department
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'/dashboard/department/department-overview'}
                      className={({ isActive }) =>
                        `flex items-center gap-x-3 py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-white text-purple-800 shadow-lg'
                            : 'text-white hover:bg-white/10 hover:text-white'
                        }`
                      }
                    >
                      <FileText className="w-5 h-5" />
                      Department Overview
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to={'/dashboard/faculties'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Users className="w-5 h-5" />
                Faculties
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/dashboard/labs'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Building className="w-5 h-5" />
                Labs & Facilities
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/dashboard/committee'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Users className="w-5 h-5" />
                Committee
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/dashboard/cells'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Users className="w-5 h-5" />
                Cells
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/dashboard/naac'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <FileText className="w-5 h-5" />
                Naac
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/dashboard/college-gallery'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Image className="w-5 h-5" />
                College Gallery
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/dashboard/additional-gallery'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Image className="w-5 h-5" />
                Additional Gallery
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/dashboard/news-and-events'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Calendar className="w-5 h-5" />
                News & Events
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'/dashboard/online-reg-forms'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Image className="w-5 h-5" />
                Online Registrations
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to={'/dashboard/settings'}
                className={({ isActive }) =>
                  `flex items-center gap-x-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-purple-800 shadow-lg'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Settings className="w-5 h-5" />
                Settings
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
}