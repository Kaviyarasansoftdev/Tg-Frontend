import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const savelatestupdateshero = async (formData) => {
  try {
      const res = await axios.post(`${apiurl()}/latest-updateshero/savelatestupdateshero`,formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
      );
      return res.data;
  } catch (error) {
      console.error("Error saving latestupdateshero:", error);
      throw error;
  }
};


export const getlatestupdatesHero= async(params)=>{
   var res=await axios.get(`${apiurl()}/latest-updateshero/getlatestupdateshero`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}



export const updatedatestupdatesHero = async (formdata) => {
  console.log('Apiformdata:',formdata)
  try {
    const res = await axios.put(`${apiurl()}/latest-updateshero/apiupdatelatestupdateshero`,formdata,{params: { _id: formdata?._id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error saving Location:", error);
    throw error;
}
};
 


export const deleteatestupdatesHero=async(id)=>{
   var res=await axios.delete(`${apiurl()}/latest-updateshero/apideleteLatestupdateshero`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}