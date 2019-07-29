const development = {
  isOnline: false,
  url: {
    base: `http://localhost:3000`,
    api: `http://localhost:8000/api`,
  }
};
// const production = {
//   isOnline: false,
//   url: {
//     api: `http://localhost:8000`,
//   }
// };

export const config = development;

const baseUrl = {
  auth: `${config.url.api}/auth`,
};

export default baseUrl;
