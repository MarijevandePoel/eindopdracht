import React from "react";
import { allData } from "../redux/sliceAndDiceSlice";
import { useSelector, useDispatch } from "react-redux";
import StudentProfile from "./StudentProfile";

const Container = () => {
	// const [chart, setChart] = useState("");
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);
	const student = useSelector((state) => state.profile);

	const renderData = (event) => {
		event.preventDefault();
		console.log("klik");
		console.log(data);
		dispatch(allData(data));
	};

	return (
		<div>
			<button onClick={renderData}>data</button>

			<>
				<h1>plek voor een chart</h1>

				<div id="chart"></div>
			</>
			<StudentProfile />
		</div>
	);
};

export default Container;
