import {React,Component} from "react";
import CryptoJS from 'crypto-js';

class AesEncryption extends Component {
  
    encrypt(objData) {
      let key = "8080808080808080";
      let iv = "8080808080808080";
      key = CryptoJS.enc.Utf8.parse(key);
      iv = CryptoJS.enc.Utf8.parse(iv);
      let encrypted = CryptoJS.AES.encrypt(JSON.stringify(objData), key, { iv: iv });
      encrypted = encrypted.toString();
      return encrypted;
    }
  
    decrypt(stringData) {
      let key = "8080808080808080";
      let iv = "8080808080808080";
      key = CryptoJS.enc.Utf8.parse(key);
      iv = CryptoJS.enc.Utf8.parse(iv);
      let decrypted = CryptoJS.AES.decrypt(stringData, key, { iv: iv });
      decrypted = decrypted.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decrypted);
    }
  }
  
  export default new AesEncryption;