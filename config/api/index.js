import ApiRequest from './config';
import baseUrl, { config } from './url';



const API = {
  login: ApiRequest.post(baseUrl.auth),
  codepelajar: ApiRequest.get(baseUrl.codepelajar)
}


export {
  API,
  ApiRequest,
  baseUrl,
  config
}