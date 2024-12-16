import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "729f82c22cfe41f9a26be3327f2091ac";
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const response = await fetch(`${BASE_URL}?apiKey=${API_KEY}&number=9`);
  const data = await response.json();
  console.log(data);
  return data.results;
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recipesSlice.reducer;
