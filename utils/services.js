import Setting from './settings';
import axios from 'axios';

const request  = async (path, method, data, formData = false) => {
    let promise = new Promise((resolve, reject) => {
        let option = {};
        let url = `${Setting.urlPath.apiPath}${path}`;
        method = method.toLowerCase();
        if(method === "post" || method === "put"){
            option.method = method;
            option.data = data;
        } else {
            option.method = method;
        }
        option.url = url;
        if(formData){
            option.header = {
                'content-type' : 'multipart/form-data'
            }
        }

        try {
            axios(option)
            .then((response) => {
                return resolve(response);
            }, (error) => {
                // error request return json response
                return resolve(error.response);
            })
        } catch (error){
            // error code
            return reject(new Error(error));
        }
    })

    return promise;
}

const adminLogin = async (data = {}) => {
    let path = 'api/auth'
    let method = "post";
    return request(path, method, data);
}


const API = {
    adminLogin
}

export default API;