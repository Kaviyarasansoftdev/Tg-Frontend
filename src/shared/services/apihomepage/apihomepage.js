import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";


export const getallactivebanner = async()=>{
   var res=await axios.get(`${apiurl()}/herobanner/getactiveherobanner`);
   return res.data;
}

export const getallactivenotifications = async()=>{
   var res=await axios.get(`${apiurl()}/notification/apigetactivenotifications`);
   return res.data;
}

export const getallactivelatestupdates = async()=>{
   var res=await axios.get(`${apiurl()}/latest-updateshero/getactivelatestupdateshero`);
   return res.data;
}

export const getnotificationsbyid = async(id)=>{
   var res=await axios.get(`${apiurl()}/notification/apigetnotificationbyid`,{params:{_id:id}});
   return res.data;
}

export const apigetnewsandeventsbyid = async(id)=>{
   var res=await axios.get(`${apiurl()}/newsandevents/apigetnewsandeventsbyid`,{params:{_id:id}});
   return res.data;
}

export const getActiveWelcomePopup = async(id)=>{
   var res=await axios.get(`${apiurl()}/welcome-popup/getActiveWelcomePopup`);
   return res.data;
}

export const getactiveheaderdata = async(id)=>{
   var res=await axios.get(`${apiurl()}/header/getactiveheaderdata`);
   return res.data;
}
