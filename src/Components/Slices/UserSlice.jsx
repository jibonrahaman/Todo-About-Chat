import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: 0,
}

export const todoAbout = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginInfo: (state,action) => {
     console.log(action.payload);
     
    }
  },
})


export const { userLoginInfo  } = todoAbout.actions

export default todoAbout.reducer