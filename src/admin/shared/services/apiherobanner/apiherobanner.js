import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const saveherobanner = async (formData) => {
  try {
      const res = await axios.post(`${apiurl()}/herobanner/saveherobanner`,formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
      );
      return res.data;
  } catch (error) {
      console.error("Error saving herobanner:", error);
      throw error;
  }
};


export const getallherobanner= async(params)=>{
   var res=await axios.get(`${apiurl()}/herobanner/getherobanner`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}



export const updateherobanner = async (formdata) => {
  console.log('Apiformdata:',formdata)
  try {
    const res = await axios.put(`${apiurl()}/herobanner/apiupdateherobanner`,formdata,{params: { _id: formdata?._id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error saving Location:", error);
    throw error;
}
};
 


export const deleteherobanner=async(id)=>{
   var res=await axios.delete(`${apiurl()}/herobanner/apideleteherobanner`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}