import { createSlice } from "@reduxjs/toolkit";
import data from "./wincmockdata.json";

const sliceAndDiceSlice = createSlice({
	name: "studentData",
	initialState: [data],

	reducers: {
		allData: (state) => {
			const data = state;
			console.log(data);
		},
		averageCourseNice: (state) => {
			let studentName = [state.name];
			console.log(studentName);
			// let course = [state.assignment];
			// let difficult = [state.difficult];
			// let nice = [state.nice];

			let students = [...new Set(studentName)];

			const sum = state.nice.reduce((a, b) => a + b, 0);
			const avg = sum / students.length || 0;
			return avg;
		},
	},
});

export const { allData } = sliceAndDiceSlice.actions;
export default sliceAndDiceSlice.reducer;
