import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: '',
  timeout: 10000,
  validateStatus: status => status >= 200 && status < 300
});

class ApiRequest {
  static get(route) {
    return payload => this.request('GET', route, payload);
  }

  static put(route) {
    return payload => this.request('PUT', route, payload);
  }

  static post(route) {
    return payload => this.request('POST', route, payload);
  }

  static delete(route) {
    return payload => this.request('DELETE', route, payload);
  }

  static request(method, route, payload = {}) {
    return new Promise((resolve, reject) => {
      const path = payload.path ? `/${payload.path}` : '';
      const params = payload.params ? `?${payload.params}` : '';
      const customUrl = payload.url ? payload.url : '';
      const baseHeaders = {
        'Content-Type':
          payload.type === 'form-data'
            ? 'multipart/form-data'
            : 'application/json'
      };
      apiInstance
        .request({
          url: customUrl.length > 0 ? customUrl : route + path + params,
          method,
          headers: payload.headers
            ? { ...baseHeaders, ...payload.headers }
            : baseHeaders,
          data: payload.body ? payload.body : {}
        })
        .then(res => {
          // console.log(route, payload, res);
          resolve(res);
        })
        .catch(err => {
          // console.log(route, payload, err.response);
          if (err && err.response) {
            reject(err.response);
          } else {
            reject(err);
          }
        });
    });
  }
}

export default ApiRequest;
