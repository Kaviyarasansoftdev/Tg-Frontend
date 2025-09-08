import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const savewelcomepopup = async (formData) => {
  try {
      const res = await axios.post(`${apiurl()}/welcome-popup/saveWelcomePopup`,formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
      );
      return res.data;
  } catch (error) {
      console.error("Error saving welcomepopup:", error);
      throw error;
  }
};


export const getwelcomepopup = async(params)=>{
   var res=await axios.get(`${apiurl()}/welcome-popup/getWelcomePopup`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}



export const updatewelcomepopup = async (formdata) => {
  console.log('Apiformdata:',formdata)
  try {
    const res = await axios.put(`${apiurl()}/welcome-popup/apiUpdateWelcomePopup`,formdata,{params: { _id: formdata?._id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error saving Location:", error);
    throw error;
}
};
 


export const deletewelcomepopup=async(id)=>{
   var res=await axios.delete(`${apiurl()}/welcome-popup/apiDeleteWelcomePopup`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}