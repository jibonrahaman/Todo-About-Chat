import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: localStorage.getItem('userLoginInfo') ? JSON.parse(localStorage.getItem('userLoginInfo')):null,
}

export const todoAbout = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginInfo: (state,action) => {
   state.userInfo=action.payload
     
    }
  },
})


export const { userLoginInfo  } = todoAbout.actions

export default todoAbout.reducer