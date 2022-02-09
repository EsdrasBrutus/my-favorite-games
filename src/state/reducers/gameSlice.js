import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import gameApi from "../../api/gameApi";
import { key } from "../../api/key";

export const fetchAsyncGames = createAsyncThunk('games/fetchAsyncGames', async () => {
    const response = await gameApi
        .get(`/games?key=${key}`)
    return response.data;
})

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
    },
    extraReducers: {
        [fetchAsyncGames.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncGames.fulfilled]: (state, {payload}) => {
            console.log("Fetched games");
            return {...state, games: payload};
        },
        [fetchAsyncGames.rejected]: () => {
            console.log("rejected");
        }
    },
});

export const { addGames } = gameSlice.actions;
export const getAllGames = state => state.games.games;
export default gameSlice.reducer;