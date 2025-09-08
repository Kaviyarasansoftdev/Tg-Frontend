import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";

export const getallactivenaactitle = async()=>{
   var res=await axios.get(`${apiurl()}/naac/apigetactivenaactitle`);
   return res.data;
}


export const getNaacDataById = async(id)=>{
   var res=await axios.get(`${apiurl()}/naac/apigetnaacbyid`,{params:{_id:id}});
   return res.data;
}
