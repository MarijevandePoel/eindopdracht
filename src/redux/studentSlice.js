import { createSlice } from "@reduxjs/toolkit";
import studentdata from "../data/StudentData.json";

const initialState = studentdata;

const studentSlice = createSlice({
	name: "profiledata",
	initialState,

	reducers: {
		profile: (state, action) => {
			return state;
		},
	},
});

export const { profile } = studentSlice.actions;
export default studentSlice.reducer;
