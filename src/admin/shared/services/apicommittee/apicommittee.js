import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const getallcommittee = async(params)=>{
   var res=await axios.get(`${apiurl()}/committee/apigetcommittees`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const getFilterOptions = async(data)=>{
   var res=await axios.post(`${apiurl()}/notification/getfilteroptions`,{field:data},{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}


// export const savecommittee = async (formData) => {
//   try {
//   const res = await axios.post( `${apiurl()}/committee/apisavecommittee`, formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
//       );
//       return res.data;
//   } catch (error) {
//       console.error("Error saving committee:", error);
//       throw error;
//   }
// };

export const savecommittee = async (formData) => {
  try {
    const res = await axios.post(
      `${apiurl()}/committee/apisavecommittee`, 
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
    console.error("Error saving committee:", error);
    throw error;
  }
};

export const updatecommittee = async (formData,id) => {
  try {
    const res = await axios.put(`${apiurl()}/committee/apiupdatecommittees`,formData,{ params: { _id: id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error updating committee:", error);
    throw error;
}
};
 


export const deletecommittee=async(id)=>{
   var res=await axios.delete(`${apiurl()}/committee/apideletecommittees`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

