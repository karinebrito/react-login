import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    username: "",
    email: "",
    phone: "",
    isLoggedIn: false
};

function setNameReducer (state, action) {
    state.name = action.payload;
}

function setUsernameReducer (state, action) {
    state.username = action.payload;
}

function setEmailReducer (state, action) {
    state.email = action.payload;
}

function setPhoneReducer (state, action) {
    state.phone = action.payload;
}

function setIsLoggedInReducer (state, action) {
    state.isLoggedIn = action.payload;
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: initialState,
  reducers: {
    setName: setNameReducer,
    setUsername: setUsernameReducer,
    setEmail: setEmailReducer,
    setPhone: setPhoneReducer,
    setIsLoggedIn: setIsLoggedInReducer
  }
})

export const { setName, setUsername, setEmail, setPhone, setIsLoggedIn } = userDataSlice.actions;

export default userDataSlice.reducer;