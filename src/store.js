import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "./Reducer/authReducer"

const store = configureStore({
    reducer: {
        root: authReducer,
    }
})

export default store;