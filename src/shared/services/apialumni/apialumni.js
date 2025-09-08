import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";

export const getalumnigallery = async () => {
   var res = await axios.get(`${apiurl()}/additional-gallery/apigetalumniadditionalgallery`);
   return res.data;
}