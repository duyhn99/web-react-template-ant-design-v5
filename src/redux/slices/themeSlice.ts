import { createAction, createSlice, PrepareAction } from '@reduxjs/toolkit';

type ThemeType = 'light' | 'dark';

interface ThemeState {
  theme: ThemeType;
}

export const defaultTheme = (localStorage.getItem('theme') as ThemeType) || 'light';

localStorage.setItem('theme', defaultTheme);

const initialState: ThemeState = {
  theme: defaultTheme
};

export const setTheme = createAction<PrepareAction<ThemeType>>('theme/setTheme', (theme: ThemeType) => {
  localStorage.setItem('theme', theme);
  return {
    payload: theme
  };
});

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setTheme, (state, action) => {
      state.theme = action.payload;
    });
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
