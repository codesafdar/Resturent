import axios from "axios";
// import { HOST_API } from 'src/config';
import TokenService from "./tokenService";
import { store } from "@/redux/store";

export const HOST_API = process.env.REACT_APP_HOST_API_KEY || 'https://cafescale.com';
console.log('HOST_API---', HOST_API);
const instance = axios.create({
    baseURL: HOST_API,
    headers: {
       Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNjE5NGZiNTI1MzI0ZDQzYjY3NmQ3ZDkyOTc2M2ZlZDU5ZDMwMmU3ZjVhOTBkOTE5MWUwOTcwOWY5YzE1NTNjZmNjOWVlMzdiNmI2NTg2M2MiLCJpYXQiOjE3MDQ3ODU1OTIuMzk5MTEsIm5iZiI6MTcwNDc4NTU5Mi4zOTkxMjEsImV4cCI6MTczNjQwNzk5Mi4zNDU4OCwic3ViIjoiNTE4Iiwic2NvcGVzIjpbXX0.Ps5SZLrrI1cAjsHA6ggANb1jNgcKyHz0CpVtI7GRtmYNkaTNJH7yo7TvI1S4MIn3Gvgm5yV0VJA0sEQrbljo-O-o7fD_rKwhpsR3yT-sPbzntAAlC2DuQ8DzANFNLt-KDN2zAyGLLNGuNfHxtdeo3X_JtJhuVSnD_opW_bGS3KNxUjcnMeIv1DwZcw-1M8eKX43pUAq1elub-C3_pIttHGUFZp1vdYLYmu5B_6X1O1BGrx2NTCvkyM74WlKMzT5g1dJ_xB36IqdmF6Yr3g8AoM2fi3Cp1wunfYw9zXJkU7rVC3XpsKHJ8dKz1N0pk-eeho2KwCTLXRLfgizDa7y_4Ar36e6hkjWAj943KtiQL1vm3ZVzLPB4r8tBlI9quNTmweV8qAin7fkafglacI21o5rFxrThjbrob2WlfGosKZ485yvfKCX-UAEJp9I8zKd1yGhjYrWvfRyJKjgPbFM--hKlVtvsf7RBcAMgWN-yBTNUJI7Xwm53O8cJ6_Ogql0ESrKPAlDfdzdMSXL7mkQSLzu0InedeNmQ7cJ5IzbkbqopI9HYd1neoXgiWTrWL3xluZHt5217Gq_qW9kgCZwCVh9wqVgZWi-bfUbxbQn7Cu29lDojqJ_9WvtxRdXbpg1j5bOyCreid2GI0Mqdj3BVunnVFQLrlxccDMxvrgVmVSg`,  
        "Content-Type": "application/json",
      },
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.request.use(
  (config) => {
    const token = store.getState().user.token  // TokenService.getLocalAccessToken();
    console.log('--------===token',store.getState().user.token);
    
    if (token) {
      config.headers["x-access-token"] = `Bearer ${token}` ; // for Node.js Express back-end
    }
    console.log('--------===token2',config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;
//     if (originalConfig.url !== "/auth/login" && err.response) {
//       // Access Token was expired
//       if (err.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;

//         try {
//           const rs = await instance.post("/auth/refreshToken", {
//             refreshToken: TokenService.getLocalRefreshToken(),
//           });
//           const { accessToken } = rs.data;
//           TokenService.updateLocalAccessToken(accessToken);
//           return instance(originalConfig);
//         } catch (_error) {
//           console.log('refreshToken_error====', _error);
//           TokenService.removeUser()
//           return Promise.reject(_error);
//         }
//       }
//     }

//     return Promise.reject(err);
//   }
// );

export default instance;