import StudentData from "./StudentData.json";
import data from "./wincmockdata.json";

//studentdata
export function getAllStudentData() {
	return StudentData;
}

//get all data
export function getAllData() {
	return data;
}

//names need to navigate

export function getStudentNames(name) {
	let student = StudentData.filter(
		(student) => student.first_name === data.name
	)[0];
	return student;
}

//evaluations
//array with all reviews

export function getAllEvaluations() {
	return data;
}
