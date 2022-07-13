import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchProducers = createAsyncThunk(
    'producers/fetchProducers',
    async () => {
        const response = await fetch(baseUrl + 'producers');
        return response.json();
    }
);

const producersSlice = createSlice({
    name: 'producers',
    initialState: { isLoading: true, errMess: null, producersArray: [] },
    reducers: {},
    extraReducers: {
        [fetchProducers.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchProducers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.producersArray = action.payload;
        },
        [fetchProducers.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const producersReducer = producersSlice.reducer;