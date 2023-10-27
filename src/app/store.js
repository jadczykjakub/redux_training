import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/Users';

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
