import { createSlice } from "@reduxjs/toolkit";
import data from "../data/wincmockdata.json";

const sliceAndDiceSlice = createSlice({
	name: "studentData",
	initialState: { data },
	// maak je van data een object dan kan je via useSelector de data nesten.

	reducers: {
		allData: (state, action) => {
			console.log(state);
		},
		allStudents: (state, action) => {
			let allStudents = [...new Set(state.name)];
			console.log(allStudents);
		},
		averageCourseNice: (state, action) => {
			let nice = [state.nice];
			const sum = nice.reduce((a, b) => a + b, 0);
			const avgNice = sum / allStudents.length || 0;
			return avgNice;
		},
		averageCourseDiff: (state, action) => {
			let difficult = [state.difficult];
			const sum = difficult.reduce((a, b) => a + b, 0);
			const avgDiff = sum / allStudents.length || 0;
			return avgDiff;
		},

		// topTenCourseNice: (state, action) => {
		// 	let course = [state.assignment];
		// },
	},
});

export const { allData, allStudents } = sliceAndDiceSlice.actions;
export default sliceAndDiceSlice.reducer;
