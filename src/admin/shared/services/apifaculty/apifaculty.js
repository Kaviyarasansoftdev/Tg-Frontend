import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const saveFaculty = async (formData) => {
    console.log('FormData:',formData)
  try {
      const res = await axios.post(`${apiurl()}/Faculty/saveFaculty`,formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
      );
      return res.data;
  } catch (error) {
      console.error("Error saving homepagebrands:", error);
      throw error;
  }
};


export const getallFaculty = async(params)=>{
   var res=await axios.get(`${apiurl()}/Faculty/apigetFaculty`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}


export const getFilterOptions = async(data)=>{
   var res=await axios.post(`${apiurl()}/Faculty/getfilteroptions`,{field:data},{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}


export const updateFaculty = async (formdata) => {
  console.log('Apiformdata:',formdata)
  try {
    const res = await axios.put(`${apiurl()}/Faculty/apiupdateFaculty`,formdata,{params: { _id: formdata?._id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error saving Location:", error);
    throw error;
}
};
 


export const deleteFaculty=async(id)=>{
   var res=await axios.delete(`${apiurl()}/Faculty/apideleteFaculty`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
