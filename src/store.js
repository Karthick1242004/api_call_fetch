import { configureStore } from "@reduxjs/toolkit";
import NameReducer from "./reducer/NameSlicer";

export const store = configureStore({
    reducer : {
        nameslice:NameReducer,
    },
})