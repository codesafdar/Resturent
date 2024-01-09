import { post } from "@/services/restService";
import { LOGIN_ENDPOINT } from "../constant/endPoints";

const AuthService = {
  
  login: (data: any) => {
    return post(LOGIN_ENDPOINT, data);
  },
//   signUpApi :(data: any) => {
//     return post('auth/signUp', data)
// },
// signInApi :(data: any) => {
//     return post('auth/login', data)
// },
// signOutApi :(refreshToken: any) => {
//   console.log("****refreshToken", {refreshToken});

//     return deleteReq('auth/signOut', {refreshToken})
// },
// refreshTokenApi :(data: any) => {
//     return post('auth/refreshToken', data)
// }
};
export default AuthService;
