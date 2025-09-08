import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";


export const apisendotp = async (datas) => {
    try {
        const res = await axios.put(`${apiurl()}/api/apisendotp`, datas);
        console.log(res);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

 export const apivalidateOTP=async(data)=>{
    var res=await axios.post(`${apiurl()}/api/verifyotp`,data);
    return res.data;
 }