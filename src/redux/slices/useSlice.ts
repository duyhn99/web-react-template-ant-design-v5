import { IUser } from '@/interfaces/user';
import { persistUser, readUser } from '@/services/localStorage.service';
import { createAction, createSlice, PrepareAction } from '@reduxjs/toolkit';

export interface UserState {
  user: IUser;
}

const initialState: UserState = {
  user: readUser()
};

export const setUser = createAction<PrepareAction<IUser>>('user/setUser', (newUser) => {
  persistUser(newUser);

  return {
    payload: newUser
  };
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
  }
});

export default userSlice.reducer;
