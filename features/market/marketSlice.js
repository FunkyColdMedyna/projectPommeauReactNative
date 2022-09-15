import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchMarket = createAsyncThunk(
    'market/fetchMarket',
    async () => {
        const response = await fetch(baseUrl + 'market');
        return response.json();
    }
);

const marketSlice = createSlice({
    name: 'market',
    initialState: { isLoading: true, errMess: null, marketArray: [] },
    reducers: {},
    extraReducers: {
        [fetchMarket.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchMarket.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.partnersArray = action.payload;
        },
        [fetchMarket.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const marketReducer = marketSlice.reducer;