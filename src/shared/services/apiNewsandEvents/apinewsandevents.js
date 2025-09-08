import axios from "axios";
import { gettoken } from "../token/token";
import apiurl from "../apiendpoint/apiendpoint";

export const apigetNewsandeventsforHome = async (params) => {
    try {
        const token = gettoken();
        const res = await axios.get(`${apiurl()}/newsandevents/apigetpostforHome`,{params:params});
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
