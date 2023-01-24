import { createSlice } from "@reduxjs/toolkit";
import data from "../data/wincmockdata.json";

const sliceAndDiceSlice = createSlice({
	name: "studentData",
	initialState: { data },
	// maak je van data een object dan kan je via useSelector de data nesten.

	reducers: {
		allCourses: (state, action) => {
			let allCourses = state;
			let uniqueCourse = [...new Set(allCourses)];
			return uniqueCourse;
		},

		assignementToggleNice: (state, action) => {
			let assignment = state;
			let nice = action.payload;
		},
		assignementToggleDifficult: (state, action) => {},
	},
});

export const { allCourses, assignementToggleNice, assignementToggleDifficult } =
	sliceAndDiceSlice.actions;
export default sliceAndDiceSlice.reducer;
