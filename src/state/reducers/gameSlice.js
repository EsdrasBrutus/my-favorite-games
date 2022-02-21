import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import gameApi from "../../api/gameApi";
import { key } from "../../api/key";

export const fetchAsyncGames = createAsyncThunk('games/fetchAsyncGames', async () => {
    const response = await gameApi.get(`/games?key=${key}&page_size=40`)
    return response.data;
})

export const fetchAsyncGameDetails = createAsyncThunk('games/fetchAsyncGameDetails', async (id) => {
    const response = await gameApi.get(`/games/${id}?key=${key}`)
    return response.data;
})

const initialState = {
    games: [],
    selectedGame: {},
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
        },
        [fetchAsyncGameDetails.pending]: (state) => {
            console.log("Fetched game details");
            return { ...state, selectedGame: initialState.selectedGame };
        },
        [fetchAsyncGameDetails.fulfilled]: ( state, {payload}) => {
            console.log("Fetched game details");
            return {...state, selectedGame: payload};
        }
    },
});

export const { addGames } = gameSlice.actions;
export const getAllGames = state => state.games.games;
export const getSelectedGame = state => state.games.selectedGame;
export default gameSlice.reducer;