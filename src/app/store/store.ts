// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { opportunityApi } from "./jobSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [opportunityApi.reducerPath]: opportunityApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(opportunityApi.middleware),
});

setupListeners(store.dispatch)

export default store;