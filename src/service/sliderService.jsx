import axios from "axios";


 const API_URL = import.meta.env.VITE_SERVER_API;



export function getSlider() {
  return axios.get(API_URL + "/api/slider");
}





