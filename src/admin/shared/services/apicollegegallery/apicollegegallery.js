import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const getallcollegegallery = async(params)=>{
   var res=await axios.get(`${apiurl()}/college-gallery/apigetcollegegallery`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const getFilterOptions = async(data)=>{
   var res=await axios.post(`${apiurl()}/college-gallery/getfilteroptions`,{field:data},{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}


// export const savecollegegallery = async (formData) => {
//   try {
//   const res = await axios.post( `${apiurl()}/collegegallery/apisavecollegegallery`, formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
//       );
//       return res.data;
//   } catch (error) {
//       console.error("Error saving collegegallery:", error);
//       throw error;
//   }
// };

export const savecollegegallery = async (formData) => {
  try {
    const res = await axios.post(
      `${apiurl()}/college-gallery/apisavecollegegallery`, 
      formData, 
      { 
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${gettoken()}`
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error saving collegegallery:", error);
    throw error;
  }
};

export const updatecollegegallery = async (formData,id) => {
  try {
    const res = await axios.put(`${apiurl()}/college-gallery/apiupdatecollegegallery`,formData,{ params: { _id: id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error updating collegegallery:", error);
    throw error;
}
};
 


export const deletecollegegallery=async(id)=>{
   var res=await axios.delete(`${apiurl()}/college-gallery/apideletecollegegallery`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

