import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { producersReducer } from '../features/producers/producersSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { eventsReducer } from '../features/events/eventsSlice';
import { articlesReducer } from '../features/articles/articlesSlice';
import { marketReducer } from '../features/market/marketSlice';
import  logger  from 'redux-logger';

export const store = configureStore({
    reducer: {
        producers: producersReducer,
        comments: commentsReducer,
        articles: articlesReducer,
        events: eventsReducer,
        market: marketReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([logger]) 
});