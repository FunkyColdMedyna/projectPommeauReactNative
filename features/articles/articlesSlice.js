import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async () => {
        const response = await fetch(baseUrl + 'articles');
        return response.json();
    }
);

const articlesSlice = createSlice({
    name: 'articels',
    initialState: { isLoading: true, errMess: null, articlesArray: [] },
    reducers: {},
    extraReducers: {
        [fetchArticles.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchArticles.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.promotionsArray = action.payload;
        },
        [fetchArticles.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const articlesReducer = articlesSlice.reducer;