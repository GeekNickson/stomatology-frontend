import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { User } from '../../model/user.model';
import { authService, Credentials } from '../../service/auth.service';
import { localStorageService } from '../../service/local-storage.service';

export const LOGIN_ACTION = 'auth/login';
export const LOGOUT_ACTION = 'auth/logout';
export const REGISTER_ACTION = 'auth/register';
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
      localStorageService.setToken(response.data.jwt);
      return response.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response as AuthError);
    }
  }
);

export const registerUser = createAsyncThunk<User, FormData, { rejectValue: AuthError }>(
  REGISTER_ACTION,
  async (data: FormData, thunkApi) => {
    try {
      const response = await authService.register(data);
      localStorageService.setToken(response.data.jwt);
      thunkApi.dispatch(push('/home'));
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
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.user = payload;
      state.isLoading = false;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
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
