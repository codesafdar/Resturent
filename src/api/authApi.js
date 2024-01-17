
import { CHECKPHONE_ENDPOINT, VERIFYPHONE_ENDPOINT, LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "@/config/constant/endPoints"
import { post } from "@/services/restService"

export const signUpApi = (data) => {
    return post(SIGNUP_ENDPOINT, data)
}
export const checkPhoneApi = (data) => {
    debugger;
    return post(CHECKPHONE_ENDPOINT, data)
}
export const VerifyPhoneApi = (data) => {
    debugger;
    return post(VERIFYPHONE_ENDPOINT, data)
}
export const signInApi = (data) => {
    return post(LOGIN_ENDPOINT, data)
}
export const signOutApi = (refreshToken) => {
  console.log("****refreshToken", {refreshToken});

    return deleteReq('auth/signOut', {refreshToken})
}
export const refreshTokenApi = (data) => {
    return post('auth/refreshToken', data)
}