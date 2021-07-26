import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiError } from '../../model/error.model';
import { MedicalService } from '../../model/medical-service.model';
import { medicalServiceService } from '../../service/medical-service.service';

export const LOAD_SERVICES = 'services/load';

interface ServicesState {
  services: MedicalService[];
  error?: ApiError;
  isLoading: boolean;
}

const initialState: ServicesState = {
  isLoading: false,
  services: [],
  error: undefined,
};

const fetchServices = createAsyncThunk<MedicalService[], void, { rejectValue: ApiError }>(
  LOAD_SERVICES,
  async (_, thunkApi) => {
    try {
      const response = await medicalServiceService.getServices();
      return response.data;
    } catch (error) {
      const apiError: ApiError = { code: error.response.status, message: error.response.data };
      return thunkApi.rejectWithValue(apiError);
    }
  }
);

const servicesSlice = createSlice({
  name: 'serivces',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchServices.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.services = payload;
      state.error = undefined;
    });
    builder.addCase(fetchServices.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.services = [];
      state.error = payload;
    });
  },
});

export default servicesSlice.reducer;
export { fetchServices };
