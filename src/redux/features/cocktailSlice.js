import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    const result = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    );
    return result.data;
  }
);

export const fetchSingleCocktail = createAsyncThunk(
  "cocktails/fetchSingleCocktail",
  async (id) => {
    const result = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    //console.log(result.data);
    return result.data;
  }
);

export const fetchSearchCocktail = createAsyncThunk(
  "cocktails/fetchSearchCocktail",
  async (searchTerm) => {
    const result = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    return result.data;
  }
);

export const contactSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    //fetching cocktails
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    //fetching cocktails
    [fetchSingleCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchSingleCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    //search cocktails
    [fetchSearchCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSearchCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchSearchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default contactSlice.reducer;
