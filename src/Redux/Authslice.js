// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {

//   token:localStorage.getItem('token')?? ''
  
// };

// export const Authslice = createSlice({
//     name: 'auth',
//     initialState, // Corrected from 'initialstate'
//     reducers: {
//       setLogin: (state, action) => {
//         state.token = action.payload.userToken;
//         localStorage.setItem('token',action.payload.userToken)
//       },
//       setLogout: (state) => {
//         state.token = null;
//         localStorage.removeItem('token')
//       },
    
  
  
//     }
//   });
  
//   export const { setLogin, setLogout} = Authslice.actions;
//   export default Authslice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    error: false,
    token: null, 
  },
  reducers: {
    loginStart: (state) => {
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.token = action.payload; 
    },
    loginFailure: (state) => {
      state.error = true;
      state.token = null;
    },
    logout: (state) => {
        state.currentUser = null;
        state.error = false;
        state.token = null;
      },
  
  },
});

export const { loginStart, loginSuccess, loginFailure,logout } = userSlice.actions;
export default userSlice.reducer;
