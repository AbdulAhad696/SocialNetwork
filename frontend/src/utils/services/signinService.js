import axios from "axios";
import { environment } from "../functions/constants";

export function signIn(data){
    return axios.get(`${environment.baseUrl}/signin/${data.username}/${data.password}`)
}