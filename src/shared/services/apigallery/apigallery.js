import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../token/token";

export const getallGallerys = async(Type,Year)=>{
    const token = await gettoken();
    var res=await axios.get(`${apiurl()}/college-gallery/apigetactivegallery`,{params:{Type,Year}});
    return res.data;
 }