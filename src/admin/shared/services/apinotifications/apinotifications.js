import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const getallnotifications = async(params)=>{
   var res=await axios.get(`${apiurl()}/notification/apigetnotifications`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const getFilterOptions = async(data)=>{
   var res=await axios.post(`${apiurl()}/notification/getfilteroptions`,{field:data},{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}


export const savenotifications = async (formData) => {
  try {
  const res = await axios.post( `${apiurl()}/notification/apisavenotification`, formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
      );
      return res.data;
  } catch (error) {
      console.error("Error saving notifications:", error);
      throw error;
  }
};

export const updatenotifications = async (datas) => {
  try {
    const res = await axios.put(`${apiurl()}/notification/apiupdatenotifications`,datas,{params: { _id: datas?._id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error updating notifications:", error);
    throw error;
}
};
 


export const deletenotifications=async(id)=>{
   var res=await axios.delete(`${apiurl()}/notification/apideletenotifications`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

