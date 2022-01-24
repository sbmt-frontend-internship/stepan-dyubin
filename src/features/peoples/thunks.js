import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPeoplesThunk = createAsyncThunk('peoples/fetchPeoplesThunk', async (_, { dispatch}) => {
    const response = await fetch('https://swapi.py4e.com/api/people');

    const data = await response.json()

    return data
})
