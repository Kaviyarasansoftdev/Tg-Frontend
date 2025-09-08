import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
 
export const getcommitteeByTitle = async (params) => {
   var res = await axios.get(`${apiurl()}/committee/getcommitteeByTitle/${params}` );
   return res.data;
}