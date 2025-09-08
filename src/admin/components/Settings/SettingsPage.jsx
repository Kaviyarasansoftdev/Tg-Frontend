import React, { useCallback, useEffect, useState } from 'react'
import Settings from '../../shared/components/Settings/Settings'
import { Backup, getmyaccount, getsettings, updateBackup, updateUsers } from '../../shared/services/apisettings/apisettings';
import toast from 'react-hot-toast';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

export default function SettingsAdminPage() {

  const [formdata, setFormdata] = useState({});
  const [acccountdata, setAcccount] = useState({});

  let isMounted = true;

  const getSettings = useCallback(async () => {
    const res = await getsettings();
    setFormdata(res)
  }, []);

  const getMyaccount = useCallback(async () => {
    const res = await getmyaccount();
    setAcccount(res)
  }, []);

  useEffect(() => {
    if (isMounted) {
      getSettings();
      getMyaccount();
    }
    return () => isMounted = false;
  }, []);

  const handlechange =(e)=>{
    setFormdata({...formdata, [e.target.name]: e.target.value});
  }

  const handlechange1 =(e)=>{
    setAcccount({...acccountdata, [e.target.name]: e.target.value});
  }

  const updatebackup = async(e)=>{
    e.preventDefault();
    var res = await updateBackup(formdata);
    toast.success("Data Updated Successfully!");
  }

  const updateUser = async(e)=>{
    e.preventDefault();
    var res = await updateUsers(acccountdata);
    toast.success("Data Updated Successfully!");
  }

  // const backupNow = async()=>{
  //   var resData = await Backup();

  //   const wb = XLSX.utils.book_new();
  //   const ws = XLSX.utils.json_to_sheet(resData);
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  //   const fileName = 'KBBackup.xlsx';
  //   XLSX.writeFile(wb, fileName);
  //   toast.success("Data Backup Completed");
  // }

//   const backupNow = async () => {
//         const resData = await Backup();
//         const wb = XLSX.utils.book_new();
//         for (const [modelName, modelData] of Object.entries(resData)) {
//             try {
//                 const ws = XLSX.utils.json_to_sheet(modelData);
//                 XLSX.utils.book_append_sheet(wb, ws, modelName);
//                 console.log(`Added ${modelName} sheet successfully`);
//             } catch (error) {
//                 console.log(`Error creating sheet for ${modelName}:`, error);
//                 toast.error(`Failed to process ${modelName} data`);
//             }
//         }
//         const fileName = 'KBBackup.xlsx';
//         XLSX.writeFile(wb, fileName);
//         toast.success("Data Backup Completed");
//         console.log('Backup failed:', err);
//         toast.error("Data Backup Failed");
// };

// const backupNow = async () => {
//   try {
//       // Get backup data
//       const resData = await Backup();
//       // Convert the data to JSON string with proper formatting
//       const jsonString = JSON.stringify(resData, null, 2);
//       // Create a blob with the JSON data
//       const blob = new Blob([jsonString], { type: 'application/json' });
//       // Create a URL for the blob
//       const url = window.URL.createObjectURL(blob);
//       // Create a temporary link element
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = 'KBBackup.json'; // Set the file name
//       // Append link to body, click it, and remove it
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       // Clean up the URL object
//       window.URL.revokeObjectURL(url);
//       toast.success("Data Backup Completed");
//       console.log('Backup completed successfully');
//   } catch (err) {
//       console.log('Backup failed:', err);
//       toast.error("Data Backup Failed");
//   }
// };

const backupNow = async () => {
  try {
      const resData = await Backup();
      const wb = XLSX.utils.book_new();

      for (const [modelName, modelData] of Object.entries(resData)) {
          try {
              // Convert the data to a flat structure suitable for Excel
              const flattenedData = Array.isArray(modelData) 
                  ? modelData.map(item => flattenObject(item))
                  : [flattenObject(modelData)];

              const ws = XLSX.utils.json_to_sheet(flattenedData);
              XLSX.utils.book_append_sheet(wb, ws, modelName);
              console.log(`Added ${modelName} sheet successfully`);
          } catch (error) {
              console.log(`Error creating sheet for ${modelName}:`, error);
              toast.error(`Failed to process ${modelName} data`);
          }
      }

      const fileName = 'KBBackup.xlsx';
      XLSX.writeFile(wb, fileName);
      toast.success("Data Backup Completed");

  } catch (err) {
      console.log('Backup failed:', err);
      toast.error("Data Backup Failed");
  }
};

// Helper function to flatten nested objects and arrays
const flattenObject = (obj, prefix = '') => {
  let flattened = {};

  for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}_${key}` : key;

      if (key === '_id' && value.$oid) {
          // Handle MongoDB ObjectId
          flattened[newKey] = value.$oid;
      } else if (Array.isArray(value)) {
          // Handle arrays
          if (value.length === 0) {
              flattened[newKey] = '';
          } else if (typeof value[0] === 'object' && value[0] !== null) {
              // Handle array of objects (like Subcategories)
              value.forEach((item, index) => {
                  const flatItem = flattenObject(item, `${newKey}_${index}`);
                  flattened = { ...flattened, ...flatItem };
              });
          } else {
              // Handle array of primitives (like Images)
              flattened[newKey] = value.join(', ');
          }
      } else if (value !== null && typeof value === 'object') {
          // Handle nested objects
          const flatObject = flattenObject(value, newKey);
          flattened = { ...flattened, ...flatObject };
      } else {
          // Handle primitive values
          flattened[newKey] = value;
      }
  }

  return flattened;
};
  return (
    <div>
      <Settings handlechange={handlechange} updatebackup={updatebackup} backupNow={backupNow} formdata={formdata} acccountdata={acccountdata} handlechange1={handlechange1}
        updateUser={updateUser} />
    </div>
  )
}
