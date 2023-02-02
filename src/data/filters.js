import StudentData from "./StudentData.json";
import data from "./wincmockdata.json";

//studentdata
function getAllStudentData() {
	return StudentData;
}
let wincData = data;
//get all data
export function getAllData() {
	const data = wincData.map;
	return data[0];
}

//names need to navigate to StudentProfile

export function getStudentNames() {
	let student = StudentData.map((student) => student.first_name);
	return student;
}

export function getStudent(studentName) {
	const student = StudentData.valueOf().filter(
		(student) => student.first_name === studentName
	);
	return student[0];
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

const newAverageArraytoSort = averageCourse();

export function sortDiff() {
	const newArray = newAverageArraytoSort.sort(
		(a, b) => b.difficult - a.difficult
	);
	return newArray;
}

//first 25 assignments for homepage
export function sort25() {
	const first25 = newAverageArraytoSort.slice(0, 25);

	return first25;
}

export function groupedBy(objectArray, property) {
	return objectArray.reduce((acc, obj) => {
		const key = obj[property];
		const curGroup = acc[key] ?? [];
		return { ...acc, [key]: [...curGroup, obj] };
	}, {});
}

export function sortNice() {
	const newArray = newAverageArraytoSort.sort((a, b) => b.nice - a.nice);

	return newArray;
}

export default getAllStudentData;
