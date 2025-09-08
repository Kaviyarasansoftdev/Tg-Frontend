import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";

export const apigetcellbytitle = async (params) => {
   var res = await axios.get(`${apiurl()}/cell/apigetcellbytitle/${params}` );
   return res.data;
}