import axios from "axios";
import { gettoken } from "../../../../shared/services/Token/token";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";

export const savedepartmentdetails = async (formData) => {
    console.log('FormData:',formData)
  try {
      const res = await axios.post(`${apiurl()}/departmentdetails/savedepartmentdetails`,formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
      );
      return res.data;
  } catch (error) {
      console.error("Error saving homepagebrands:", error);
      throw error;
  }
};


export const getalldepartmentdetails = async(params)=>{
   var res=await axios.get(`${apiurl()}/departmentdetails/apigetdepartmentdetails`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const getalldepartmentname = async(params)=>{
   var res=await axios.get(`${apiurl()}/departmentdetails/getDepartmentName`,{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}



export const getFilterOptions = async(data)=>{
   var res=await axios.post(`${apiurl()}/departmentdetails/getfilteroptions`,{field:data},{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}


export const updatedepartmentdetails = async (formdata) => {
  console.log('Apiformdata:',formdata)
  try {
    const res = await axios.put(`${apiurl()}/departmentdetails/apiupdatedepartmentdetails`,formdata,{params: { _id: formdata?._id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error saving Location:", error);
    throw error;
}
};
 


export const deletedepartmentdetails=async(id)=>{
   var res=await axios.delete(`${apiurl()}/departmentdetails/apideletedepartmentdetails`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
