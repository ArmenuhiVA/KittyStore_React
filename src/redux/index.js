import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./catSlice";
import boxesReducer from './boxSlices'
import clothesSlice from "./clothesSlice";

export default configureStore({
    reducer: {
       cats: catsReducer,
       boxes: boxesReducer,
       clothes: clothesSlice
    }
})