// import httpClient from "react-http-client"
import axios from "axios"
import { environment } from "../functions/constants"


export function sendData(data){

    // return (httpClient.post(`http://localhost:8001/signup`,data));
    return axios.post(`${environment.baseUrl}/signup`,data)
}
