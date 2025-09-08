import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const savenaactitle = async (formData) => {
  try {
      const res = await axios.post(`${apiurl()}/naac/savenaactitle`,formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
      );
      return res.data;
  } catch (error) {
      console.error("Error saving herobanner:", error);
      throw error;
  }
};

export const getallnaactitle= async(params)=>{
   var res=await axios.get(`${apiurl()}/naac/apigetallnaactitle`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}




export const updatenaactitle = async (formdata) => {
  console.log('Apiformdata:', formdata);
  
  try {
    // Extract _id and create update data object
    const { _id, ...updateData } = formdata;
    
    console.log('Update data being sent:', updateData);
    console.log('ID being sent:', _id);
    
    const res = await axios.put(
      `${apiurl()}/naac/apiupdatenaactitle`,
      updateData,  // Send only the update data in body
      {
        params: { _id },  // Send _id as query parameter
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${gettoken()}`
        }
      }
    );
    
    return res.data;
    
  } catch (error) {
    console.error("Error updating NAAC title:", error);
    console.error("Error response:", error.response?.data);
    throw error;
  }
};


export const deleteatenaactitle=async(id)=>{
   var res=await axios.delete(`${apiurl()}/naac/apideletenaactitle`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const savenaac = async (formData) => {
  try {
  const res = await axios.post( `${apiurl()}/naac/savenaac`, formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
      );
      return res.data;
  } catch (error) {
      console.error("Error saving naac:", error);
      throw error;
  }
};


export const getallnaac= async(params)=>{
   var res=await axios.get(`${apiurl()}/naac/apigetallnaac`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}


export const updatenaac = async (formdata) => {
  console.log('Apiformdata:',formdata)
  try {
    const res = await axios.put(`${apiurl()}/naac/apiupdatenaac`,formdata,{params: { _id: formdata?._id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error saving Location:", error);
    throw error;
}
};

export const deleteatenaac=async(id)=>{
   var res=await axios.delete(`${apiurl()}/naac/apideletenaac`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}