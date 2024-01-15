import { createSlice } from '@reduxjs/toolkit';
import { refreshTokenApi, signInApi, signOutApi, signUpApi } from '@/api/authApi';
// utils
// import { dispatch } from '../store';
import tokenService from '@/services/tokenService';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  userInfo: {},
  token: ''
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // START LOADING
    setLoading(state, { payload }) {
      state.isLoading = payload;
    },

    _signIn(state, {payload}) {
      state.userInfo = payload.user
      state.token = payload.token
    },
    _signUp(state, {payload}) {
      state.userInfo = payload.user
      state.token = payload.token
    },

    _signOut(state) {
      state.token = ''
      state.userInfo = {}
    },

    _refreshToken(state, {payload}) {
      state.userInfo = payload
    },



    // HAS ERROR
    hasError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// Reducer
export default slice.reducer;
export const {
  _signIn,
  _signUp,
  _signOut,
  _refreshToken,
  setLoading,
  getLabelsSuccess,
  hasError
} = slice.actions
// ----------------------------------------------------------------------

export const signIn =  (data) => async (dispatch) => {
    // dispatch(setLoading(true));
    try {
      const response = await signInApi(data)
      console.log("88*********", response);
      // return
      const { user, token} = response.data
      if (token) {
        dispatch(_signIn(response.data))
        tokenService.setUser(user)
      } else {
        return error
      }

    } catch (error) {
      console.log("88*********error", error);
      dispatch(hasError(error));
    }
}
export const signUp =  (data) => async (dispatch) => {
  // dispatch(setLoading(true));
  try {
    const response = await signUpApi(data)
    console.log("88*********", response);
    // return
    const { user, token} = response.data
    if (token) {
      dispatch(_signUp(response.data))
      tokenService.setUser(user)
    } else {
      return error
    }

  } catch (error) {
    console.log("88*********error", error);
    dispatch(hasError(error));
  }
}
export const signOut =  (data) => async (dispatch) => {
    // const refreshToken = tokenService.getLocalRefreshToken()
    try {
      // const response = await signOutApi(refreshToken)
      dispatch(_signOut())
    } catch (error) {
      dispatch(hasError(error));
    }
}

export const refreshToken = (data) => async (dispatch) => {
  try {
    const response = await refreshTokenApi(data)
    console.log("refreshToken response====", response);
    dispatch(_refreshToken(response))
    // dispatch(getLabelsSuccess(response.data.labels));
  } catch (error) {
    // dispatch(hasError(error));
  }
}

export const getUsers = (data) => async (dispatch) => {
  try {
    const response = await getUserA(data)
    console.log("get allusers response====", response);
    // dispatch(getLabelsSuccess(response.data.labels));
  } catch (error) {
    // dispatch(hasError(error));
  }
}