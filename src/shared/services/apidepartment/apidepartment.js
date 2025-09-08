import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";

// export const getalldepartmentdata = async(params)=>{
//    var res=await axios.get(`${apiurl()}/department-overview/getdepartmentoverviews`,{params:params});
//    return res.data;
// }

export const getalldepartmentdata = async () => {
   var res = await axios.get(`${apiurl()}/department-overview/getactivedepartmentoverviews`);
   return res.data;
}

export const getactivedepartmentoverviews = async (params) => {
   var res = await axios.get(`${apiurl()}/department-overview/getactivedepartmentoverviews/${params}` );
   return res.data;
}