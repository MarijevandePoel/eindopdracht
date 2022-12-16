import { configureStore } from "@reduxjs/toolkit";
import allData from "./sliceAndDiceSlice";

export const store = configureStore({
	reducer: {
		data: allData,
	},
});
