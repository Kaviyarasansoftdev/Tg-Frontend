import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const getallcell = async(params)=>{
   var res=await axios.get(`${apiurl()}/cell/apigetcell`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const getFilterOptions = async(data)=>{
   var res=await axios.post(`${apiurl()}/notification/getfilteroptions`,{field:data},{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}


// export const savecell = async (formData) => {
//   try {
//   const res = await axios.post( `${apiurl()}/cell/apisavecell`, formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
//       );
//       return res.data;
//   } catch (error) {
//       console.error("Error saving cell:", error);
//       throw error;
//   }
// };

export const savecell = async (formData) => {
  try {
    const res = await axios.post(
      `${apiurl()}/cell/apisavecell`, 
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
    console.error("Error saving cell:", error);
    throw error;
  }
};

export const updatecell = async (formData,id) => {
  try {
    const res = await axios.put(`${apiurl()}/cell/apiupdatecell`,formData,{ params: { _id: id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error updating cell:", error);
    throw error;
}
};
 


export const deletecell=async(id)=>{
   var res=await axios.delete(`${apiurl()}/cell/apideletecell`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

