import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const saveLab = async (formData) => {
    console.log('FormData:',formData)
  try {
      const res = await axios.post(`${apiurl()}/Lab/saveLab`,formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
      );
      return res.data;
  } catch (error) {
      console.error("Error saving homepagebrands:", error);
      throw error;
  }
};


export const getallLab = async(params)=>{
   var res=await axios.get(`${apiurl()}/Lab/apigetLab`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}


export const getFilterOptions = async(data)=>{
   var res=await axios.post(`${apiurl()}/Lab/apigetFilterOptions`,{field:data},{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}


export const updateLab = async (formdata) => {
  console.log('Apiformdata:',formdata)
  try {
    const res = await axios.put(`${apiurl()}/Lab/apiupdateLab`,formdata,{params: { _id: formdata?._id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error saving Location:", error);
    throw error;
}
};
 


export const deleteLab=async(id)=>{
   var res=await axios.delete(`${apiurl()}/Lab/apideleteLab`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
