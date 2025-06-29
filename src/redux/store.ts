import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '@/redux/slices/themeSlice';
import userReducer from '@/redux/slices/useSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
