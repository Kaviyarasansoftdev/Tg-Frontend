import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const getalladditionalgegallery = async(params)=>{
   var res=await axios.get(`${apiurl()}/additional-gallery/apigetadditionalgallery`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const getFilterOptions = async(data)=>{
   var res=await axios.post(`${apiurl()}/additional-gallery/getfilteroptions`,{field:data},{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}


// export const saveadditionalgegallery = async (formData) => {
//   try {
//   const res = await axios.post( `${apiurl()}/additionalgegallery/apisaveadditionalgegallery`, formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
//       );
//       return res.data;
//   } catch (error) {
//       console.error("Error saving additionalgegallery:", error);
//       throw error;
//   }
// };

export const saveadditionalgegallery = async (formData) => {
  try {
    const res = await axios.post(
      `${apiurl()}/additional-gallery/apisaveadditionalgallery`, 
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
    console.error("Error saving additionalgegallery:", error);
    throw error;
  }
};

export const updateadditionalgegallery = async (formData,id) => {
  try {
    const res = await axios.put(`${apiurl()}/additional-gallery/apiupdateadditionalgallery`,formData,{ params: { _id: id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error updating additionalgegallery:", error);
    throw error;
}
};
 


export const deleteadditionalgegallery=async(id)=>{
   var res=await axios.delete(`${apiurl()}/additional-gallery/apideleteadditionalgallery`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

