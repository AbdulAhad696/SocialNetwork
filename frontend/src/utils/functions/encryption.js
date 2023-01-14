import * as CryptoJs from "crypto-js"
import { pvtkey } from "./constants";

export function encrypt(data){
    return CryptoJs.AES.encrypt(JSON.stringify(data),pvtkey).toString();
}
export function decrypt(data){
    return CryptoJs.AES.decrypt(data,pvtkey).toString(CryptoJs.enc.Utf8);
}
