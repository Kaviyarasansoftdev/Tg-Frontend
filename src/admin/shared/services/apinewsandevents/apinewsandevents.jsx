import apiurl from "../../../../shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/token/token";
import axios from "axios";

export const savenewsandevents = async (formData) => {
    try {
        const token = await gettoken();
        const res = await axios.post(`${apiurl()}/newsandevents/savepost`, formData, {headers: {"Authorization": `Bearer ${token}`}});
        return res.data;
    } catch (err) {
        console.error('Error creating Post data', err);
        throw err;
    }
};

export const apigetallNewsandevents = async (params) => {
    try {
        const token = gettoken();
        const res = await axios.get(`${apiurl()}/newsandevents/apigetpost`,{params:params,headers: { "Authorization": `Bearer ${token}` }});
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const updateNewsandevents = async (datas) => {
  try {
   const res = await axios.put(`${apiurl()}/newsandevents/apiupdatepost/${datas.get('_id')}`, datas, {headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${gettoken()}`}});
    return res.data;
  } catch (error) {
    console.error("Error updating News Events:", error);
    throw error;
  }
};

export const deleteNewsandevents = async (id) => {
   var res = await axios.delete(`${apiurl()}/newsandevents/deletepost/${id}`, {headers: {"Authorization": `Bearer ${gettoken()}`}});
   return res.data;
}