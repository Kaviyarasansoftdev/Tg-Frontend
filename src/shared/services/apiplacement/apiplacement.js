import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";

export const getplacementgallery = async () => {
   var res = await axios.get(`${apiurl()}/additional-gallery/apigetplacementadditionalgallery`);
   return res.data;
}