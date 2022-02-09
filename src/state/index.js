import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { gameSlice } from './reducers/gameReducer';

const store = configureStore({
    reducer: {
        games: gameSlice.reducer
    },
});

export default store;