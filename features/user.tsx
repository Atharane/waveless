import { createSlice } from "@reduxjs/toolkit"

export interface userState {
  value: {
    name: string
    isLoggedIn: boolean
    email: string
  }
}

const initialState: userState = {
  value: {
    name: "",
    isLoggedIn: false,
    email: "",
  },
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { login } = userSlice.actions

export default userSlice.reducer
