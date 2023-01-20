import StudentMockData from "../data/StudentData.json";

let cardData = StudentMockData;
function Student() {
	return (
		<div>
			Name: {cardData.first_name && cardData.last_name} Age: {cardData.age},
			Phone number: {cardData.Phone}, E-mail: {cardData.email} Photo:
			{cardData.avantar}
		</div>
	);
}

export default Student;
