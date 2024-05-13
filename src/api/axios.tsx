import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
   timeout: 10000,
   headers: {
    "Accept": "*/*",
    "Content-Type": "application/json"
   }
})

instance.interceptors.response.use((response) => {
    return response
 }, (error => {
    if(error.response.status === 401){
     localStorage.removeItem("token")
     localStorage.removeItem("user")
     localStorage.removeItem("data")
    }
    return Promise.reject(error)
    
 }))

export default instance