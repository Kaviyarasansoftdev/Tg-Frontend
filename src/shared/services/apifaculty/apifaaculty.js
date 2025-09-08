import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";


export const getfaculty = async()=>{
    var res=await axios.get(`${apiurl()}/Faculty/apigetFacultyforhome`);
    return res.data;
 }