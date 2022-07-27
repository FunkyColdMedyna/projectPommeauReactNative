import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async () => {
        const response = await fetch(baseUrl + 'events');
        if(!response.ok) {
            return Promise.reject(response.status);
        }
        return response.json();
    }
);

const initialState = {
    isLoading: true, 
    errMess: null, 
    events: [],
    name: '',
    id: null,
    description: '',
    featured: false, 
    comments: ''
}

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchEvents.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchEvents.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.events = action.payload;
        },
        [fetchEvents.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const eventsReducer = eventsSlice.reducer;