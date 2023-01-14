
import { pvtkey } from "./constants.js";
import cryptr from "cryptr"

export function encryption(data){
    let crypt = new cryptr(pvtkey)
    return crypt.encrypt(data)
}
export  function decryption(data){
    let crypt = new cryptr(pvtkey)
    return crypt.decrypt(data)
}
