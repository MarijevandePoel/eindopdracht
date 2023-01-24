import StudentData from "./StudentData.json";
import data from "./wincmockdata.json";

//studentdata
function getAllStudentData() {
	return StudentData;
}

//get all data
export function getAllData() {
	return data;
}

//names need to navigate to StudentProfile

export function getStudentNames() {
	let student = StudentData.map((student) => student.first_name);
	return student;
}

//evaluations
//array with all Courses

export function getAllCourses() {
	let allCourses = data.map((courses) => courses.assignment);
	let uniqueCourse = [...new Set(allCourses)];
	return uniqueCourse;
}

export function averageCourse() {
	const dataSet = data;
	let allCourses = data.map((courses) => courses.assignment);
	let unique = [...new Set(allCourses)];

	//making a new array
	let average = [];
	for (let course of unique) {
		let sumNice = 0;
		let niceScore = 0;
		let sumDiff = 0;
		let diffScore = 0;
		for (let object of dataSet.filter(
			(item) => item.assignment === course,
			data
		)) {
			if (object.nice) {
				sumNice += object.nice;
			}
			sumDiff += object.difficult;
			niceScore++;
			diffScore++;
		}
		const resultObject = {
			assigment: course,
			nice: sumNice / niceScore,
			difficult: sumDiff / diffScore,
		};
		average.push(resultObject);
	}
	return average;
}
export default getAllStudentData;
