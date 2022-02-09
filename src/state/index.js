import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import  gameReducer from './reducers/gameSlice';

const store = configureStore({
    reducer: {
        games: gameReducer,
    },
});

export default store;