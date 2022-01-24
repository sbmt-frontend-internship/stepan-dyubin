import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchPeoplesThunk } from "./thunks";

export const peoplesEntityAdapter = createEntityAdapter({
    selectId: (char) => char.url
})

// const arr = [....., { a: 1 }, { id: 10, b: 1}, { c: 43}, ....]

// const newArr = [...arr.slice(0, n), { b: newValues }, arr.slice(n+1)]

// state.entities[id] = { ..., b: newValue }

export const peoplesSlice = createSlice({
    initialState: peoplesEntityAdapter.getInitialState(),
    name: 'peoples',
    reducers: {
        updateChar: peoplesEntityAdapter.updateOne,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPeoplesThunk.fulfilled, (state, action) => {
            peoplesEntityAdapter.setAll(state, action.payload.results)
        })
    }
})

export const { updateChar } = peoplesSlice.actions

export const peoplesReducer = peoplesSlice.reducer
