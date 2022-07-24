import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchProducers = createAsyncThunk(
    'producers/fetchProducers',
    async () => {
        const response = await fetch(baseUrl + 'producers');
        if(!response.ok) {
            return Promise.reject(response.status);
        }
        return response.json();
    }
);

const initialState = {
    isLoading: true, 
    errMess: null, 
    producers: [],
    name: '',
    id: null,
    description: '',
    featured: false, 
    comments: ''
}

const producersSlice = createSlice({
    name: 'producers',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducers.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchProducers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.producers = action.payload;
            // state.name = action.payload[0].name;
            // state.id = action.payload.id;
            // state.description = action.payload.description;
            // state.featured = action.payload.featured;
            // state.comments = action.payload.comments;
        },
        [fetchProducers.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const producersReducer = producersSlice.reducer;