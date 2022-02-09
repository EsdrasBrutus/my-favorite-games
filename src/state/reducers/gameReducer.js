import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    games: [],
}

export const gameSlice = createSlice({ 
    name: "games",
    initialState,
    reducers: {
        addGames: (state, {payload}) => {
            state.games = payload;
        }
    }
});

export const { addGames } = gameSlice.actions;
export const getAllGames = state => state.games.games;
export default gameSlice.reducer;