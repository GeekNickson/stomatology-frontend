import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiError } from '../../model/error.model';
import { Patient } from '../../model/patient.model';
import { User } from '../../model/user.model';
import { patientService } from '../../service/patient.service';

export const LOAD_PROFILE = 'profile/load';

interface ProfileSliceState<T extends User> {
  user: T | null;
  error?: ApiError;
  isLoading: boolean;
}

const initialState: ProfileSliceState<Patient> = {
  isLoading: false,
  user: null,
  error: undefined,
};

const fetchUserdata = createAsyncThunk<
  Patient,
  number,
  {
    rejectValue: ApiError;
  }
>(LOAD_PROFILE, async (id: number, thunkApi) => {
  try {
    console.log(thunkApi.getState());
    const response = await patientService.getPatient(id);
    return response.data;
  } catch (error) {
    const apiError: ApiError = { code: error.response.status, message: error.response.data };
    return thunkApi.rejectWithValue(apiError);
  }
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserdata.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserdata.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = undefined;
    });
    builder.addCase(fetchUserdata.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.user = null;
      state.error = payload;
    });
  },
});

export default profileSlice.reducer;
export { fetchUserdata };
