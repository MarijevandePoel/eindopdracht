import { configureStore } from "@reduxjs/toolkit";
import { allData, allStudents } from "./sliceAndDiceSlice";
import { profile } from "./studentSlice";

export const store = configureStore({
	reducer: {
		data: allData,
		// students: allStudents,
		profile: profile,
	},
});
