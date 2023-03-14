import {createSlice} from '@reduxjs/toolkit';

interface User {
  isLogged: boolean;
}

const initialState: User = {
  isLogged: false,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      state.isLogged = true;
    },
  },
});

export const {login} = UserSlice.actions;
export default UserSlice.reducer;
