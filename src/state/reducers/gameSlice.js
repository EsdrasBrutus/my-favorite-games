import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import gameApi from "../../api/gameApi";
import { key } from "../../api/key";

// add page to params
export const fetchAsyncGames = createAsyncThunk(
    "game/fetchAsyncGames",
    async (params, thunkAPI) => {
        const response = await gameApi.get(`/games?key=${key}`, {
            params: {
                page: params.page,
                search: params.term,
                page_size: 40,
                ...key,
            },
        });
        return response.data;
    }
);
// export const fetchAsyncGames = createAsyncThunk('games/fetchAsyncGames', async (term) => {
//     const response = await gameApi.get(`/games?key=${key}&page_size=40&search=${term}`);
//     return response.data;
// })

export const fetchAsyncGameDetails = createAsyncThunk('games/fetchAsyncGameDetails', async (id) => {
    const response = await gameApi.get(`/games/${id}?key=${key}`)
    return response.data;
})

const initialState = {
    games: [],
    selectedGame: {},
    isLoading: false,
}

export const gameSlice = createSlice({ 
    name: "games",
    initialState,
    reducers: {
        removeSelectedGame: (state) => {
            state.selectedGame = {};
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
        [fetchAsyncGameDetails.fulfilled]: ( state, {payload}) => {
            console.log("Fetched game details");
            return {...state, selectedGame: payload};
        }
    },
});

export const { removeSelectedGame } = gameSlice.actions;
export const getAllGames = state => state.games.games;
export const getSelectedGame = state => state.games.selectedGame;
export default gameSlice.reducer;