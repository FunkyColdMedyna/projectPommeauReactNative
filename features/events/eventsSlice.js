import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async () => {
        const response = await fetch(baseUrl + 'events');
        return response.json();
    }
);

const eventsSlice = createSlice({
    name: 'events',
    initialState: { isLoading: true, errMess: null, eventsArray: [] },
    reducers: {},
    extraReducers: {
        [fetchEvents.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchEvents.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.partnersArray = action.payload;
        },
        [fetchEvents.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const eventsReducer = eventsSlice.reducer;