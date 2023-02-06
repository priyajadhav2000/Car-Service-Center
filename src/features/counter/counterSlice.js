import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
   
    useridx:'',
  },
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      adduser: (state, action) => {
        state.user = action.payload;
      },
      userlist: (state) => {
        state.value =  state.user.lists
     },
      adduserid: (state, action) => {
        state.userid = action.payload;
      },
      adduseridget: (state) => {
        state.value.useridx =  state.userid
     }
  },
})

// Action creators are generated for each case reducer function
export const {  adduser,userlist,adduserid,adduseridget} = counterSlice.actions

export const selectUser = (state) => state.user.user;

export default counterSlice.reducer