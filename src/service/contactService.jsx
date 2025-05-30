import axios from "axios";


 const API_URL = import.meta.env.VITE_SERVER_API;



export function postContact(data) {
  return axios.post(API_URL + "/api/contacts", data);
}





