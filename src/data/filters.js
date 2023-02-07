import StudentData from "./StudentData.json";
import data from "./wincmockdata.json";

//studentdata
function getAllStudentData() {
	return StudentData;
}
let wincData = data;
//get all data
export function getAllData() {
	const data = wincData.map((data) => data);
	return data;
}

export function getStudent(studentName) {
	const student = StudentData.valueOf().filter(
		(student) => student.first_name === studentName
	);
	return student[0];
}

export function averageCourse() {
	const dataSet = data;
	let allCourses = data.map((courses) => courses.assignment);
	let unique = [...new Set(allCourses)];

	//making a new array
	let average = [];
	//making a new object
	for (let course of unique) {
		let sumNice = 0;
		let niceScore = 0;
		let sumDiff = 0;
		let diffScore = 0;
		for (let newobject of dataSet.filter(
			(item) => item.assignment === course,
			data
		)) {
			if (newobject.nice) {
				sumNice += newobject.nice;
			}
			sumDiff += newobject.difficult;
			niceScore++;
			diffScore++;
		}
		//storing the results in an object
		const resultObject = {
			assignment: course,
			nice: sumNice / niceScore,
			difficult: sumDiff / diffScore,
		};
		average.push(resultObject);
	}
	return average;
}

const newAverageArrayNice = averageCourse();
const newAverageArrayDiff = averageCourse();

// ik weet dat ik beide sorteerfucnties in 1 fucntie had kunnen doen, maar ik kreeg dat niet goed voor elkaar.
export function sortDiff() {
	const newArray = [];
	const sortingDiff = newAverageArrayDiff.sort(
		(a, b) => b.difficult - a.difficult
	);
	console.log(sortingDiff);
	for (let i = 0; i < sortingDiff.length; i++) {
		delete sortingDiff[i].nice;

		newArray.push(sortingDiff[i]);
	}
	console.log(newArray);
	return newArray;
}

export function sortNice() {
	const newArray = [];
	const sortingNice = newAverageArrayNice.sort((a, b) => b.nice - a.nice);
	console.log(sortingNice);
	for (let i = 0; i < sortingNice.length; i++) {
		delete sortingNice[i].difficult;
		newArray.push(sortingNice[i]);
	}
	console.log(newArray);
	return newArray;
}
//first 25 assignments for homepage
export function sort25() {
	const first25 = wincData.slice(0, 25);

	return first25;
}

// functie voor de studentencharts

export function groupedBy(objectArray, property) {
	return objectArray.reduce((acc, obj) => {
		const key = obj[property];
		const curGroup = acc[key] ?? [];
		return { ...acc, [key]: [...curGroup, obj] };
	}, {});
}

export default getAllStudentData;
