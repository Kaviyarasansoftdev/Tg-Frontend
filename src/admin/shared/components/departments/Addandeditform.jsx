// import { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Plus, X, Upload, Users, Award, BookOpen, Calendar, Mail, Phone, Save, ArrowLeft, Building, Target, Eye, FileText, BarChart3 } from 'lucide-react';
// import toast from 'react-hot-toast';
// import { savecategory, updatecategory } from '../../services/apicategory/apicategory';
// import { savedepartmentoverview, updatedepartmentoverview } from '../../services/apidepartment/apidepartmentoverview';
// import { getalldepartmentname } from '../../services/apidepartment/apidepartmentdetails';
// import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';

// export default function DepartmentAddEdit() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { formdata: initialFormdata = {}, imageDataUrl: initialImageDataUrl = null } = location.state || {};

//   const [departmentData, setDepartmentData] = useState({});
//   const [imageDataUrl, setImageDataUrl] = useState(initialImageDataUrl);

//   useEffect(() => {
//     if (initialFormdata && Object.keys(initialFormdata).length > 0) {
//       setDepartmentData(prev => ({
//         ...prev,
//         ...initialFormdata,
//         Features: initialFormdata.Features || [{ title: '', description: '' }],
//         Programs: initialFormdata.Programs || [{ level: 'Undergraduate', degree: '', duration: '', description: '', highlights: [''] }],
//         Stats: initialFormdata.Stats && initialFormdata.Stats.length > 0 ? { ...initialFormdata.Stats[0] } : { students: '', faculty: '', labs: '', projects: '' }
//       }));
      
//       // Set initial image preview if image exists
//       if (initialFormdata.Image && typeof initialFormdata.Image === 'string') {
//         const fullImageUrl = `${apiurl()}/${initialFormdata.Image}`;
//         console.log('Setting image URL:', fullImageUrl);
//         setImageDataUrl(fullImageUrl);
//       }
//     } else {
//       setDepartmentData({
//         Department_id: '',
//         Department_Description: '',
//         Department_Vision: '',
//         Department_Mission: '',
//         Image: null,
//         Stats: { students: '', faculty: '', labs: '', projects: '' },
//         Features: [{ title: '', description: '' }],
//         Programs: [{ level: 'Undergraduate', degree: '', duration: '', description: '', highlights: [''] }],
//         Status: 'Inactive'
//       });
//     }
//   }, [initialFormdata]);

//   useEffect(() => {
//     fetchDepartments();
//   }, []);

//   const fetchDepartments = async () => {
//     try {
//       setLoadingDepartments(true);
//       const response = await getalldepartmentname();
//       if (response && response.data) {
//         setDepartmentOptions(response.data);
//       } else if (Array.isArray(response)) {
//         setDepartmentOptions(response);
//       }
//     } catch (error) {
//       console.error('Error fetching departments:', error);
//       toast.error('Failed to load departments');
//     } finally {
//       setLoadingDepartments(false);
//     }
//   };

//   const handleDepartmentChange = (field, value) => {
//     if (field === 'Image' && value) {
//       const reader = new FileReader();
//       reader.onload = (eve) => {
//         setImageDataUrl(eve.target.result);
//         setDepartmentData(prev => ({ ...prev, [field]: value }));
//       };
//       reader.readAsDataURL(value);
//     } else if (field === 'Department_id' && value) {
//       const selectedDept = departmentOptions.find(dept => dept._id === value);
//       setDepartmentData(prev => ({
//         ...prev,
//         Department_id: value,
//         Department_shortName: selectedDept ? selectedDept.Department_shortName : '',
//         Department_established: selectedDept ? selectedDept.Department_established : ''
//       }));
//     } else {
//       setDepartmentData(prev => ({ ...prev, [field]: value }));
//     }
//   };

//   const handleNestedChange = (section, index, field, value) => {
//     setDepartmentData(prev => {
//       const updatedData = { ...prev };
//       updatedData[section] = updatedData[section] || [];
//       updatedData[section][index] = updatedData[section][index] || {};
//       updatedData[section][index][field] = value;
//       return updatedData;
//     });
//   };

//   const handleStatsChange = (field, value) => {
//     setDepartmentData(prev => ({
//       ...prev,
//       Stats: { ...prev.Stats, [field]: value }
//     }));
//   };

//   const addItem = (section) => {
//     const newItem = getNewItem(section);
//     setDepartmentData(prev => ({
//       ...prev,
//       [section]: [...(prev[section] || []), newItem]
//     }));
//   };

//   const removeItem = (section, index) => {
//     setDepartmentData(prev => ({
//       ...prev,
//       [section]: (prev[section] || []).filter((_, i) => i !== index)
//     }));
//   };

//   const getNewItem = (section) => {
//     switch (section) {
//       case 'Features':
//         return { title: '', description: '' };
//       case 'Programs':
//         return { level: 'Undergraduate', degree: '', duration: '', description: '', highlights: [''] };
//       default:
//         return {};
//     }
//   };

//   const handleHighlightChange = (programIndex, highlightIndex, value) => {
//     setDepartmentData(prev => {
//       const updatedData = { ...prev };
//       updatedData.Programs = updatedData.Programs || [];
//       updatedData.Programs[programIndex] = updatedData.Programs[programIndex] || { highlights: [] };
//       updatedData.Programs[programIndex].highlights = updatedData.Programs[programIndex].highlights || [];
//       updatedData.Programs[programIndex].highlights[highlightIndex] = value;
//       return updatedData;
//     });
//   };

//   const addHighlight = (programIndex) => {
//     setDepartmentData(prev => {
//       const updatedData = { ...prev };
//       updatedData.Programs = updatedData.Programs || [];
//       updatedData.Programs[programIndex] = updatedData.Programs[programIndex] || { highlights: [] };
//       updatedData.Programs[programIndex].highlights = updatedData.Programs[programIndex].highlights || [];
//       updatedData.Programs[programIndex].highlights.push('');
//       return updatedData;
//     });
//   };

//   const removeHighlight = (programIndex, highlightIndex) => {
//     setDepartmentData(prev => {
//       const updatedData = { ...prev };
//       updatedData.Programs = updatedData.Programs || [];
//       updatedData.Programs[programIndex] = updatedData.Programs[programIndex] || { highlights: [] };
//       updatedData.Programs[programIndex].highlights = updatedData.Programs[programIndex].highlights.filter((_, i) => i !== highlightIndex);
//       return updatedData;
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const formData = new FormData();

//     // Debug: Log the image data before appending
//     console.log('Department Image:', departmentData.Image);
//     console.log('Image instanceof File:', departmentData.Image instanceof File);

//     // Append top-level fields (skip if empty)
//     if (departmentData.Department_id) formData.append('Department_id', departmentData.Department_id);
//     if (departmentData.Department_Description) formData.append('Department_Description', departmentData.Department_Description);
//     if (departmentData.Department_Vision) formData.append('Department_Vision', departmentData.Department_Vision);
//     if (departmentData.Department_Mission) formData.append('Department_Mission', departmentData.Department_Mission);
//     if (departmentData.Status) formData.append('Status', departmentData.Status);
    
//     // Handle main image
//     if (departmentData.Image && departmentData.Image instanceof File) {
//       console.log('Appending image:', departmentData.Image.name, departmentData.Image.size);
//       formData.append('Image', departmentData.Image);
//     } else {
//       console.log('No valid image file to append');
//     }

//     // Append Stats (skip if empty)
//     if (departmentData.Stats?.students) formData.append('Stats[0][students]', departmentData.Stats.students);
//     if (departmentData.Stats?.faculty) formData.append('Stats[0][faculty]', departmentData.Stats.faculty);
//     if (departmentData.Stats?.labs) formData.append('Stats[0][labs]', departmentData.Stats.labs);
//     if (departmentData.Stats?.projects) formData.append('Stats[0][projects]', departmentData.Stats.projects);

//     // Append Features (skip empty features)
//     if (departmentData.Features) {
//       departmentData.Features.forEach((feature, index) => {
//         if (feature.title || feature.description || feature.icon) {
//           if (feature.title) formData.append(`Features[${index}][title]`, feature.title);
//           if (feature.description) formData.append(`Features[${index}][description]`, feature.description);
//           if (feature.icon) formData.append(`Features[${index}][icon]`, feature.icon);
//         }
//       });
//     }

//     // Append Programs (skip empty programs and handle highlights)
//     if (departmentData.Programs) {
//       departmentData.Programs.forEach((program, index) => {
//         if (program.level || program.degree || program.duration || program.description || (program.highlights && program.highlights.length > 0)) {
//           if (program.level) formData.append(`Programs[${index}][level]`, program.level);
//           if (program.degree) formData.append(`Programs[${index}][degree]`, program.degree);
//           if (program.duration) formData.append(`Programs[${index}][duration]`, program.duration);
//           if (program.description) formData.append(`Programs[${index}][description]`, program.description);
//           if (program.highlights) {
//             program.highlights.forEach((highlight, hIndex) => {
//               if (highlight) formData.append(`Programs[${index}][highlights][${hIndex}]`, highlight);
//             });
//           }
//         }
//       });
//     }

//     // Append _id for update
//     if (initialFormdata?._id) {
//       formData.append('_id', initialFormdata._id);
//       console.log('Appended _id for update:', initialFormdata._id);
//     }

//     // Debug: Log FormData contents
//     console.log('FormData contents:');
//     for (let [key, value] of formData.entries()) {
//       console.log(key, value);
//     }

//     try {
//       if (!initialFormdata?._id) {
//         const response = await savedepartmentoverview(formData);
//         console.log('Save response:', response);
//         toast.success('Successfully saved');
//       } else {
//         const response = await updatedepartmentoverview(formData);
//         console.log('Update response:', response);
//         toast.success('Successfully updated');
//       }
//       navigate('/dashboard/department/department-overview');
//     } catch (error) {
//       console.error('Submit error:', error.response?.data || error.message);
//       toast.error('Error saving department');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const [activeSection, setActiveSection] = useState('basic');
//   const [loading, setLoading] = useState(false);
//   const [departmentOptions, setDepartmentOptions] = useState([]);
//   const [loadingDepartments, setLoadingDepartments] = useState(false);

//   const sections = [
//     { id: 'basic', label: 'Basic Info', icon: <Building className="w-5 h-5" />, color: 'blue' },
//     { id: 'features', label: 'Features', icon: <Award className="w-5 h-5" />, color: 'emerald' },
//     { id: 'programs', label: 'Programs', icon: <BookOpen className="w-5 h-5" />, color: 'pink' }
//   ];

//   const getSectionColorClasses = (color, isActive) => {
//     const colorMap = {
//       blue: isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' : 'bg-blue-50 text-blue-700 hover:bg-blue-100',
//       emerald: isActive ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
//       pink: isActive ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25' : 'bg-pink-50 text-pink-700 hover:bg-pink-100'
//     };
//     return colorMap[color] || colorMap.blue;
//   };

//   const getImageSrc = (imageData) => {
//     if (!imageData) return null;
//     if (imageData instanceof File) {
//       return URL.createObjectURL(imageData);
//     }
//     if (typeof imageData === 'string') {
//       if (imageData.startsWith('http')) {
//         return imageData;
//       }
//       return `${apiurl()}/${imageData}`;
//     }
//     return null;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => navigate('/dashboard/department/department-overview')}
//                 className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 Back
//               </button>
//               <div className="h-6 w-px bg-gray-300"></div>
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900">
//                   {initialFormdata?._id ? 'Edit Department Overview' : 'Create New Department Overview'}
//                 </h1>
//                 <p className="text-sm text-gray-500 mt-1">
//                   {initialFormdata?._id ? 'Update department information' : 'Add a new department Overview to your institution'}
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => navigate('/dashboard/department/department-overview')}
//                 className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 disabled={loading}
//                 className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
//               >
//                 <Save className="w-4 h-4" />
//                 {loading ? 'Saving...' : initialFormdata?._id ? 'Update Department' : 'Create Department'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         {/* Top Navigation Tabs */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 overflow-hidden">
//           <div className="flex overflow-x-auto scrollbar-none">
//             {sections.map((section, index) => (
//               <button
//                 key={section.id}
//                 onClick={() => setActiveSection(section.id)}
//                 className={`flex items-center gap-3 px-6 py-4 font-medium transition-all duration-300 border-b-2 whitespace-nowrap relative ${
//                   activeSection === section.id
//                     ? `border-${section.color}-500 text-${section.color}-600 bg-${section.color}-50/50`
//                     : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
//                 }`}
//               >
//                 <div className={`p-1.5 rounded-lg ${getSectionColorClasses(section.color, activeSection === section.id)}`}>
//                   {section.icon}
//                 </div>
//                 <span className="text-sm font-semibold">{section.label}</span>
//                 {activeSection === section.id && (
//                   <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-${section.color}-500`}></div>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <form onSubmit={handleSubmit} className="p-8">
//             {/* Basic Information Section */}
//             {activeSection === 'basic' && (
//               <div className="space-y-8">
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="p-3 bg-blue-100 rounded-xl">
//                     <Building className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
//                     <p className="text-gray-500">Essential details about the department</p>
//                   </div>
//                 </div>

//                 {/* Hero Image Upload */}
//                 <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-6 border border-gray-200">
//                   <label className="block text-lg font-semibold text-gray-800 mb-4">Hero Image</label>
//                   <label className="group relative block w-full h-64 bg-white border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300">
//                     {(departmentData.Image || imageDataUrl) ? (
//                       <div className="relative w-full h-full rounded-2xl overflow-hidden">
//                         <img 
//                           src={getImageSrc(departmentData.Image) || imageDataUrl} 
//                           className="object-cover w-full h-full" 
//                           alt="Hero" 
//                           onError={(e) => {
//                             console.error('Image failed to load:', e.target.src);
//                             e.target.style.display = 'none';
//                           }}
//                         />
//                         <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
//                           <div className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                             <Upload className="w-6 h-6 text-gray-600" />
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="flex flex-col items-center justify-center h-full">
//                         <Upload className="w-12 h-12 text-gray-400 mb-4 group-hover:text-blue-500 transition-colors" />
//                         <p className="text-lg font-medium text-gray-700">Upload Hero Image</p>
//                         <p className="text-sm text-gray-500 mt-2">SVG, PNG, JPG up to 10MB</p>
//                       </div>
//                     )}
//                     <input 
//                       type="file" 
//                       name="Image" 
//                       onChange={(e) => handleDepartmentChange('Image', e.target.files[0])} 
//                       className="hidden" 
//                       accept="image/*"
//                     />
//                   </label>
//                 </div>

//                 {/* Basic Fields */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   <div className="space-y-2">
//                     <label 
//                       htmlFor="Department_id" 
//                       className="text-sm font-semibold text-gray-700 flex items-center gap-2"
//                     >
//                       <Building className="w-4 h-4" />
//                       Department Name *
//                     </label>
//                     <select
//                       id="Department_id"
//                       name="Department_id"
//                       value={departmentData.Department_id || ''}
//                       onChange={(e) => handleDepartmentChange('Department_id', e.target.value)}
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
//                       required
//                       disabled={loadingDepartments}
//                     >
//                       <option value="">
//                         {loadingDepartments ? 'Loading departments...' : 'Select department'}
//                       </option>
//                       {departmentOptions.map((dept, index) => (
//                         <option key={dept._id || index} value={dept._id}>
//                           {dept.Department_name}
//                         </option>
//                       ))}
//                     </select>
//                     {!loadingDepartments && departmentOptions.length === 0 && (
//                       <button
//                         type="button"
//                         onClick={fetchDepartments}
//                         className="text-sm text-blue-600 hover:text-blue-700 mt-1"
//                       >
//                         Retry loading departments
//                       </button>
//                     )}
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-700">Short Name</label>
//                     <input
//                       type="text"
//                       value={departmentData.Department_shortName || ''}
//                       onChange={(e) => handleDepartmentChange('Department_shortName', e.target.value)}
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
//                       placeholder="e.g., CSE"
//                       readOnly
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
//                       <Calendar className="w-4 h-4" />
//                       Established Year
//                     </label>
//                     <input
//                       type="text"
//                       value={departmentData.Department_established || ''}
//                       onChange={(e) => handleDepartmentChange('Department_established', e.target.value)}
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
//                       placeholder="e.g., 1985"
//                       readOnly
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-700">Status</label>
//                     <select
//                       value={departmentData.Status || 'Inactive'}
//                       onChange={(e) => handleDepartmentChange('Status', e.target.value)}
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800"
//                       required
//                     >
//                       <option value="Active">Active</option>
//                       <option value="Inactive">Inactive</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
//                     <FileText className="w-4 h-4" />
//                     Description
//                   </label>
//                   <textarea
//                     value={departmentData.Department_Description || ''}
//                     onChange={(e) => handleDepartmentChange('Department_Description', e.target.value)}
//                     rows="4"
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
//                     placeholder="Brief description of the department..."
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
//                       <Eye className="w-4 h-4" />
//                       Vision
//                     </label>
//                     <textarea
//                       value={departmentData.Department_Vision || ''}
//                       onChange={(e) => handleDepartmentChange('Department_Vision', e.target.value)}
//                       rows="4"
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
//                       placeholder="Department's vision statement..."
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
//                       <Target className="w-4 h-4" />
//                       Mission
//                     </label>
//                     <textarea
//                       value={departmentData.Department_Mission || ''}
//                       onChange={(e) => handleDepartmentChange('Department_Mission', e.target.value)}
//                       rows="4"
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
//                       placeholder="Department's mission statement..."
//                     />
//                   </div>
//                 </div>

//                 {/* Statistics */}
//                 <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="p-2 bg-blue-100 rounded-lg">
//                       <BarChart3 className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-800">Department Statistics</h3>
//                   </div>
//                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//                     <div className="bg-white rounded-xl p-4 border border-blue-100">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">Students</label>
//                       <input
//                         type="text"
//                         value={departmentData.Stats?.students || ''}
//                         onChange={(e) => handleStatsChange('students', e.target.value)}
//                         className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
//                         placeholder="1,200+"
//                       />
//                     </div>
//                     <div className="bg-white rounded-xl p-4 border border-blue-100">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">Faculty</label>
//                       <input
//                         type="text"
//                         value={departmentData.Stats?.faculty || ''}
//                         onChange={(e) => handleStatsChange('faculty', e.target.value)}
//                         className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
//                         placeholder="45"
//                       />
//                     </div>
//                     <div className="bg-white rounded-xl p-4 border border-blue-100">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">Labs</label>
//                       <input
//                         type="text"
//                         value={departmentData.Stats?.labs || ''}
//                         onChange={(e) => handleStatsChange('labs', e.target.value)}
//                         className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
//                         placeholder="12"
//                       />
//                     </div>
//                     <div className="bg-white rounded-xl p-4 border border-blue-100">
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">Projects</label>
//                       <input
//                         type="text"
//                         value={departmentData.Stats?.projects || ''}
//                         onChange={(e) => handleStatsChange('projects', e.target.value)}
//                         className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
//                         placeholder="150+"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Features Section */}
//             {activeSection === 'features' && (
//               <div className="space-y-8">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="p-3 bg-emerald-100 rounded-xl">
//                       <Award className="w-6 h-6 text-emerald-600" />
//                     </div>
//                     <div>
//                       <h2 className="text-2xl font-bold text-gray-900">Department Features</h2>
//                       <p className="text-gray-500">Highlight key features and strengths</p>
//                     </div>
//                   </div>
//                   <button
//                     type="button"
//                     onClick={() => addItem('Features')}
//                     className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-500/25 font-medium"
//                   >
//                     <Plus className="w-4 h-4" />
//                     Add Feature
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   {(departmentData.Features || []).map((feature, index) => (
//                     <div key={index} className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 group">
//                       <button
//                         type="button"
//                         onClick={() => removeItem('Features', index)}
//                         className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
//                       >
//                         <X className="w-4 h-4" />
//                       </button>

//                       <div className="space-y-4">
//                         <div className="space-y-2">
//                           <label className="text-sm font-semibold text-gray-700">Feature Title</label>
//                           <input
//                             type="text"
//                             value={feature.title || ''}
//                             onChange={(e) => handleNestedChange('Features', index, 'title', e.target.value)}
//                             className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
//                             placeholder="Feature title"
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <label className="text-sm font-semibold text-gray-700">Description</label>
//                           <textarea
//                             value={feature.description || ''}
//                             onChange={(e) => handleNestedChange('Features', index, 'description', e.target.value)}
//                             rows="3"
//                             className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
//                             placeholder="Feature description"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Programs Section */}
//             {activeSection === 'programs' && (
//               <div className="space-y-8">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="p-3 bg-pink-100 rounded-xl">
//                       <BookOpen className="w-6 h-6 text-pink-600" />
//                     </div>
//                     <div>
//                       <h2 className="text-2xl font-bold text-gray-900">Academic Programs</h2>
//                       <p className="text-gray-500">Manage academic programs and highlights</p>
//                     </div>
//                   </div>
//                   <button
//                     type="button"
//                     onClick={() => addItem('Programs')}
//                     className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-all duration-200 shadow-lg shadow-pink-500/25 font-medium"
//                   >
//                     <Plus className="w-4 h-4" />
//                     Add Program
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-1 gap-6">
//                   {(departmentData.Programs || []).map((program, index) => (
//                     <div key={index} className="relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 group">
//                       <button
//                         type="button"
//                         onClick={() => removeItem('Programs', index)}
//                         className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
//                       >
//                         <X className="w-4 h-4" />
//                       </button>

//                       <div className="space-y-4">
//                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//                           <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700">Level</label>
//                             <select
//                               value={program.level || 'Undergraduate'}
//                               onChange={(e) => handleNestedChange('Programs', index, 'level', e.target.value)}
//                               className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-gray-800"
//                             >
//                               <option value="Undergraduate">Undergraduate</option>
//                               <option value="Postgraduate">Postgraduate</option>
//                               <option value="Doctoral">Doctoral</option>
//                             </select>
//                           </div>
//                           <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700">Degree</label>
//                             <input
//                               type="text"
//                               value={program.degree || ''}
//                               onChange={(e) => handleNestedChange('Programs', index, 'degree', e.target.value)}
//                               className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
//                               placeholder="e.g., B.Tech in Computer Science"
//                             />
//                           </div>
//                           <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700">Duration</label>
//                             <input
//                               type="text"
//                               value={program.duration || ''}
//                               onChange={(e) => handleNestedChange('Programs', index, 'duration', e.target.value)}
//                               className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
//                               placeholder="e.g., 4 Years"
//                             />
//                           </div>
//                         </div>
//                         <div className="space-y-2">
//                           <label className="text-sm font-semibold text-gray-700">Description</label>
//                           <textarea
//                             value={program.description || ''}
//                             onChange={(e) => handleNestedChange('Programs', index, 'description', e.target.value)}
//                             rows="3"
//                             className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
//                             placeholder="Program description"
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <label className="text-sm font-semibold text-gray-700">Program Highlights</label>
//                           {(program.highlights || []).map((highlight, hIndex) => (
//                             <div key={hIndex} className="flex items-center gap-3 mb-2">
//                               <input
//                                 type="text"
//                                 value={highlight || ''}
//                                 onChange={(e) => handleHighlightChange(index, hIndex, e.target.value)}
//                                 className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
//                                 placeholder="Highlight"
//                               />
//                               <button
//                                 type="button"
//                                 onClick={() => removeHighlight(index, hIndex)}
//                                 className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
//                               >
//                                 <X className="w-4 h-4" />
//                               </button>
//                             </div>
//                           ))}
//                           <button
//                             type="button"
//                             onClick={() => addHighlight(index)}
//                             className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-all duration-200 shadow-lg shadow-pink-500/25 font-medium"
//                           >
//                             <Plus className="w-4 h-4" />
//                             Add Highlight
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Plus, X, Upload, Users, Award, BookOpen, Calendar, Mail, Phone, Save, ArrowLeft, Building, Target, Eye, FileText, BarChart3, FlaskConical, Trophy, Contact, Target as PSOsIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { savecategory, updatecategory } from '../../services/apicategory/apicategory';
import { savedepartmentoverview, updatedepartmentoverview } from '../../services/apidepartment/apidepartmentoverview';
import { getalldepartmentname } from '../../services/apidepartment/apidepartmentdetails';
import apiurl from '../../../../shared/services/apiendpoint/apiendpoint';

export default function DepartmentAddEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  const { formdata: initialFormdata = {}, imageDataUrl: initialImageDataUrl = null } = location.state || {};

  const [departmentData, setDepartmentData] = useState({});
  const [imageDataUrl, setImageDataUrl] = useState(initialImageDataUrl);

  useEffect(() => {
    if (initialFormdata && Object.keys(initialFormdata).length > 0) {
      setDepartmentData(prev => ({
        ...prev,
        ...initialFormdata,
        Features: initialFormdata.Features || [{ title: '', description: '' }],
        Programs: initialFormdata.Programs || [{ level: 'Undergraduate', degree: '', duration: '', description: '', highlights: [''] }],
        Stats: initialFormdata.Stats && initialFormdata.Stats.length > 0 ? { ...initialFormdata.Stats[0] } : { students: '', faculty: '', labs: '', projects: '' },
        ResearchGroups: initialFormdata.ResearchGroups || [{ name: '', description: '' }],
        ResearchActivities: initialFormdata.ResearchActivities || [{ title: '', description: '' }],
        Achievements: initialFormdata.Achievements || [{ title: '', description: '', year: '' }],
        ContactInfo: initialFormdata.ContactInfo || { email: '', phone: '', address: '' },
        PSOs: initialFormdata.PSOs || [{ description: '' }]
      }));
      
      if (initialFormdata.Image && typeof initialFormdata.Image === 'string') {
        const fullImageUrl = `${apiurl()}/${initialFormdata.Image}`;
        console.log('Setting image URL:', fullImageUrl);
        setImageDataUrl(fullImageUrl);
      }
    } else {
      setDepartmentData({
        Department_id: '',
        Department_Description: '',
        Department_Vision: '',
        Department_Mission: '',
        Image: null,
        Stats: { students: '', faculty: '', labs: '', projects: '' },
        Features: [{ title: '', description: '' }],
        Programs: [{ level: 'Undergraduate', degree: '', duration: '', description: '', highlights: [''] }],
        ResearchGroups: [{ name: '', description: '' }],
        ResearchActivities: [{ title: '', description: '' }],
        Achievements: [{ title: '', description: '', year: '' }],
        ContactInfo: { email: '', phone: '', address: '' },
        PSOs: [{ description: '' }],
        Status: 'Inactive'
      });
    }
  }, [initialFormdata]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      setLoadingDepartments(true);
      const response = await getalldepartmentname();
      if (response && response.data) {
        setDepartmentOptions(response.data);
      } else if (Array.isArray(response)) {
        setDepartmentOptions(response);
      }
    } catch (error) {
      console.error('Error fetching departments:', error);
      toast.error('Failed to load departments');
    } finally {
      setLoadingDepartments(false);
    }
  };

  const handleDepartmentChange = (field, value) => {
    if (field === 'Image' && value) {
      const reader = new FileReader();
      reader.onload = (eve) => {
        setImageDataUrl(eve.target.result);
        setDepartmentData(prev => ({ ...prev, [field]: value }));
      };
      reader.readAsDataURL(value);
    } else if (field === 'Department_id' && value) {
      const selectedDept = departmentOptions.find(dept => dept._id === value);
      setDepartmentData(prev => ({
        ...prev,
        Department_id: value,
        Department_shortName: selectedDept ? selectedDept.Department_shortName : '',
        Department_established: selectedDept ? selectedDept.Department_established : ''
      }));
    } else {
      setDepartmentData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleNestedChange = (section, index, field, value) => {
    setDepartmentData(prev => {
      const updatedData = { ...prev };
      updatedData[section] = updatedData[section] || [];
      updatedData[section][index] = updatedData[section][index] || {};
      updatedData[section][index][field] = value;
      return updatedData;
    });
  };

  const handleStatsChange = (field, value) => {
    setDepartmentData(prev => ({
      ...prev,
      Stats: { ...prev.Stats, [field]: value }
    }));
  };

  const handleContactInfoChange = (field, value) => {
    setDepartmentData(prev => ({
      ...prev,
      ContactInfo: { ...prev.ContactInfo, [field]: value }
    }));
  };

  const handlePSOChange = (index, value) => {
    setDepartmentData(prev => {
      const updatedData = { ...prev };
      updatedData.PSOs = updatedData.PSOs || [];
      updatedData.PSOs[index] = updatedData.PSOs[index] || { description: '' };
      updatedData.PSOs[index].description = value;
      return updatedData;
    });
  };

  const addItem = (section) => {
    const newItem = getNewItem(section);
    setDepartmentData(prev => ({
      ...prev,
      [section]: [...(prev[section] || []), newItem]
    }));
  };

  const removeItem = (section, index) => {
    setDepartmentData(prev => ({
      ...prev,
      [section]: (prev[section] || []).filter((_, i) => i !== index)
    }));
  };

  const getNewItem = (section) => {
    switch (section) {
      case 'Features':
        return { title: '', description: '' };
      case 'Programs':
        return { level: 'Undergraduate', degree: '', duration: '', description: '', highlights: [''] };
      case 'ResearchGroups':
        return { name: '', description: '' };
      case 'ResearchActivities':
        return { title: '', description: '' };
      case 'Achievements':
        return { title: '', description: '', year: '' };
      case 'PSOs':
        return { description: '' };
      default:
        return {};
    }
  };

  const handleHighlightChange = (programIndex, highlightIndex, value) => {
    setDepartmentData(prev => {
      const updatedData = { ...prev };
      updatedData.Programs = updatedData.Programs || [];
      updatedData.Programs[programIndex] = updatedData.Programs[programIndex] || { highlights: [] };
      updatedData.Programs[programIndex].highlights = updatedData.Programs[programIndex].highlights || [];
      updatedData.Programs[programIndex].highlights[highlightIndex] = value;
      return updatedData;
    });
  };

  const addHighlight = (programIndex) => {
    setDepartmentData(prev => {
      const updatedData = { ...prev };
      updatedData.Programs = updatedData.Programs || [];
      updatedData.Programs[programIndex] = updatedData.Programs[programIndex] || { highlights: [] };
      updatedData.Programs[programIndex].highlights = updatedData.Programs[programIndex].highlights || [];
      updatedData.Programs[programIndex].highlights.push('');
      return updatedData;
    });
  };

  const removeHighlight = (programIndex, highlightIndex) => {
    setDepartmentData(prev => {
      const updatedData = { ...prev };
      updatedData.Programs = updatedData.Programs || [];
      updatedData.Programs[programIndex] = updatedData.Programs[programIndex] || { highlights: [] };
      updatedData.Programs[programIndex].highlights = updatedData.Programs[programIndex].highlights.filter((_, i) => i !== highlightIndex);
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    console.log('Department Image:', departmentData.Image);
    console.log('Image instanceof File:', departmentData.Image instanceof File);

    if (departmentData.Department_id) formData.append('Department_id', departmentData.Department_id);
    if (departmentData.Department_Description) formData.append('Department_Description', departmentData.Department_Description);
    if (departmentData.Department_Vision) formData.append('Department_Vision', departmentData.Department_Vision);
    if (departmentData.Department_Mission) formData.append('Department_Mission', departmentData.Department_Mission);
    if (departmentData.Status) formData.append('Status', departmentData.Status);
    
    if (departmentData.Image && departmentData.Image instanceof File) {
      console.log('Appending image:', departmentData.Image.name, departmentData.Image.size);
      formData.append('Image', departmentData.Image);
    } else {
      console.log('No valid image file to append');
    }

    if (departmentData.Stats?.students) formData.append('Stats[0][students]', departmentData.Stats.students);
    if (departmentData.Stats?.faculty) formData.append('Stats[0][faculty]', departmentData.Stats.faculty);
    if (departmentData.Stats?.labs) formData.append('Stats[0][labs]', departmentData.Stats.labs);
    if (departmentData.Stats?.projects) formData.append('Stats[0][projects]', departmentData.Stats.projects);

    if (departmentData.Features) {
      departmentData.Features.forEach((feature, index) => {
        if (feature.title || feature.description || feature.icon) {
          if (feature.title) formData.append(`Features[${index}][title]`, feature.title);
          if (feature.description) formData.append(`Features[${index}][description]`, feature.description);
          if (feature.icon) formData.append(`Features[${index}][icon]`, feature.icon);
        }
      });
    }

    if (departmentData.Programs) {
      departmentData.Programs.forEach((program, index) => {
        if (program.level || program.degree || program.duration || program.description || (program.highlights && program.highlights.length > 0)) {
          if (program.level) formData.append(`Programs[${index}][level]`, program.level);
          if (program.degree) formData.append(`Programs[${index}][degree]`, program.degree);
          if (program.duration) formData.append(`Programs[${index}][duration]`, program.duration);
          if (program.description) formData.append(`Programs[${index}][description]`, program.description);
          if (program.highlights) {
            program.highlights.forEach((highlight, hIndex) => {
              if (highlight) formData.append(`Programs[${index}][highlights][${hIndex}]`, highlight);
            });
          }
        }
      });
    }

    if (departmentData.ResearchGroups) {
      departmentData.ResearchGroups.forEach((group, index) => {
        if (group.name || group.description) {
          if (group.name) formData.append(`ResearchGroups[${index}][name]`, group.name);
          if (group.description) formData.append(`ResearchGroups[${index}][description]`, group.description);
        }
      });
    }

    if (departmentData.ResearchActivities) {
      departmentData.ResearchActivities.forEach((activity, index) => {
        if (activity.title || activity.description) {
          if (activity.title) formData.append(`ResearchActivities[${index}][title]`, activity.title);
          if (activity.description) formData.append(`ResearchActivities[${index}][description]`, activity.description);
        }
      });
    }

    if (departmentData.Achievements) {
      departmentData.Achievements.forEach((achievement, index) => {
        if (achievement.title || achievement.description || achievement.year) {
          if (achievement.title) formData.append(`Achievements[${index}][title]`, achievement.title);
          if (achievement.description) formData.append(`Achievements[${index}][description]`, achievement.description);
          if (achievement.year) formData.append(`Achievements[${index}][year]`, achievement.year);
        }
      });
    }

    if (departmentData.ContactInfo) {
      if (departmentData.ContactInfo.email) formData.append('ContactInfo[email]', departmentData.ContactInfo.email);
      if (departmentData.ContactInfo.phone) formData.append('ContactInfo[phone]', departmentData.ContactInfo.phone);
      if (departmentData.ContactInfo.address) formData.append('ContactInfo[address]', departmentData.ContactInfo.address);
    }

    if (departmentData.PSOs) {
      departmentData.PSOs.forEach((pso, index) => {
        if (pso.description) formData.append(`PSOs[${index}][description]`, pso.description);
      });
    }

    if (initialFormdata?._id) {
      formData.append('_id', initialFormdata._id);
      console.log('Appended _id for update:', initialFormdata._id);
    }

    console.log('FormData contents:');
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      if (!initialFormdata?._id) {
        const response = await savedepartmentoverview(formData);
        console.log('Save response:', response);
        toast.success('Successfully saved');
      } else {
        const response = await updatedepartmentoverview(formData);
        console.log('Update response:', response);
        toast.success('Successfully updated');
      }
      navigate('/dashboard/department/department-overview');
    } catch (error) {
      console.error('Submit error:', error.response?.data || error.message);
      toast.error('Error saving department');
    } finally {
      setLoading(false);
    }
  };

  const [activeSection, setActiveSection] = useState('basic');
  const [loading, setLoading] = useState(false);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [loadingDepartments, setLoadingDepartments] = useState(false);

  const sections = [
    { id: 'basic', label: 'Basic Info', icon: <Building className="w-5 h-5" />, color: 'blue' },
    { id: 'features', label: 'Features', icon: <Award className="w-5 h-5" />, color: 'emerald' },
    { id: 'programs', label: 'Programs', icon: <BookOpen className="w-5 h-5" />, color: 'pink' },
    { id: 'research-groups', label: 'Research Groups', icon: <Users className="w-5 h-5" />, color: 'purple' },
    { id: 'research-activities', label: 'Research Activities', icon: <FlaskConical className="w-5 h-5" />, color: 'indigo' },
    { id: 'achievements', label: 'Achievements', icon: <Trophy className="w-5 h-5" />, color: 'yellow' },
    { id: 'contact', label: 'Contact Info', icon: <Contact className="w-5 h-5" />, color: 'teal' },
    { id: 'psos', label: 'PSOs', icon: <PSOsIcon className="w-5 h-5" />, color: 'cyan' }
  ];

  const getSectionColorClasses = (color, isActive) => {
    const colorMap = {
      blue: isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' : 'bg-blue-50 text-blue-700 hover:bg-blue-100',
      emerald: isActive ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
      pink: isActive ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25' : 'bg-pink-50 text-pink-700 hover:bg-pink-100',
      purple: isActive ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25' : 'bg-purple-50 text-purple-700 hover:bg-purple-100',
      indigo: isActive ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
      yellow: isActive ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/25' : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100',
      teal: isActive ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/25' : 'bg-teal-50 text-teal-700 hover:bg-teal-100',
      cyan: isActive ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getImageSrc = (imageData) => {
    if (!imageData) return null;
    if (imageData instanceof File) {
      return URL.createObjectURL(imageData);
    }
    if (typeof imageData === 'string') {
      if (imageData.startsWith('http')) {
        return imageData;
      }
      return `${apiurl()}/${imageData}`;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/dashboard/department/department-overview')}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {initialFormdata?._id ? 'Edit Department Overview' : 'Create New Department Overview'}
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  {initialFormdata?._id ? 'Update department information' : 'Add a new department Overview to your institution'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate('/dashboard/department/department-overview')}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                <Save className="w-4 h-4" />
                {loading ? 'Saving...' : initialFormdata?._id ? 'Update Department' : 'Create Department'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-none">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-3 px-6 py-4 font-medium transition-all duration-300 border-b-2 whitespace-nowrap relative ${
                  activeSection === section.id
                    ? `border-${section.color}-500 text-${section.color}-600 bg-${section.color}-50/50`
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${getSectionColorClasses(section.color, activeSection === section.id)}`}>
                  {section.icon}
                </div>
                <span className="text-sm font-semibold">{section.label}</span>
                {activeSection === section.id && (
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-${section.color}-500`}></div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8">
            {activeSection === 'basic' && (
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
                    <p className="text-gray-500">Essential details about the department</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-6 border border-gray-200">
                  <label className="block text-lg font-semibold text-gray-800 mb-4">Hero Image</label>
                  <label className="group relative block w-full h-64 bg-white border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300">
                    {(departmentData.Image || imageDataUrl) ? (
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <img 
                          src={getImageSrc(departmentData.Image) || imageDataUrl} 
                          className="object-cover w-full h-full" 
                          alt="Hero" 
                          onError={(e) => {
                            console.error('Image failed to load:', e.target.src);
                            e.target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                          <div className="bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Upload className="w-6 h-6 text-gray-600" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        <Upload className="w-12 h-12 text-gray-400 mb-4 group-hover:text-blue-500 transition-colors" />
                        <p className="text-lg font-medium text-gray-700">Upload Hero Image</p>
                        <p className="text-sm text-gray-500 mt-2">SVG, PNG, JPG up to 10MB</p>
                      </div>
                    )}
                    <input 
                      type="file" 
                      name="Image" 
                      onChange={(e) => handleDepartmentChange('Image', e.target.files[0])} 
                      className="hidden" 
                      accept="image/*"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label 
                      htmlFor="Department_id" 
                      className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                    >
                      <Building className="w-4 h-4" />
                      Department Name *
                    </label>
                    <select
                      id="Department_id"
                      name="Department_id"
                      value={departmentData.Department_id || ''}
                      onChange={(e) => handleDepartmentChange('Department_id', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                      required
                      disabled={loadingDepartments}
                    >
                      <option value="">
                        {loadingDepartments ? 'Loading departments...' : 'Select department'}
                      </option>
                      {departmentOptions.map((dept, index) => (
                        <option key={dept._id || index} value={dept._id}>
                          {dept.Department_name}
                        </option>
                      ))}
                    </select>
                    {!loadingDepartments && departmentOptions.length === 0 && (
                      <button
                        type="button"
                        onClick={fetchDepartments}
                        className="text-sm text-blue-600 hover:text-blue-700 mt-1"
                      >
                        Retry loading departments
                      </button>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Short Name</label>
                    <input
                      type="text"
                      value={departmentData.Department_shortName || ''}
                      onChange={(e) => handleDepartmentChange('Department_shortName', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                      placeholder="e.g., CSE"
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Established Year
                    </label>
                    <input
                      type="text"
                      value={departmentData.Department_established || ''}
                      onChange={(e) => handleDepartmentChange('Department_established', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                      placeholder="e.g., 1985"
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Status</label>
                    <select
                      value={departmentData.Status || 'Inactive'}
                      onChange={(e) => handleDepartmentChange('Status', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800"
                      required
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Description
                  </label>
                  <textarea
                    value={departmentData.Department_Description || ''}
                    onChange={(e) => handleDepartmentChange('Department_Description', e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                    placeholder="Brief description of the department..."
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Vision
                    </label>
                    <textarea
                      value={departmentData.Department_Vision || ''}
                      onChange={(e) => handleDepartmentChange('Department_Vision', e.target.value)}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                      placeholder="Department's vision statement..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Mission
                    </label>
                    <textarea
                      value={departmentData.Department_Mission || ''}
                      onChange={(e) => handleDepartmentChange('Department_Mission', e.target.value)}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                      placeholder="Department's mission statement..."
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Department Statistics</h3>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-blue-100">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Students</label>
                      <input
                        type="text"
                        value={departmentData.Stats?.students || ''}
                        onChange={(e) => handleStatsChange('students', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        placeholder="1,200+"
                      />
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-blue-100">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Faculty</label>
                      <input
                        type="text"
                        value={departmentData.Stats?.faculty || ''}
                        onChange={(e) => handleStatsChange('faculty', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        placeholder="45"
                      />
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-blue-100">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Labs</label>
                      <input
                        type="text"
                        value={departmentData.Stats?.labs || ''}
                        onChange={(e) => handleStatsChange('labs', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        placeholder="12"
                      />
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-blue-100">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Projects</label>
                      <input
                        type="text"
                        value={departmentData.Stats?.projects || ''}
                        onChange={(e) => handleStatsChange('projects', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        placeholder="150+"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'features' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-100 rounded-xl">
                      <Award className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Department Features</h2>
                      <p className="text-gray-500">Highlight key features and strengths</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => addItem('Features')}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-500/25 font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    Add Feature
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {(departmentData.Features || []).map((feature, index) => (
                    <div key={index} className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 group">
                      <button
                        type="button"
                        onClick={() => removeItem('Features', index)}
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Feature Title</label>
                          <input
                            type="text"
                            value={feature.title || ''}
                            onChange={(e) => handleNestedChange('Features', index, 'title', e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                            placeholder="Feature title"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Description</label>
                          <textarea
                            value={feature.description || ''}
                            onChange={(e) => handleNestedChange('Features', index, 'description', e.target.value)}
                            rows="3"
                            className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                            placeholder="Feature description"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'programs' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-pink-100 rounded-xl">
                      <BookOpen className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Academic Programs</h2>
                      <p className="text-gray-500">Manage academic programs and highlights</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => addItem('Programs')}
                    className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-all duration-200 shadow-lg shadow-pink-500/25 font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    Add Program
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {(departmentData.Programs || []).map((program, index) => (
                    <div key={index} className="relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 group">
                      <button
                        type="button"
                        onClick={() => removeItem('Programs', index)}
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Level</label>
                            <select
                              value={program.level || 'Undergraduate'}
                              onChange={(e) => handleNestedChange('Programs', index, 'level', e.target.value)}
                              className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-gray-800"
                            >
                              <option value="Undergraduate">Undergraduate</option>
                              <option value="Postgraduate">Postgraduate</option>
                              <option value="Doctoral">Doctoral</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Degree</label>
                            <input
                              type="text"
                              value={program.degree || ''}
                              onChange={(e) => handleNestedChange('Programs', index, 'degree', e.target.value)}
                              className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                              placeholder="e.g., B.Tech in Computer Science"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Duration</label>
                            <input
                              type="text"
                              value={program.duration || ''}
                              onChange={(e) => handleNestedChange('Programs', index, 'duration', e.target.value)}
                              className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                              placeholder="e.g., 4 Years"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Description</label>
                          <textarea
                            value={program.description || ''}
                            onChange={(e) => handleNestedChange('Programs', index, 'description', e.target.value)}
                            rows="3"
                            className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                            placeholder="Program description"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Program Highlights</label>
                          {(program.highlights || []).map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-center gap-3 mb-2">
                              <input
                                type="text"
                                value={highlight || ''}
                                onChange={(e) => handleHighlightChange(index, hIndex, e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                                placeholder="Highlight"
                              />
                              <button
                                type="button"
                                onClick={() => removeHighlight(index, hIndex)}
                                className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => addHighlight(index)}
                            className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-all duration-200 shadow-lg shadow-pink-500/25 font-medium"
                          >
                            <Plus className="w-4 h-4" />
                            Add Highlight
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'research-groups' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Research Groups</h2>
                      <p className="text-gray-500">Manage research groups within the department</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => addItem('ResearchGroups')}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all duration-200 shadow-lg shadow-purple-500/25 font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    Add Research Group
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {(departmentData.ResearchGroups || []).map((group, index) => (
                    <div key={index} className="relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100 group">
                      <button
                        type="button"
                        onClick={() => removeItem('ResearchGroups', index)}
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Group Name</label>
                          <input
                            type="text"
                            value={group.name || ''}
                            onChange={(e) => handleNestedChange('ResearchGroups', index, 'name', e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                            placeholder="e.g., AI Research Lab"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Description</label>
                          <textarea
                            value={group.description || ''}
                            onChange={(e) => handleNestedChange('ResearchGroups', index, 'description', e.target.value)}
                            rows="3"
                            className="w-full px-4 py-3 bg-white border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                            placeholder="Description of the research group"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'research-activities' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-100 rounded-xl">
                      <FlaskConical className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Research Activities</h2>
                      <p className="text-gray-500">Highlight ongoing research activities</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => addItem('ResearchActivities')}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-all duration-200 shadow-lg shadow-indigo-500/25 font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    Add Research Activity
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {(departmentData.ResearchActivities || []).map((activity, index) => (
                    <div key={index} className="relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100 group">
                      <button
                        type="button"
                        onClick={() => removeItem('ResearchActivities', index)}
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Activity Title</label>
                          <input
                            type="text"
                            value={activity.title || ''}
                            onChange={(e) => handleNestedChange('ResearchActivities', index, 'title', e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                            placeholder="e.g., Quantum Computing Research"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Description</label>
                          <textarea
                            value={activity.description || ''}
                            onChange={(e) => handleNestedChange('ResearchActivities', index, 'description', e.target.value)}
                            rows="3"
                            className="w-full px-4 py-3 bg-white border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                            placeholder="Description of the research activity"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'achievements' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-yellow-100 rounded-xl">
                      <Trophy className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
                      <p className="text-gray-500">Showcase department achievements</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => addItem('Achievements')}
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-all duration-200 shadow-lg shadow-yellow-500/25 font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    Add Achievement
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {(departmentData.Achievements || []).map((achievement, index) => (
                    <div key={index} className="relative bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-100 group">
                      <button
                        type="button"
                        onClick={() => removeItem('Achievements', index)}
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Achievement Title</label>
                          <input
                            type="text"
                            value={achievement.title || ''}
                            onChange={(e) => handleNestedChange('Achievements', index, 'title', e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-yellow-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                            placeholder="e.g., Best Research Paper Award"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Description</label>
                          <textarea
                            value={achievement.description || ''}
                            onChange={(e) => handleNestedChange('Achievements', index, 'description', e.target.value)}
                            rows="3"
                            className="w-full px-4 py-3 bg-white border border-yellow-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                            placeholder="Description of the achievement"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Year</label>
                          <input
                            type="text"
                            value={achievement.year || ''}
                            onChange={(e) => handleNestedChange('Achievements', index, 'year', e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-yellow-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                            placeholder="e.g., 2023"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-teal-100 rounded-xl">
                    <Contact className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                    <p className="text-gray-500">Department contact details</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </label>
                      <input
                        type="email"
                        value={departmentData.ContactInfo?.email || ''}
                        onChange={(e) => handleContactInfoChange('email', e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        placeholder="e.g., department@university.edu"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={departmentData.ContactInfo?.phone || ''}
                        onChange={(e) => handleContactInfoChange('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        placeholder="e.g., +1 (123) 456-7890"
                      />
                    </div>
                    <div className="space-y-2 lg:col-span-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Address
                      </label>
                      <textarea
                        value={departmentData.ContactInfo?.address || ''}
                        onChange={(e) => handleContactInfoChange('address', e.target.value)}
                        rows="3"
                        className="w-full px-4 py-3 bg-white border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                        placeholder="Department address..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'psos' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-cyan-100 rounded-xl">
                      <PSOsIcon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Program Specific Outcomes (PSOs)</h2>
                      <p className="text-gray-500">Manage program specific outcomes</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => addItem('PSOs')}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition-all duration-200 shadow-lg shadow-cyan-500/25 font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    Add PSO
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {(departmentData.PSOs || []).map((pso, index) => (
                    <div key={index} className="relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100 group">
                      <button
                        type="button"
                        onClick={() => removeItem('PSOs', index)}
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">PSO {index + 1}</label>
                        <textarea
                          value={pso.description || ''}
                          onChange={(e) => handlePSOChange(index, e.target.value)}
                          rows="3"
                          className="w-full px-4 py-3 bg-white border border-cyan-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                          placeholder="Describe the program specific outcome..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}