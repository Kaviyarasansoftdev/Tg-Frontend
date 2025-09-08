// // import { TabPanel, TabView } from 'primereact/tabview'
// // import React from 'react'

// // export default function Settings(props) {
// //     const { updatebackup, handlechange, formdata, backupNow, acccountdata, handlechange1, updateUser } = props
// //     return (
// //         <TabView>
// //             <TabPanel header="My Account">
// //                 <section className='h-[calc(100vh_-_250px)] flex items-center'>
// //                     <div className="w-full md:max-w-[85rem] mx-auto px-4">

// //                         <div className="grid grid-cols-6 gap-4">
// //                             <div className="col-span-6 md:col-start-2 md:col-span-4">
// //                                 <div className="flex flex-col bg-white border shadow-sm min-h-60 rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
// //                                     <div className='mt-4 text-xl font-semibold text-center'>My Account</div>
// //                                     <div className="flex flex-col items-center justify-center flex-auto p-4">
// //                                         <form onSubmit={updateUser}>
// //                                             <dl className="grid gap-1 sm:grid-cols-3 sm:gap-3">
// //                                                 <dt className="font-semibold sm:col-span-1 dark:text-white">User Name</dt>
// //                                                 <dd className="mb-3 sm:col-span-2 sm:mb-0 dark:text-white">
// //                                                     <input type="text" name="UserName" value={acccountdata.UserName} onChange={handlechange1} className="block w-full max-w-xs px-4 py-3 text-sm border rounded-lg border-neutral-200" disabled />
// //                                                 </dd>

// //                                                 <dt className="font-semibold sm:col-span-1 dark:text-white">Name</dt>
// //                                                 <dd className="mb-3 sm:col-span-2 sm:mb-0 dark:text-white">
// //                                                     <input type="text" name="First_Name" value={acccountdata.First_Name} onChange={handlechange1} className="block w-full max-w-xs px-4 py-3 text-sm border rounded-lg border-neutral-200" />
// //                                                 </dd>

// //                                                 <dt className="font-semibold sm:col-span-1 dark:text-white">Email</dt>
// //                                                 <dd className="mb-3 sm:col-span-2 sm:mb-0 dark:text-white">
// //                                                     <input type="email" name="Email" value={acccountdata.Email} onChange={handlechange1} className="block w-full max-w-xs px-4 py-3 text-sm border rounded-lg border-neutral-200" />
// //                                                 </dd>

// //                                                 <dt className="font-semibold truncate sm:col-span-1 dark:text-white">Mobile Number</dt>
// //                                                 <dd className="mb-3 sm:col-span-2 sm:mb-0 dark:text-white">
// //                                                     <input type="text" name="Mobilenumber" value={acccountdata.Mobilenumber} onChange={handlechange1} className="block w-full max-w-xs px-4 py-3 text-sm border rounded-lg border-neutral-200" />
// //                                                 </dd>

// //                                                 <dt className="font-semibold sm:col-span-1 dark:text-white">Password</dt>
// //                                                 <dd className="mb-3 sm:col-span-2 sm:mb-0 dark:text-white">
// //                                                     <input type="text" name="Password" value={acccountdata.Password} onChange={handlechange1} className="block w-full max-w-xs px-4 py-3 text-sm border rounded-lg border-neutral-200" />
// //                                                 </dd>
// //                                             </dl>
// //                                             <div className='mt-4 text-center'>
// //                                                 <button type="submit" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
// //                                                     update
// //                                                 </button>
// //                                             </div>
// //                                         </form>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </section>
// //             </TabPanel>
// //             <TabPanel header="General">
// //                 <div className='w-full lg:max-w-[85rem] mx-auto px-4'>
// //                     <div className="grid justify-center grid-cols-1 gap-8 lg:grid-cols-2">
// //                         <div className='flex items-center justify-center'>
// //                             <button role='button' onClick={backupNow} className='w-[50%] rounded-full shadow-lg'>
// //                                 <img src="/images/backup.png" alt="" />
// //                             </button>
// //                         </div>
// //                         <div className='bg-white rounded-xl shadow-small'>
// //                             <div className="p-5 ">
// //                                 <h1 className="w-full p-1 mb-2 text-xl font-semibold text-center rounded-md">Data Backup</h1>
// //                                 <form className="space-y-5" onSubmit={updatebackup}>
// //                                     <div>
// //                                         <div className="mb-2">
// //                                             <label>Backup Mode</label>
// //                                         </div>
// //                                         <select name="Backup_Mode" value={formdata?.Backup_Mode} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required >
// //                                             <option value="">Select Mode</option>
// //                                             <option value="Auto">Auto Backup</option>
// //                                             <option value="Manual">Manual Backup</option>
// //                                         </select>
// //                                     </div>
// //                                     {/* <div>
// //                                         <div className="mb-2">
// //                                             <label>Backup Location</label>
// //                                         </div>
// //                                         <input type="text" value={formdata?.Backup_Location} onChange={handlechange} name="Backup_Location" className="w-full px-3 py-2 border rounded-md outline-none placeholder-slate-500" placeholder='Ex: D or E' required/>
// //                                     </div> */}
// //                                     <div>
// //                                         <div className="mb-2">
// //                                             <label>Backup Period</label>
// //                                         </div>
// //                                         <select name="Backup_Period" value={formdata?.Backup_Period} onChange={handlechange} className="w-full px-4 py-2 border rounded-md outline-none" required >
// //                                             <option value="">Select Period</option>
// //                                             <option value="Daily">Daily</option>
// //                                             <option value="Monthly">Monthly</option>
// //                                         </select>
// //                                     </div>
// //                                     <div>
// //                                         <div className="mb-2">
// //                                             <label>Backup Time</label>
// //                                         </div>
// //                                         <input type="time" value={formdata?.Backup_Time} onChange={handlechange} name="Backup_Time" className="w-full px-3 py-2 border rounded-md outline-none placeholder-slate-500" placeholder="Password" required/>
// //                                     </div>
// //                                     <div>
// //                                         <button type="submit" className="w-full px-3 py-2 text-white bg-blue-600 border rounded-xl">
// //                                             Update
// //                                         </button>
// //                                     </div>
// //                                 </form>
// //                             </div>

// //                         </div>


// //                     </div>
// //                 </div>


// //             </TabPanel>
// //         </TabView>
// //     )
// // }


// import React, { useState } from 'react';
// import { User, Settings as SettingsIcon, CloudUpload, Clock, Calendar, Lock, Mail, Phone, ChevronRight, Save } from 'lucide-react';

// const Settings = (props) => {
//   const { updatebackup, handlechange, formdata, backupNow, acccountdata, handlechange1, updateUser } = props;
//   const [activeTab, setActiveTab] = useState('account');

//   const tabs = [
//     { id: 'account', label: 'My Account', icon: User },
//     { id: 'general', label: 'General', icon: SettingsIcon }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Tab Navigation */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-6xl mx-auto">
//           <nav className="flex" aria-label="Tabs">
//             {tabs.map(tab => {
//               const Icon = tab.icon;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`
//                     flex items-center space-x-2 py-6 px-8 relative min-w-0 flex-1 transition-all duration-200
//                     ${activeTab === tab.id
//                       ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
//                       : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
//                     }
//                   `}
//                 >
//                   <Icon size={20} />
//                   <span className="font-medium">{tab.label}</span>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="max-w-6xl px-4 py-12 mx-auto">
//         {activeTab === 'account' && (
//           <div className="overflow-hidden bg-white shadow-xl rounded-3xl">
//             <div className="px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700">
//               <h2 className="text-2xl font-semibold text-white">Account Settings</h2>
//               <p className="mt-1 text-blue-100">Manage your personal information and preferences</p>
//             </div>

//             <form onSubmit={updateUser} className="p-8">
//               <div className="space-y-6">
//                 <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
//                   <div className="relative">
//                     <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         name="UserName"
//                         value={acccountdata.UserName}
//                         onChange={handlechange1}
//                         disabled
//                         className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-75"
//                       />
//                       <User className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2" size={20} />
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         name="First_Name"
//                         value={acccountdata.First_Name}
//                         onChange={handlechange1}
//                         className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                       <User className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2" size={20} />
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
//                     <div className="relative">
//                       <input
//                         type="email"
//                         name="Email"
//                         value={acccountdata.Email}
//                         onChange={handlechange1}
//                         className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                       <Mail className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2" size={20} />
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <label className="block mb-2 text-sm font-medium text-gray-700">Mobile Number</label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         name="Mobilenumber"
//                         value={acccountdata.Mobilenumber}
//                         onChange={handlechange1}
//                         className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                       <Phone className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2" size={20} />
//                     </div>
//                   </div>

//                   <div className="sm:col-span-2">
//                     <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
//                     <div className="relative">
//                       <input
//                         type="password"
//                         name="Password"
//                         value={acccountdata.Password}
//                         onChange={handlechange1}
//                         className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                       <Lock className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2" size={20} />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-end">
//                   <button
//                     type="submit"
//                     className="inline-flex items-center px-8 py-3.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 hover:shadow-lg space-x-2"
//                   >
//                     <Save size={20} />
//                     <span>Save Changes</span>
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         )}

//         {activeTab === 'general' && (
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
//             <div className="flex flex-col items-center justify-center p-8 bg-white shadow-xl rounded-3xl">
//               <h3 className="mb-8 text-xl font-semibold text-gray-800">Quick Backup</h3>
//               <button
//                 onClick={backupNow}
//                 className="relative flex items-center justify-center w-56 h-56 transition-all duration-200 transform rounded-full shadow-lg group bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:scale-105"
//               >
//                 <div className="absolute flex items-center justify-center bg-white rounded-full inset-1">
//                   <CloudUpload size={64} className="text-blue-600 transition-transform duration-200 transform group-hover:scale-110" />
//                 </div>
//               </button>
//               <p className="mt-6 text-center text-gray-600">Click the button above to start an immediate backup of your data</p>
//             </div>

//             <div className="p-8 bg-white shadow-xl rounded-3xl">
//               <div className="mb-8">
//                 <h3 className="text-xl font-semibold text-gray-800">Backup Settings</h3>
//                 <p className="mt-1 text-sm text-gray-500">Configure your automated backup preferences</p>
//               </div>

//               <form onSubmit={updatebackup} className="space-y-6">
//                 <div className="relative">
//                   <label className="block mb-2 text-sm font-medium text-gray-700">Backup Mode</label>
//                   <div className="relative">
//                     <select
//                       name="Backup_Mode"
//                       value={formdata?.Backup_Mode}
//                       onChange={handlechange}
//                       className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
//                       required
//                     >
//                       <option value="">Select Mode</option>
//                       <option value="Auto">Auto Backup</option>
//                       <option value="Manual">Manual Backup</option>
//                     </select>
//                     <CloudUpload className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2" size={20} />
//                     <ChevronRight className="absolute text-gray-400 transform rotate-90 -translate-y-1/2 right-4 top-1/2" size={20} />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <label className="block mb-2 text-sm font-medium text-gray-700">Backup Period</label>
//                   <div className="relative">
//                     <select
//                       name="Backup_Period"
//                       value={formdata?.Backup_Period}
//                       onChange={handlechange}
//                       className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
//                       required
//                     >
//                       <option value="">Select Period</option>
//                       <option value="Daily">Daily</option>
//                       <option value="Monthly">Monthly</option>
//                     </select>
//                     <Calendar className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2" size={20} />
//                     <ChevronRight className="absolute text-gray-400 transform rotate-90 -translate-y-1/2 right-4 top-1/2" size={20} />
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <label className="block mb-2 text-sm font-medium text-gray-700">Backup Time</label>
//                   <div className="relative">
//                     <input
//                       type="time"
//                       name="Backup_Time"
//                       value={formdata?.Backup_Time}
//                       onChange={handlechange}
//                       className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                     />
//                     <Clock className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2" size={20} />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 hover:shadow-lg space-x-2"
//                 >
//                   <Save size={20} />
//                   <span>Update Settings</span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Settings;

import React, { useState } from 'react';
import { User, Settings as SettingsIcon, CloudUpload, Clock, Calendar, Lock, Mail, Phone, ChevronRight, Save, Bell, Shield, Check, EyeOff, Eye } from 'lucide-react';

const Settings = (props) => {
  const { updatebackup, handlechange, formdata, backupNow, acccountdata, handlechange1, updateUser } = props;
  const [activeTab, setActiveTab] = useState('account');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const tabs = [
    { id: 'account', label: 'My Account', icon: User },
    { id: 'general', label: 'General', icon: SettingsIcon }
  ];

  const handleBackupClick = () => {
    backupNow();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 ">
      {/* Navigation */}
      <div className="border-b border-gray-100  backdrop-blur-md bg-white/70">
        <div className="max-w-6xl mx-auto">
          <nav className="flex" aria-label="Tabs">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center space-x-3 py-6 px-8 relative min-w-0 flex-1 transition-all duration-300
                    ${activeTab === tab.id
                      ? 'text-blue-600 after:absolute after:bottom-0 after:left-1/2 after:w-16 after:h-1 after:-translate-x-1/2 after:bg-blue-600 after:rounded-full'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                    }
                  `}
                >
                  <Icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl px-4 py-12 mx-auto">
        {activeTab === 'account' && (
          <div className="overflow-hidden border shadow-2xl backdrop-blur-xl bg-white/80 rounded-3xl border-white/50">
            <div className="px-8 py-8 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Shield size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="md:text-2xl  font-bold text-white">Account Settings</h2>
                  <p className="mt-1 text-blue-100">Secure your account information</p>
                </div>
              </div>
            </div>

            <form onSubmit={updateUser} className="p-8">
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {[
                    { label: 'Username', name: 'UserName', icon: User, disabled: true },
                    { label: 'Full Name', name: 'First_Name', icon: User },
                    { label: 'Email Address', name: 'Email', icon: Mail },
                    { label: 'Mobile Number', name: 'Mobilenumber', icon: Phone },
                    // { label: 'Password', name: 'Password', icon: Lock, type: 'password', span: true }
                  ].map((field) => (
                    <div key={field.name} className={`relative group ${field.span ? 'sm:col-span-2' : ''}`}>
                      <label className="block mb-2 text-sm font-medium text-gray-700">{field.label}</label>
                      <div className="relative">
                        <input
                          type={field.type || 'text'}
                          name={field.name}
                          value={acccountdata[field.name]}
                          onChange={handlechange1}
                          disabled={field.disabled}
                          className="w-full py-4 pl-12 pr-4 transition-all duration-300 border border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent group-hover:border-blue-200 disabled:opacity-75"
                        />
                        <field.icon className="absolute text-gray-400 transition-colors duration-300 -translate-y-1/2 left-4 top-1/2 group-hover:text-blue-500" size={20} />
                      </div>
                    </div>
                  ))}
                  <div className="relative group sm:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="Password"
                        value={acccountdata.Password}
                        onChange={handlechange1}
                        className="w-full py-4 pl-12 pr-12 transition-all duration-300 border border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent group-hover:border-blue-200"
                      />
                      <Lock className="absolute text-gray-400 transition-colors duration-300 -translate-y-1/2 left-4 top-1/2 group-hover:text-blue-500" size={20} />
                      <button
                        type="button"
                        onClick={togglePassword}
                        className="absolute p-1 transition-colors duration-200 -translate-y-1/2 rounded-full right-4 top-1/2 hover:bg-gray-100"
                      >
                        {showPassword ? (
                          <EyeOff className="text-gray-400 transition-colors duration-300 hover:text-blue-500" size={20} />
                        ) : (
                          <Eye className="text-gray-400 transition-colors duration-300 hover:text-blue-500" size={20} />
                        )}
                      </button>
                    </div>
                  </div>

                </div>


                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 space-x-2 font-medium text-white transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105 hover:shadow-lg"
                  >
                    <Save size={20} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'general' && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden border shadow-2xl backdrop-blur-xl bg-white/80 rounded-3xl border-white/50">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-100/20 to-purple-100/20" />

              <div className="relative">
                <h3 className="mb-8 text-xl font-bold text-center text-gray-800">Quick Backup</h3>
                <button
                  onClick={handleBackupClick}
                  className="relative flex items-center justify-center w-64 h-64 transition-all duration-500 rounded-full shadow-2xl group bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 hover:shadow-blue-500/25"
                >
                  <div className="absolute flex items-center justify-center overflow-hidden bg-white rounded-full inset-1">
                    {showSuccess ? (
                      <Check size={64} className="text-green-500 duration-300 animate-in fade-in zoom-in" />
                    ) : (
                      <CloudUpload size={64} className="text-blue-600 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6" />
                    )}
                  </div>
                </button>
                <p className="mt-8 text-center text-gray-600">Instantly backup your important data</p>
              </div>
            </div>

            <div className="relative p-8 overflow-hidden border shadow-2xl backdrop-blur-xl bg-white/80 rounded-3xl border-white/50">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-100/20 to-purple-100/20" />

              <div className="relative">
                <div className="flex items-center mb-8 space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl">
                    <Bell size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Backup Settings</h3>
                    <p className="mt-1 text-sm text-gray-500">Configure automated backups</p>
                  </div>
                </div>

                <form onSubmit={updatebackup} className="space-y-6">
                  {[
                    {
                      label: 'Backup Mode',
                      name: 'Backup_Mode',
                      icon: CloudUpload,
                      type: 'select',
                      options: [
                        { value: '', label: 'Select Mode' },
                        { value: 'Auto', label: 'Auto Backup' },
                        { value: 'Manual', label: 'Manual Backup' }
                      ]
                    },
                    {
                      label: 'Backup Period',
                      name: 'Backup_Period',
                      icon: Calendar,
                      type: 'select',
                      options: [
                        { value: '', label: 'Select Period' },
                        { value: 'Daily', label: 'Daily' },
                        { value: 'Monthly', label: 'Monthly' }
                      ]
                    },
                    {
                      label: 'Backup Time',
                      name: 'Backup_Time',
                      icon: Clock,
                      type: 'time'
                    }
                  ].map((field) => (
                    <div key={field.name} className="relative group">
                      <label className="block mb-2 text-sm font-medium text-gray-700">{field.label}</label>
                      <div className="relative">
                        {field.type === 'select' ? (
                          <select
                            name={field.name}
                            value={formdata?.[field.name]}
                            onChange={handlechange}
                            className="w-full py-4 pl-12 pr-12 transition-all duration-300 border border-gray-200 appearance-none rounded-2xl bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent group-hover:border-blue-200"
                            required
                          >
                            {field.options.map(option => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            value={formdata?.[field.name]}
                            onChange={handlechange}
                            className="w-full py-4 pl-12 pr-4 transition-all duration-300 border border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent group-hover:border-blue-200"
                            required
                          />
                        )}
                        <field.icon className="absolute text-gray-400 transition-colors duration-300 -translate-y-1/2 left-4 top-1/2 group-hover:text-blue-500" size={20} />
                        {field.type === 'select' && (
                          <ChevronRight className="absolute text-gray-400 transition-colors duration-300 transform rotate-90 -translate-y-1/2 right-4 top-1/2 group-hover:text-blue-500" size={20} />
                        )}
                      </div>
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-6 py-4 space-x-2 font-medium text-white transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105 hover:shadow-lg"
                  >
                    <Save size={20} />
                    <span>Update Settings</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;