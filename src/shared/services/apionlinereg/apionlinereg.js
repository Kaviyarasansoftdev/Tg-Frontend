import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";

export const saveOnlinereg = async (formData) => {
    console.log('FormData:', formData);
    
    try {
        const res = await axios.post(
            `${apiurl()}/online-reg/apisaveOnlinereg`, 
            formData, 
            { 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${gettoken()}`
                }
            }
        );
        return res.data;
    } catch (error) {
        console.error("Error saving Onlinereg:", error);
        console.error("Error response:", error.response?.data);
        throw error;
    }
};

export const apigetallOnlinereg = async (params) => {
    try {
        const token = gettoken();
        const res = await axios.get(`${apiurl()}/online-reg/apigetallOnlinereg`,{params:params,headers: { "Authorization": `Bearer ${token}` }});
        return res.data;
    } catch (err) {
        console.log(err);
    }
};