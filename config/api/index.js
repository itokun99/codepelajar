import ApiRequest from './config';
import baseUrl, { config } from './url';



const API = {
  login: ApiRequest.post(baseUrl.auth)
}


export {
  API,
  ApiRequest,
  baseUrl,
  config
}