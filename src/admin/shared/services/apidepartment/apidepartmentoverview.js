import axios from "axios";
import { gettoken } from "../../../../shared/services/Token/token";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";

export const savedepartmentoverview = async (formData) => {
    console.log('FormData:',formData)
  try {
      const res = await axios.post(`${apiurl()}/department-overview/savedepartmentoverviews`,formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
      );
      return res.data;
  } catch (error) {
      console.error("Error saving departmentoverviews:", error);
      throw error;
  }
};

export const getalldepartmentoverview = async(params)=>{
   var res=await axios.get(`${apiurl()}/department-overview/getdepartmentoverviews`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const updatedepartmentoverview = async (formdata) => {
  console.log('Apiformdata:', formdata);
  try {
    const res = await axios.put(
      `${apiurl()}/department-overview/apiupdatedepartmentoverviews`,
      formdata,
      {
        params: { _id: formdata.get('_id') }, // Use formData.get to access _id
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${gettoken()}`
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error saving Location:", error.response?.data || error.message);
    throw error;
  }
};

export const deletedepartmentoverview=async(id)=>{
   var res=await axios.delete(`${apiurl()}/department-overview/apideletedepartmentoverviews`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
