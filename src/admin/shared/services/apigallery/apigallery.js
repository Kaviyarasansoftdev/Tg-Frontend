import axios from "axios";
import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/Token/token";

export const getallGallerys = async(params)=>{
   var res=await axios.get(`${apiurl()}/gallery/apigetallgallery`,{params:params });
   return res.data;
}

export const getuniquevaluebyfield = async(params)=>{
   console.log(params)
   var res=await axios.get(`${apiurl()}/gallery/apigetuniquevaluebyfield`,{params:params});
   return res.data;
}

export const saveGallerys=async(datas,onUploadProgress)=>{
   try {
      const formData = new FormData();
      for (const key in datas) {
         if(key== 'Src'){
            for(let i = 0; i < datas['Src'].length; i++)
               if (datas['Src'][i] instanceof File)
                  formData.append(key, datas[key][i]);
               else
                  formData.append(key, datas[key]);
         }
         else{
            formData.append(key, datas[key]);
         }
      }

      var res=await axios.post(`${apiurl()}/gallery/apisavegallery`,formData,{ headers: {"Authorization" : `Bearer ${gettoken()}`},onUploadProgress});
      return res.data;
   }
   catch(err){
      console.log(err);
   }
}

export const updateGallerys=async(datas)=>{
   const formData = new FormData();
   for (const key in datas) {
      if(key== 'Src'){
         for(let i = 0; i < datas['Src'].length; i++)
           if (datas['Src'][i] instanceof File)
             formData.append(key, datas[key][i]);
           else
            formData.append(key, datas[key]);
      }
      else{
         formData.append(key, datas[key]);
      }
   }
   var res=await axios.put(`${apiurl()}/gallery/apiupdategallery`,formData,{params:{_id:datas?._id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const getFilterOptions = async(data)=>{
   var res=await axios.post(`${apiurl()}/gallery/getfilteroptions`,{field:data},{headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}

export const deleteGallerys=async(id)=>{
   var res=await axios.delete(`${apiurl()}/gallery/apideletegallery`,{params:{_id:id}, headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
