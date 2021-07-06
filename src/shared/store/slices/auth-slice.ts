import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../model/user.model';
import { authService, Credentials } from '../../service/auth.service';

export const LOGIN_ACTION = 'auth/login';
export const LOGOUT_ACTION = 'auth/logout';

export interface AuthError {
  message: string;
  code: number;
}

interface AuthSliceState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error?: AuthError;
  user?: User;
}

const initialState: AuthSliceState = {
  isAuthenticated: false,
  isLoading: false,
  error: undefined,
  user: undefined,
};

export const login = createAsyncThunk<User, Credentials, { rejectValue: AuthError }>(
  LOGIN_ACTION,
  async (credentials: Credentials, thunkApi) => {
    try {
      const response = await authService.login(credentials);
      return response.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response as AuthError);
    }
  }
);

export const logout = createAsyncThunk<void, void, { rejectValue: AuthError }>(LOGOUT_ACTION, async (_, thunkApi) => {
  try {
    await authService.logout();
  } catch (error) {
    return thunkApi.rejectWithValue(error.response as AuthError);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.user = payload;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isAuthenticated = false;
      state.user = undefined;
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(logout.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
