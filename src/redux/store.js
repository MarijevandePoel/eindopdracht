import { configureStore } from "@reduxjs/toolkit";
import { allCourses } from "./sliceAndDiceSlice";
import { profile } from "./studentSlice";

export const store = configureStore({
	reducer: {
		data: allCourses,
		//students: allStudents,
		profile: profile,
	},
});
