// export default function Tableheadpanel(props){
//   const {newform,setglobalfilter}=props;
//     return(
//         <div className="items-center justify-between px-6 py-4 space-y-2 lg:flex lg:space-y-0 ">
//             <div>
//               <h2 className="mx-1 text-xl font-semibold text-gray-800 lg:mx-0">
//                Hookups
//               </h2>
//             </div>

//             <div>
//               <div className="inline-flex gap-x-2">
//                  <input type="input" placeholder="Search..." className="px-4 py-2 border outline-none rounded-xl" onChange={(e)=>setglobalfilter(e.target.value)} />
//                 <button onClick={newform} className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-lg bg-secondary gap-x-2 hover:bg-primary disabled:opacity-50 disabled:pointer-events-none">
//                   <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                     <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                   </svg>
//                  <span className="hidden md:block">Add Hooks</span> 
//                 </button>
//               </div>
//             </div>
//           </div>
//     )
// }

import { useState } from 'react';

export default function Tableheadpanel(props) {
  const { newform, setglobalfilter, setActiveTab, activeTab } = props;
  const [searchValue, setSearchValue] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Clear search when changing tabs
    setSearchValue('');
    setglobalfilter('');
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setglobalfilter(e.target.value);
  };

  // Define tabs
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'Departments', label: 'Departments' },
    { id: 'Faculties', label: 'Faculties' },
    { id: 'Labs', label: 'Labs' },


  ];

  return (
    <div className="px-6 py-4 space-y-4">
      {/* Header with title and add button */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Hookups</h2>
        <div className="inline-flex gap-x-2">
          <input 
            type="input" 
            placeholder="Search..." 
            className="px-4 py-2 border outline-none rounded-xl"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button 
            onClick={newform} 
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white border border-transparent rounded-lg bg-green-500 gap-x-2 hover:bg-primary disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="hidden md:block">Add Hooks</span>
          </button>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id 
                  ? 'border-secondary text-secondary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}