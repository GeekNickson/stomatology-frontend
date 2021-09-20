import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { ApiError } from '../../model/error.model';
import { User } from '../../model/user.model';
import { authService, Credentials } from '../../service/auth.service';
import { localStorageService } from '../../service/local-storage.service';

interface AuthSliceState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error?: ApiError;
  user?: User;
}

const initialState: AuthSliceState = {
  isAuthenticated: false,
  isLoading: false,
  error: undefined,
  user: undefined,
};

export const LOAD_USER = 'auth/loadUser';
export const LOGIN_ACTION = 'auth/login';
export const LOGOUT_ACTION = 'auth/logout';
export const REGISTER_ACTION = 'auth/register';

const login = createAsyncThunk<User, Credentials, { rejectValue: ApiError }>(
  LOGIN_ACTION,
  async (credentials: Credentials, thunkApi) => {
    try {
      const response = await authService.login(credentials);
      localStorageService.setToken(response.data.jwt);
      thunkApi.dispatch(push('/home'));
      return response.data.user;
    } catch (error: any) {
      const authError: ApiError = { code: error.response.status, message: error.response.data };
      return thunkApi.rejectWithValue(authError);
    }
  }
);

const registerUser = createAsyncThunk<User, FormData, { rejectValue: ApiError }>(
  REGISTER_ACTION,
  async (data: FormData, thunkApi) => {
    try {
      const response = await authService.register(data);
      localStorageService.setToken(response.data.jwt);
      thunkApi.dispatch(push('/home'));
      return response.data.user;
    } catch (error: any) {
      const authError: ApiError = { code: error.response.status, message: error.response.data };
      return thunkApi.rejectWithValue(authError);
    }
  }
);

const logout = createAsyncThunk<void, void, { rejectValue: ApiError }>(LOGOUT_ACTION, async (_, thunkApi) => {
  try {
    await authService.logout();
    localStorageService.removeToken();
    thunkApi.dispatch(push('/home'));
  } catch (error: any) {
    const authError: ApiError = { code: error.response.status, message: error.response.data };
    return thunkApi.rejectWithValue(authError);
  }
});

const loadUser = createAsyncThunk<User, void, { rejectValue: ApiError }>(LOAD_USER, async (_, thunkApi) => {
  try {
    const response = await authService.getAuth();
    return response.data;
  } catch (error: any) {
    const authError: ApiError = { code: error.response.status, message: error.response.data };
    return thunkApi.rejectWithValue(authError);
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
    builder.addCase(loadUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadUser.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.user = payload;
      state.isLoading = false;
    });
    builder.addCase(loadUser.rejected, (state, { payload }) => {
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
export { loadUser, login, registerUser, logout };
