import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";
// import setupDecryption from "../../../../shared/services/responsedecryption/responseDecryption";


// setupDecryption();
export const getallhookups = async(params)=>{
   var res=await axios.get(`${apiurl()}/hookups/apigetallhookups`,{params:params, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const getFilterOptions = async(data)=>{
   var res=await axios.post(`${apiurl()}/hookups/getfilteroptions`,{field:data},{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const gettags = async()=>{
  var res=await axios.get(`${apiurl()}/hookups/apigettags`,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
  return res.data;
}

export const getbrandname = async()=>{
  var res=await axios.get(`${apiurl()}/hookups/apigetbrandname`,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
  return res.data;
}

export const getsearchkeywords = async()=>{
  var res=await axios.get(`${apiurl()}/hookups/apigetsearchkeywords`,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
  return res.data;
}

export const getproductspecialwords = async()=>{
  var res=await axios.get(`${apiurl()}/hookups/apigetproductspecialwords`,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
  return res.data;
}

export const savehookups = async (formData) => {
  try {
      const res = await axios.post(`${apiurl()}/hookups/apisavehookups`,formData, { headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}}
      );
      return res.data;
  } catch (error) {
      console.error("Error saving hookups:", error);
      throw error;
  }
};


export const updatehookups = async (formdata) => {
  console.log('Apiformdata:',formdata)
  try {
    const res = await axios.put(`${apiurl()}/hookups/apiupdatehookups`,formdata,{params: { _id: formdata?._id },headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
return res.data;

} catch (error) {
    console.error("Error saving Location:", error);
    throw error;
}
};
 


export const deletehookups=async(id)=>{
   var res=await axios.delete(`${apiurl()}/hookups/apideletehookups`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

// export const searchcategory = async(datas)=>{
//    var res=await axios.post(`${apiurl()}/users/apisearchcategory`,datas,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
//    return res.data;
// }
