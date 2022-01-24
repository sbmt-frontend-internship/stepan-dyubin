import { configureStore } from "@reduxjs/toolkit";
import { peoplesReducer } from "../features/peoples/peoplesSlice";

export const store = configureStore({
    reducer: {
        peoples: peoplesReducer
    },
})
